import EventItem from "./EventItem";
import styles from "./event-list.module.css"

const EventList = ({ items }) => {
  return <ul className={styles.list}>
      { items.map( event => {
          return <EventItem key={event.id} {...event} ></EventItem>
      })}
  </ul>;
};

export default EventList;
