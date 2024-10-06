import { NavLink } from 'react-router-dom';
import useScrollPosition from '../hooks/UseScrollPosition';

function Header({ handleNavigation }) {
  const isVisible = useScrollPosition();

  return (
    <div 
      className={`bg-white h-23 p-4 flex flex-col md:flex-row items-center fixed top-0 left-0 w-full transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'} z-50`}
    >
      <NavLink to="/" className="flex items-center mb-2 md:mb-0">
        <img src="../src/assets/random/Mansions2go.png" alt="Mansions2go Logo" className="h-20 hidden md:block " />
      </NavLink>
      <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6 ml-0 md:ml-6 w-full">
        <NavLink 
          to="/" 
          className={({ isActive }) => `text-center text-xl md:text-2xl ${isActive ? 'font-bold' : ''} cursor-pointer`}
        >
          Home
        </NavLink>
        <NavLink 
          to="/properties" 
          className={({ isActive }) => `text-center text-xl md:text-2xl ${isActive ? 'font-bold' : ''} cursor-pointer`}
        >
          Properties
        </NavLink>
        <button
          onClick={() => handleNavigation("/properties", "testimonials")}
          className="text-center text-xl md:text-2xl cursor-pointer"
        >
          Testimonials
        </button>
        <button
          onClick={() => handleNavigation("/properties", "contact")}
          className="text-center text-xl md:text-2xl cursor-pointer"
        >
          Contact Us
        </button>
      </div>
    </div>
  );
}

export default Header;
