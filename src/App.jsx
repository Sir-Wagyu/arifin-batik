import "./App.css";
import Home from "./pages/home.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Product from './pages/product';

function App() {
  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Product />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
