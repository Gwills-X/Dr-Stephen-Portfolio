import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom"; // <-- Use NavLink

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPoint, setScrollPoint] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollPoint(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Research", path: "/research" },
    { name: "WAC", path: "/wac" },
    { name: "Mentorship", path: "/mentorship" },
    { name: "Media", path: "/media" },
    { name: "Speaking", path: "/speaking" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "Contact", path: "/contact" },
  ];

  const activeClass = "text-blue-800 font-bold border-b-2 border-blue-800";
  const inactiveClass =
    "text-black hover:text-blue-800 font-semibold transition";

  return (
    <nav
      className={`fixed w-full z-50  backdrop-blur-md transition-all duration-300 shadow-md top-0 ${
        scrollPoint > 50 ? "" : "bg-transparent pt-5"
      }`}>
      <div className='max-w-7xl mx-auto flex justify-between items-center px-6 py-4 '>
        {/* LOGO */}
        <NavLink
          to='/'
          className='text-2xl max-xl:text-xl font-bold text-blue-800'>
          Dr. Stephen O. Aderinto
        </NavLink>

        {/* DESKTOP LINKS */}
        <div className='hidden lg:flex space-x-8 max-xl:space-x-4 max-xl:[10px] items-center '>
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                isActive ? activeClass : inactiveClass
              }>
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* MOBILE MENU TOGGLE */}
        <div className='lg:hidden'>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className='text-black text-2xl focus:outline-none'>
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className='md:hidden bg-gray-200 transition-all duration-300 shadow-lg h-dvh'>
          <div className='flex flex-col space-y-10 px-6 py-6'>
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  isActive ? activeClass : inactiveClass
                }>
                {link.name}
              </NavLink>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
