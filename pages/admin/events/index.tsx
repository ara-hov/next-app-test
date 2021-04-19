import Skeleton from 'react-loading-skeleton';
import Container from '@/ui-kit/container';
import Events from '@/components/events';
import Nav from '@/ui-kit/nav';
import { useEvents } from '@/lib/swr-hooks';
import Breadcrumb from '@/ui-kit/breadcrumb';
import EventMenuPage from './[id]/menu';

export default function IndexPage(props) {
  const { data, isLoading } = useEvents();

  if (isLoading) {
    return (
      <div>
        <Breadcrumb />
        <Nav />
        <Container>
          <Skeleton width={180} height={24} />
          <Skeleton height={48} />
          <div className="my-4" />
          <Skeleton width={180} height={24} />
          <Skeleton height={48} />
          <div className="my-4" />
          <Skeleton width={180} height={24} />
          <Skeleton height={48} />
        </Container>
      </div>
    );
  }

  return (
    <div>
      <Breadcrumb />
      <Nav />
      <Container>
        <Events />
      </Container>
    </div>
  );
}
