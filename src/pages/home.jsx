import { useState, useEffect } from "react";
import "../App.css";
import Hero from "../components/hero.jsx";
import Navbar from "../components/navbar.jsx";
import Category from '../components/category';
import Value from '../components/value';
import Collection from '../components/collection';
import About from '../components/about';
import Iklan from '../components/iklan';
import Galery from '../components/galery';
import Footer from '../components/footer';

function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <a
       href="https://wa.me/62817818147?text=I%20am%20interested%20in%20your%20stamped%20batik%20products.%20Could%20you%20please%20provide%20more%20details%20about%20pricing%20and%20availability?"
        target="_blank"
        rel="noopener noreferrer"
        className={`${isScrolled ? "fixed" : "hidden"} w-max bottom-7 right-3 z-50 animate-bounce transition-all`}
      >
        <div className="font-raleway flex flex-col items-center gap-1 w-24 h-16">
          <img src="./logowa.png" alt="" className="w-[40%] aspect-square" />
          <p className="bg-[#fafafa] shadow-md text-[.7rem] px-3 py-2 rounded-full">Contact Us</p>
        </div>
      </a>
      <Navbar />
      <Hero />
      <Category />
      <Value />
      <About />
      <Collection />
      <Iklan />
      <Galery />
      <Footer />
    </>
  );
}

export default Home;