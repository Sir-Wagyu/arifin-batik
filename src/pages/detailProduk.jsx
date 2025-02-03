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
  const [detailsOpen, setDetailsOpen] = useState(false);


  let base_url = "https://api.arifinbatik.com/";
  //let base_url = "http://localhost/arifinbatikbackend/";

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
          {/* Image Section */}
          <div className="md:w-1/2 max-w-[32rem]">
            <div className="rounded-lg overflow-hidden aspect-[4/3] shadow-lg hover:shadow-xl transition-shadow">
              <img
                src={`${base_url}/image/${produk.gambar}`}
                alt="Main product image"
                className="h-full w-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Product Details */}
          <div className="md:w-1/2">
            <h1 className="text-2xl md:text-3xl font-semibold mb-1 text-gray-800">
              {produk.name}
            </h1>
            <p className="text-gray-500 mb-2">{produk.material}</p>
            <p className="text-2xl font-bold text-arifin-500 mb-6">$00.00</p>

            {/* Toggle Product Details */}
            <div>
              <button
                className="flex justify-between items-center w-full  rounded-md transition"
                onClick={() => setDetailsOpen(!detailsOpen)}
              >
                <span className="font-semibold">Product Details</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-6 w-6 transform transition-transform ${
                    detailsOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {detailsOpen && (
                <div className="mt-2 rounded-md">
                  <p className="mb-3">Color: <span>{produk.color}</span></p>
                  <p className="mb-3">Motif: <span>{produk.motif}</span></p>
                  <p>Category: <span>
                    {produk.category_id === 1 ? "Rainbow" :
                    produk.category_id === 2 ? "Plain" :
                    produk.category_id === 3 ? "Smoke" :
                    "Unknown"}
                  </span></p>
                </div>
              )}
            </div>
          </div>

          {/* Order Now Button (Mobile Fixed) */}
          <div className="fixed md:hidden bottom-0 left-0 right-0 bg-white p-4 z-10 shadow">
            <a
              href="https://wa.me/62817818147?text=I%20am%20interested%20in%20your%20stamped%20batik%20products.%20Could%20you%20please%20provide%20more%20details%20about%20pricing%20and%20availability?"
              target="_blank"
              className="block bg-arifin-400 text-arifin-100 font-semibold w-full py-3 text-center rounded-md hover:bg-arifin-600 transition-all duration-300 transform hover:scale-105"
            >
              Order Now
            </a>
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
                  <div className="bg-arifin-100 rounded-lg shadow-md transition-transform duration-300">
                                <div className="aspect-[4/3] overflow-hidden">
                                    <img
                                        src={`${base_url}image/${product.gambar}`}
                                        alt={product.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-all transform duration-300"
                                    />
                                </div>
                                <div className="p-4 text-sm md:text-base">
                                    <p className="text-gray-600">
                                        <span className="font-semibold">Pattern:</span> {product.motif || "Not available"}
                                    </p>
                                    <p className="text-gray-600">
                                        <span className="font-semibold">Color:</span> {product.color || "Not available"}
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
