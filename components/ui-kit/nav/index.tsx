import Link from 'next/link';
import Container from '@/ui-kit/container';
import ButtonLink from '@/ui-kit/button-link';

export default function Nav({
  title = 'Events',
  withNewBtn = true,
  titleNewBtn = 'New event',
  href = '/admin/events/new'
}) {
  if (withNewBtn)
    return (
      <Container className="py-4">
        <nav>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <Link href="/">
              <a
                style={{
                  fontWeight: 900,
                  fontSize: '48px',
                  lineHeight: '60px',
                  color: '#000000',
                  marginBottom: '40px'
                }}
              >
                {title}
              </a>
            </Link>
            <ButtonLink href={href}>{titleNewBtn}</ButtonLink>
          </div>
        </nav>
      </Container>
    );

  return (
    <Container className="py-4">
      <nav>
        <div className="flex items-center justify-between">
          <Link href="/">
            <a className="text-3xl font-bold">{title}</a>
          </Link>
        </div>
      </nav>
    </Container>
  );
}
