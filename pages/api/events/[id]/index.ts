import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/lib/prisma'

import {
  schema as eventSchema,
  validate as validateEvent
} from '@/validators/event'

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

    switch (method) {
      case 'DELETE':
        await prisma.event.delete({
          where: {
            id: Number(id)
          }
        })
        const results = {}
        res.json(results)
        break;
      case 'GET': // Get event details
        const event = await prisma.event.findUnique({
          where: {
            id: Number(id)
          },
          include: {
            region: true,
          }
        });
        if (event) {
          return res.status(200).json(event)
        }
        res.status(404).json({ message: 'Event not found' })
        break

      case 'PUT':

        try {
          await validateEvent(req.body)
        } catch (e) {
          return res.status(400).json({ message: e.message })
        }

        const updatedEvent = await prisma.event.update({
          where: {
            id: Number(id)
          },
          data: eventSchema.cast(req.body)
        })
        // TODO: наверно лучше отвечать '204 No content' вместо возврата данных эвента
        res.status(200).json(updatedEvent)
        break

      default:
        res.setHeader('Allow', ['GET', 'PUT', 'DELETE'])
        res.status(405).end(`Method ${method} Not Allowed`)
    }
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
}
