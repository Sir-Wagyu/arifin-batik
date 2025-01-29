import "./App.css";
import Home from "./pages/home.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Product from './pages/product';
import DetailProduk from "./pages/detailProduk";
import Contact from './pages/contact.jsx';

function App() {
  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Product />} />
            <Route path="/detail/:id" element={<DetailProduk />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
