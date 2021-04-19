import EventObjectPlanForm from "@/components/events/event/object-plan/form";
import { useEvents } from '@/lib/swr-hooks'
import Skeleton from "react-loading-skeleton";

export default function EditEventObjectPlanComponent() {
    const { data, isLoading } = useEvents()
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
            <EventObjectPlanForm data={data}/>
        </>
    )
}