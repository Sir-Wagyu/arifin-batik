import "../App.css";
import gambarbg from "../assets/images/hero2.jpg";
import Navbar from "../components/navbar.jsx";
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import Footer from '../components/footer.jsx';


function DetailProduk() {

  const {id} = useParams();
  const [produk, setProduk] = useState([]);
  const [related, setRelated] = useState([]);


  // let base_url = "http://localhost:8888/arifinbatikbackend/";
  let base_url = "http://localhost/arifinbatikbackend/";

  useEffect(()=>{
    const getDetail = async () => {
      try{
        const response = await axios.get(`${base_url}api/produk.php?request=detail&id=${id}`);
        const product = response.data[0];
        setProduk(product);
        if(product){
          getRelatedProducts(product.category_id, product.id);
        }
      }catch(error){
        console.log(error);
      }
    }

    const getRelatedProducts = async (category, produkID) => {
      try{
        const response = await axios.get(`${base_url}api/produk.php?request=related&category=${category}&id=${produkID}`);
        setRelated(response.data)
      }catch(error){
        console.log(error)
      }
    }

    getDetail()
  },[id])


  return (
    <>
      <Navbar />
      <div className="w-full h-56 flex items-center justify-center relative">
        <img src={gambarbg} alt="hero-image" className="absolute w-full h-full object-cover" />
        <div className="absolute top-0 left-0 w-full h-full bg-black/50 flex flex-col justify-center items-center text-arifin-100 text-center font-raleway px-6 md:px-12 lg:px-14 xl:px-28">
          <h1 className="font-lora font-semibold text-3xl md:text-3xl mt-7 lg:text-4xl xl:text-5xl md:w-[80%] xl:w-[60%] mb-4 lg:mb-6">Detail Product</h1>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-14 xl:px-28 py-10 font-raleway">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2 max-w-[32rem]">
            <div className="rounded-lg overflow-hidden aspect-[4/3]">
              <img src={`${base_url}/image/${produk.gambar}`} alt="Main product image" className="h-full w-full object-cover" />
            </div>
          </div>

          <div className="md:w-1/2">
            <h1 className="text-2xl md:text-3xl font-semibold mb-1">{produk.name}</h1>
            <p className="text-gray-500 mb-4">{produk.material}</p>
            <p className="text-2xl font-bold mb-6">$00.00</p>

            <div className="">
              <button className="flex justify-between items-center w-full">
                <span className="font-semibold">Product Details</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>


          </div>
  
          <div className="fixed md:hidden bottom-0 left-0 right-0 bg-white p-4 flex flex-col justify-between py-6 shadow">
            <div className="mb-4">
                <h3 className="font-semibold mb-2">Choose Color</h3>
                <div className="flex gap-3">
                  <button
                    className={`w-8 h-8 rounded-full border-2`}
                    style={{ backgroundColor: produk.color }}
                  />
                  <button
                    className={`w-8 h-8 rounded-full border-2 opacity-75`}
                    style={{ backgroundColor: produk.color }}
                  />
                  <button
                    className={`w-8 h-8 rounded-full border-2 opacity-50`}
                    style={{ backgroundColor: produk.color }}
                  />
                </div>
              </div>
            <a href="https://wa.me/62817818147?text=I%20am%20interested%20in%20your%20stamped%20batik%20products.%20Could%20you%20please%20provide%20more%20details%20about%20pricing%20and%20availability?" target="_blank" className="block bg-arifin-400 text-arifin-100 font-semibold w-full py-2 text-center rounded-md hover:bg-arifin-500 transition-colors">Order Now</a>
          </div>
        </div>

        
        <p className="text-gray-600 my-10">
          {produk.deskripsi}
        </p>

        <a href="https://wa.me/62817818147?text=I%20am%20interested%20in%20your%20stamped%20batik%20products.%20Could%20you%20please%20provide%20more%20details%20about%20pricing%20and%20availability?" target="_blank" className="hidden md:block w-[20%] bg-arifin-400 text-arifin-100 font-semibold py-4 text-center rounded-md hover:bg-arifin-500 transition-colors">
          Order Now
        </a>

        {/* produk terkait */}
        <h1 className="text-xl md:text-2xl mt-24 font-raleway">Related Products</h1>
        <div className="mt-10">
          <div className="w-full grid grid-cols-2 grid-rows-3 md:grid-cols-3 lg:grid-cols-4 md:grid-rows-2 gap-4 lg:gap-6">
            {related.length > 0 ? (
              related.map((product, index) => (
                <a href={`/detail/${product.id}`} key={index}>
                  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:scale-105 transition-transform duration-300">
                    {/* Product Image */}
                    <img
                      src={`${base_url}image/${product.gambar}`} // Default placeholder if image not available
                      alt={product.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <p className="text-sm text-gray-600">
                        <span className="font-medium">Color:</span> {product.color || "Not available"}
                      </p>
                      {/* Pattern */}
                      <p className="text-sm text-gray-600">
                        <span className="font-medium">Pattern:</span> {product.pattern || "Not available"}
                      </p>
                    </div>
                  </div>
                </a>
              ))
            ) : (
              <p className="text-center text-gray-500 col-span-full">
                Tidak ada produk yang ditemukan.
              </p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default DetailProduk;
