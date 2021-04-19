import Nav from '@/ui-kit/nav'
import Container from '@/ui-kit/container'
import Breadcrumb from '@/ui-kit/breadcrumb'
import {Col, Row} from 'antd'
import LeftMenu from '@/components/events/event/form/left-menu'
import EditEventObjectPlanComponent from '@/components/events/event/object-plan/edit'
import {useRouter} from 'next/router'

export default function EventObjectPlanPage() {
  const router = useRouter()
  const { id } = router.query
  return (
    <>
      <Breadcrumb/>
      <Nav title="Events" withNewBtn={false}/>
      <Container className="w-full lg:w-2/4">
          <Row>
              <Col span={5}>
                  <LeftMenu selectKey={'menu_events-object-plan'} eventId={id}/>
              </Col>
              <Col span={19}>
                <EditEventObjectPlanComponent />
              </Col>
          </Row>
      </Container>
    </>
  )
}