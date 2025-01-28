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
  return (
    <>
      <Navbar />
      <Hero />
      <Category/>
      <Value/>
      <About/>
      <Collection/>
      <Iklan/>
      <Galery/>
      <Footer/>
    </>
  );
}

export default Home;
