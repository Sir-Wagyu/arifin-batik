import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.ScrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav className={`fixed w-full z-50 top-0 left-0 right-0 justify-between items-center flex shadow-md px-6 md:px-12 lg:px-14 xl:px-28 py-4 lg:py-5`}>
        <Link to="/">
          <img src="./logo.png" alt="logo-arifin" className="w-20 transition-all duration-300 hover:w-24" />
        </Link>
        <button className="text-2xl md:hidden transition-colors duration-300 hover:text-gray-500" onClick={handleToggle}>
          <FontAwesomeIcon icon={faBars} />
        </button>

        <div className="hidden md:flex gap-8 font-raleway font-medium md:text-md">
          <Link to="/" className="transition-colors duration-300 hover:text-gray-500">
            Home
          </Link>
          <Link to="/about" className="transition-colors duration-300 hover:text-gray-500">
            Produk
          </Link>
          <Link to="/product" className="transition-colors duration-300 hover:text-gray-500">
            Feature
          </Link>
          <Link to="/contact" className="transition-colors duration-300 hover:text-gray-500">
            Tentang Kami
          </Link>
          <Link to="/contact" className="transition-colors duration-300 hover:text-gray-500">
            Kontak
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
