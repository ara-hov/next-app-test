import { useState } from 'react'
import Link from 'next/link'
import { mutate } from 'swr'
import { List } from 'antd';

import ButtonLink from '@/ui-kit/button-link'
import Button from '@/ui-kit/button'

function Event({ item }) {
  const [deleting, setDeleting] = useState(false)
  const {
    id,
    author,
    eventName,
    address
  } = item

  async function deleteEvent() {

    setDeleting(true)
    let res = await fetch(`/api/events/${id}`, { method: 'DELETE' })
    let json = await res.json()
    if (!res.ok) throw Error(json.message)
    mutate('/api/events')
    setDeleting(false)
  }
  return (
    <div>
      <List.Item actions={[
          <ButtonLink
            href={`/admin/events/${id}`}
            className="h-5 py-0 mx-1"
          >
           Edit
         </ButtonLink>,
         <Button
          disabled={deleting}
          onClick={deleteEvent}
          className="h-5 py-0 mx-1"
          >
          {deleting ? 'Deleting ...' : 'Delete'}
        </Button>]}>
        <List.Item.Meta
          title={<Link href={`/admin/events/${id}`}>
            <a className="py-2 font-bold">{author}</a>
          </Link>}
          description={eventName}/>
      </List.Item>
    </div>
  )
}

export default Event
