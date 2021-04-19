import EventMenuForm from "@/components/events/event/menu/form";
import {useKitchens, useSpecialMenu, useFacilities, useAveragePrices, useMenuByEvent} from '@/lib/swr-hooks'
import Skeleton from "react-loading-skeleton";

export default function EditEventMenuComponent({eventId}) {
    const { data: kitchens, isLoading: isLoadingKitchen } = useKitchens()
    const { data: specialMenu, isLoading: isLoadingSpecialMenu } = useSpecialMenu()
    const { data: facilities, isLoading: isLoadingFacilities } = useFacilities()
    const { data: averagePrices, isLoading: isLoadingAveragePrices } = useAveragePrices()
    const { data: menu, isLoading: isLoadingMenu } = useMenuByEvent(eventId)

    if (isLoadingKitchen || isLoadingSpecialMenu || isLoadingFacilities || isLoadingAveragePrices || isLoadingMenu) {
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
            <EventMenuForm eventId={eventId} kitchens={kitchens} specialMenu={specialMenu} facilities={facilities}
                           averagePrices={averagePrices} menu={menu}/>
        </>
    )
}