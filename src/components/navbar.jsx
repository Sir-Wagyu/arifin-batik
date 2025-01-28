import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
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
      setIsScrolled(window.scrollY > 70);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav className={`fixed w-full z-50 top-0 left-0 right-0 justify-between items-center flex px-6 md:px-12 lg:px-14 xl:px-28 py-3 transition-all duration-300 ${isScrolled ? "bg-arifin-200 shadow-md" : "bg-transparent"} ${isOpen ? "bg-arifin-200 shadow-md" : ""}`}>
        <button className={`text-2xl md:hidden transition-colors duration-300 ${isScrolled ? "text-arifin-500" : "text-arifin-200"}`} onClick={handleToggle}>
          <FontAwesomeIcon icon={faBars} />
        </button>
        <Link to="/">
          <img src={`${isScrolled ? "./logo.png" : "./logo 2.png"}`} alt="logo-arifin" className="w-11 lg:w-12  transition-all duration-300" />
        </Link>

        <div className={`hidden md:flex gap-8 font-raleway font-medium md:text-base  ${isScrolled ? "text-arifin-500" : "text-arifin-200"}`}>
          <a href="/" className="transition-colors duration-300 hover:text-arifin-400">
            Home
          </a>
          <a href="#about" className="transition-colors duration-300 hover:text-arifin-400">
            About
          </a>
          <a href="#collection" className="transition-colors duration-300 hover:text-arifin-400">
            Collection
          </a>
          <Link to="/product" className="transition-colors duration-300 hover:text-arifin-400">
            Product
          </Link>
          <Link to="/contact" className="transition-colors duration-300 hover:text-arifin-400">
            Contact
          </Link>
        </div>

        <div className={`fixed top-0 left-0 bottom-0 w-[65%] bg-arifin-100 z-40 transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
          <div className="flex flex-col py-8 items-center h-full gap-4 text-lg">
            <a href="/" className="transition-colors duration-300 hover:text-arifin-400 w-full px-6">
              Home
            </a>
            <a href="#about" className="transition-colors duration-300 hover:text-arifin-400 w-full px-6" >
              About
            </a>
            <a href="#collection" className="transition-colors duration-300 hover:text-arifin-400 w-full px-6">
            Collection
            </a>
            <Link to="/product" className="transition-colors duration-300 hover:text-arifin-400 w-full px-6">
            Product
            </Link>
            <Link to="/contact" className="transition-colors duration-300 hover:text-arifin-400 w-full px-6">
              Contact
            </Link>
          </div>
        </div>

        <button className={`text-xl  transition-colors duration-300 ${isScrolled ? "text-arifin-500" : "text-arifin-200"}`} >
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </nav>
      {isOpen && <div className="fixed inset-0 bg-black opacity-40 z-30 transition-all duration-300" onClick={handleToggle}></div>}
    </>
  );
}

export default Navbar;
