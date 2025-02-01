import "../App.css";
import HeroProduk from '../components/heroProduk.jsx';
import Navbar from "../components/navbar.jsx";
import FilterProduk from '../components/filterProduk.jsx';
import Footer from '../components/footer.jsx';
import { useState } from "react";


function Product() {

  const [searchQuery, setSearchQuery] = useState("");

  // Fungsi untuk mengatur query pencarian
  const handleSearch = (query) => {
    setSearchQuery(query); // Menyimpan query pencarian
  };

  return (
    <>
      <Navbar />
      <HeroProduk onSearch={handleSearch} />
      <FilterProduk searchQuery={searchQuery} />
      <Footer/>
    </>
  );
}

export default Product;
