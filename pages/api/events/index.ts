import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/lib/prisma'

import {
  schema as eventSchema,
  validate as validateEvent
} from '@/validators/event'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    switch (req.method) {
      case 'GET': // Events List
        const events = await prisma.event.findMany()
        res.json({
          items: events, // TODO: какой ключ удобнее: 'data' or 'events'?
          pagination: {} // TODO: paginated response
        })
        break

      case 'POST': // Create Event
        try {
          await validateEvent(req.body)
        } catch (e) {
          return res.status(400).json({ message: e.message })
        }

        const createdEvent = await prisma.event.create({
          data: eventSchema.cast(req.body)
        })

        res.status(201).json(createdEvent)
        break

      default:
        res.setHeader('Allow', ['GET', 'POST'])
        res.status(405).end(`Method ${req.method} Not Allowed`)
    }
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
}
