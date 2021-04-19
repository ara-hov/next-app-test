import EventContentForm from "@/components/events/event/content/form";
import { useContentByEvent, useTours } from '@/lib/swr-hooks'
import Skeleton from "react-loading-skeleton";

export default function EditEventContentComponent({eventId}) {

  const { data, isLoading } = useContentByEvent(eventId)
  // const { data: tours, isLoading: isLoadingTuors } = useTours()
    
	if (isLoading) {
		return (
			<div>
				<Skeleton width={180} height={24} />
				<Skeleton height={48} />
				<div className="my-4" />
				<Skeleton width={180} height={24} />
				<Skeleton height={48} />
				<div className="my-4" />
				<Skeleton width={180} height={24} />
				<Skeleton height={48} />
			</div>
		)
	}

	return (
		<>
			<EventContentForm
        eventId={eventId}
        data={data}
        // tours={tours}
      />
		</>
	)
}