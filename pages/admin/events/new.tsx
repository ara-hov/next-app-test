import Nav from '@/ui-kit/nav'
import Container from '@/ui-kit/container'
import EventForm from '@/components/events/event/form'
import Breadcrumb from '@/ui-kit/breadcrumb'
import LeftMenu from '@/components/events/event/left-menu'
import {Col, Row} from 'antd'

export default function NewEntryPage() {
  return (
    <>
      <Breadcrumb/>
      <Nav title="Events" withNewBtn={false}/>
      <Container className="w-full lg:w-2/4">
          <Row>
              <Col span={5}>
                  <LeftMenu selectKey={'menu_events-add-new'} eventId=''/>
              </Col>
              <Col span={19}>
                <EventForm />
              </Col>
          </Row>
      </Container>
    </>
  )
}