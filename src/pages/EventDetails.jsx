import { useParams, Link } from "react-router-dom";
import events from "../data/events.json";
import { useCart } from "../context/CartContext";

const EventDetails = () => {
  const { id } = useParams();
  const event = events.find((e) => e.id === parseInt(id));
  const { addToCart } = useCart();

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold py-2">{event.title}</h1>
      <p>
        {event.date} | {event.location}
      </p>
      <p className="py-2 ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde omnis,
        repudiandae obcaecati quidem hic deleniti laborum quae accusamus esse in
        animi quo odit dolorem consectetur vero! Rem eius, laudantium tempora
        illum cum maxime accusamus. Molestiae ipsam aspernatur iste
        exercitationem ab cum quibusdam cumque natus! Temporibus sapiente
        doloremque harum maxime quia.
      </p>
      <p className="text-green-600 font-bold">₹{event.price}</p>
      <button
        onClick={() => addToCart(event)}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Book Now
      </button>{" "}
      <br />
      <Link
        to="/"
        className="mt-3 inline-block text-blue-600 hover:underline hover:text-blue-800"
      >
        ← Back to Home
      </Link>
    </div>
  );
};

export default EventDetails;
