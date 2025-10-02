import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cart, removeFromCart } = useCart();
  const total = cart.reduce((sum, e) => sum + e.price, 0);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Your Booking Cart</h1>
      {cart.length === 0 ? (
        <p>No events booked yet.</p>
      ) : (
        <div>
          {cart.map((event) => (
            <div key={event.id} className="border p-4 mb-2 rounded shadow">
              <h2 className="text-xl">{event.title}</h2>
              <p>₹{event.price}</p>
              <button
                onClick={() => removeFromCart(event.id)}
                className="mt-2 bg-red-500 text-white px-3 py-1 rounded"
              >
                Remove
              </button>
            </div>
          ))}
          <h3 className="mt-4 text-xl font-bold">Total: ₹{total}</h3>
        </div>
      )}
    </div>
  );
};

export default Cart;
