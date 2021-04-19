import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/lib/prisma'

import {
  schema as menuSchema,
  validate as validateMenu
} from '@/validators/menu'

function getConnectParams(key, objects) {
  return objects.map((value) => {
    return {[key]: Number(value)}
  });
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const {
      query: { id },
      method,
    } = req

    if (!id) {
      return res.status(400).json({ message: '`id` required' })
    }

    if (typeof parseInt(id.toString()) !== 'number') {
      return res.status(400).json({ message: '`id` must be a number' })
    }

    let validInput

    switch (method) {
      case 'GET': // Get menu details
        const menu = await prisma.menu.findFirst({
          where: {
            event: {id: Number(id)}
          },
          include: {
            kitchens: {
              select: {
                kitchenId: true,
              },
            },
            specialMenu: {
              select: {
                specialMenuId: true,
              },
            },
            facilities: {
              select: {
                facilityId: true,
              },
            }
          }
        });
        if (menu) {
          return res.status(200).json(menu)
        }
        res.status(404).json({ message: 'Menu not found' })
        break

      case 'POST': // Create Menu
        if (!id) {
          return res.status(400).json({ message: '`id` is required' })
        }

        try {
          await validateMenu(req.body)
        } catch (e) {
          return res.status(400).json({ message: e.message })
        }

        validInput = menuSchema.cast(req.body)

        const createdMenu = await prisma.menu.create({
          data: {
            averagePrice: {
              connect: {id: validInput.averagePriceId},
            },
            facilities: {
              create: getConnectParams('facilityId', validInput.facilities),
            },
            specialMenu: {
              create: getConnectParams('specialMenuId', validInput.specialMenu),
            },
            kitchens: {
              create: getConnectParams('kitchenId', validInput.kitchens)
            },
            images: validInput.images,
            event: {
              connect: {
                id: Number(id)
              },
            },
          },
        })

        res.status(201).json(createdMenu)
        break
      case 'PUT':
        const menuId = req.body.menuId
        delete req.body.menuId

        if (!menuId) {
          return res.status(400).json({ message: '`menuId` is required' })
        }

        try {
          await validateMenu(req.body)
        } catch (e) {
          return res.status(400).json({ message: e.message })
        }

        // удаление старых значений из мультиселектов
        await prisma.menuKitchens.deleteMany({
          where: {
            menuId: Number(menuId)
          }
        });
        await prisma.menuSpecialMenu.deleteMany({
          where: {
            menuId: Number(menuId)
          }
        });
        await prisma.menuFacilities.deleteMany({
          where: {
            menuId: Number(menuId)
          }
        });

        validInput = menuSchema.cast(req.body)

        const updatedMenu = await prisma.menu.update({
          where: {
            id: Number(menuId)
          },
          data: {
            images: validInput.images,
            averagePrice: {
              connect: {id: validInput.averagePriceId},
            },
            facilities: {
              create: getConnectParams('facilityId', validInput.facilities),
            },
            specialMenu: {
              create: getConnectParams('specialMenuId', validInput.specialMenu),
            },
            kitchens: {
              create: getConnectParams('kitchenId', validInput.kitchens)
            }
          },
        });
        // TODO: наверно лучше отвечать '204 No content' вместо возврата данных эвента
        res.status(200).json(updatedMenu)

        break

      default:
        res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE'])
        res.status(405).end(`Method ${method} Not Allowed`)
    }
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
}

