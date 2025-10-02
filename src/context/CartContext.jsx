import { createContext, useContext, useState } from 'react';
import toast from 'react-hot-toast';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (event) => {
    setCart((prev) => [...prev, event]);
    toast.success(`${event.title} added to cart`);
  };

  const removeFromCart = (id) => {
    const removed = cart.find((e) => e.id === id);
    setCart((prev) => prev.filter((event) => event.id !== id));
    toast.error(`${removed?.title || 'Event'} removed from cart`);
  };

  const clearCart = () => {
    setCart([]);
    toast('Cart cleared', { icon: '🗑️' });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
