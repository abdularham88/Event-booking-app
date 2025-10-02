import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const { cart } = useCart();

  return (
    <nav className="bg-gray-900 text-white px-4 py-3 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold hover:text-yellow-400">🎟️ Event Booking App</Link>
      <div className="space-x-4 hidden sm:flex">
        <Link to="/" className="hover:text-yellow-300">Home</Link>
        <Link to="/cart" className="hover:text-yellow-300">
          Cart <span className="bg-red-600 text-white text-xs px-2 py-1 rounded-full ml-1">{cart.length}</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
