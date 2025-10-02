import events from '../data/events.json';
import { Link } from 'react-router-dom';

const EventList = () => {
  return (
    <div className="p-6">
<h1 className="text-2xl sm:text-3xl font-bold mb-4">Upcoming Events</h1>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <div key={event.id} className="border p-4 rounded shadow">
            <h2 className="text-xl font-semibold">{event.title}</h2>
            <p>{event.date} | {event.location}</p>
            <p className="text-green-600 font-bold">₹{event.price}</p>
            <Link to={`/event/${event.id}`} className="text-blue-500 mt-2 block">View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventList;
