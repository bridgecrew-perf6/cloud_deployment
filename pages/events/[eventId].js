import { useRouter } from "next/router"
import { Fragment } from "react";
import { getEventById } from "../../dummy-data"

import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";
import ErrorAlert from "../../components/ui/error-alert";

const EventDetailPage = () => {

    const router = useRouter();

    const { eventId } = router.query;
    const event = getEventById(eventId);

    if(!event)
        return <ErrorAlert><p>No event found!</p></ErrorAlert>

    const { title, description, date, location, image } = event

    return (
        <Fragment>
            <EventSummary title={title} />
            <EventLogistics date={date} address={location} image={image} imageAlt={title}/>
            <EventContent>
                <p>{description}</p>
            </EventContent>
        </Fragment>
    )
}

export default EventDetailPage;