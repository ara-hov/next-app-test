import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/lib/prisma'

import {
  schema as contentSchema,
  validate as validateContent
} from '@/validators/content'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  let results = {}
  let event = null
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

    switch (method) {
      case 'GET': // Get event details
        event = await prisma.event.findUnique({
          where: {
            id: Number(id)
          },
          include: {
            content: true,
          }
        });
        if (event) {
          if (event.content) {
            return res.status(200).json(event.content)
          }
          return res.status(404).json({ message: 'Content not found' })
        }
        return res.status(404).json({ message: 'Event not found' })
        break

      case 'POST':
        if (!id) {
          return res.status(400).json({ message: '`id` is required' })
        }

        try {
          await validateContent(req.body)
        } catch (e) {
          return res.status(400).json({ message: e.message })
        }

        const createdContent = await prisma.content.create({
          data: {
            ...contentSchema.cast(req.body),
            event: {
              connect: {
                id: Number(id)
              },
            },
          },
        })

        res.status(201).json(createdContent)
        break;

      case 'PUT':
        const contentId = req.body.contentId
        delete req.body.contentId

        if (!contentId) {
          return res.status(400).json({ message: '`contentId` is required' })
        }

        try {
          await validateContent(req.body)
        } catch (e) {
          return res.status(400).json({ message: e.message })
        }

        const updatedContent = await prisma.content.update({
          where: {
            id: Number(contentId)
          },
          data: contentSchema.cast(req.body)
        })
        // TODO: наверно лучше отвечать '204 No content' вместо возврата данных эвента
        res.status(200).json(updatedContent)
        break

      default:
        res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE'])
        res.status(405).end(`Method ${method} Not Allowed`)
    }
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
}
