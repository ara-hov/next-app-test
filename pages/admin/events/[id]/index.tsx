import Container from '@/ui-kit/container'
import Nav from '@/ui-kit/nav'
import EventForm from '@/components/events/event/form'
import Breadcrumb from '@/ui-kit/breadcrumb'
import {Col, Row} from 'antd'
import LeftMenu from '@/components/events/event/left-menu'
import {useRouter} from 'next/router'

export default function EditEntryPage() {
  const router = useRouter()
  const { id } = router.query

  return (
    <>
      <Breadcrumb/>
      <Nav title="Events" withNewBtn={false}/>
      <Container>
          <Row>
              <Col span={5}>
                  <LeftMenu selectKey={'menu_events-event-info'} eventId={id}/>
              </Col>
              <Col span={19}>
                <EventForm />
              </Col>
          </Row>
      </Container>
    </>
  )
}
