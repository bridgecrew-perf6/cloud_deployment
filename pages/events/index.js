import { Fragment } from 'react';
import { useRouter } from 'next/router';

import { getAllEvents } from "../../dummy-data";
import EventList from "../../components/events/EventList";
import EventsSearch from "../../components/events/events-search";

const AllEventsPage = () => {

    const events = getAllEvents();
    const router = useRouter();

    const filterEvents = ({year, month}) => {
        const fullPath = `/events/${year}/${month}`;
        router.push(fullPath)
    }

    return (
        <Fragment>
            <h1>All Events</h1> 
            <EventsSearch onSearch = {filterEvents} />
            <EventList items={events}/>
        </Fragment>

    )
}

export default AllEventsPage; 