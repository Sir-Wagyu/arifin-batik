import "../App.css";
import HeroProduk from '../components/heroProduk.jsx';
import Navbar from "../components/navbar.jsx";
import FilterProduk from '../components/filterProduk.jsx'


function Product() {
  return (
    <>
      <Navbar />
      <HeroProduk />
      <FilterProduk />
    </>
  );
}

export default Product;
