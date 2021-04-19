import Container from '@/ui-kit/container'
import Breadcrumb from "@/ui-kit/breadcrumb";
import Link from 'next/link'

export default function IndexPage(props) {
  return (
    <>
      <Breadcrumb/>
      <Container className={"w-full h-full flex flex-col justify-center items-center"}>
          <span>Админка - главная (заглушка) </span>

          <div className={"mt-2"}>
              <Link href={`/`}>
                  <a className="py-2 font-bold">home</a>
              </Link>
              &nbsp;|&nbsp;
              <Link href={`/admin/events`}>
                  <a className="py-2 font-bold">events</a>
              </Link>
          </div>
      </Container>
    </>
  )
}
