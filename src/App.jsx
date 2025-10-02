import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import EventList from './pages/EventList';
import EventDetails from './pages/EventDetails';
import Cart from './pages/Cart';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<EventList />} />
        <Route path="/event/:id" element={<EventDetails />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;
