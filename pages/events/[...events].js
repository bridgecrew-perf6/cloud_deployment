import { Fragment } from "react";
import { useRouter } from "next/router";
import { getFilteredEvents } from "../../dummy-data";

import EventList from "../../components/events/EventList";
import ResultsTitle from "../../components/events/results-title";
import Button from "../../components/ui/Button";
import ErrorAlert from "../../components/ui/error-alert";

const FilteredEventsPage = () => {
  const router = useRouter();
  const { events } = router.query;

  if (!events) return <div className="center">Loading...</div>;

  const [year, month] = events.map(Number);

  if (
    isNaN(year) ||
    isNaN(month) ||
    year < 2021 ||
    year > 2030 ||
    month < 1 ||
    month > 12
  ) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>Invalid Filters</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </Fragment>
    );
  }

  const filterDate = { year, month };

  const filteredEvents = getFilteredEvents(filterDate);

  if (!filteredEvents || filteredEvents.length === 0)
    return (
      <Fragment>
        <ErrorAlert>
          <p>No events found</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </Fragment>
    );
  const date = new Date(year, month - 1);

  return (
    <Fragment>
      <h1>Filtered Events</h1>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </Fragment>
  );
};

export default FilteredEventsPage;
