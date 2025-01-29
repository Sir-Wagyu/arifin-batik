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


  let base_url = "http://localhost:8888/arifinbatikbackend/";

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
      <Navbar/>
        <div className="w-full h-[40vh] flex items-center justify-center relative">
          <img src={gambarbg} alt="hero-image" className="absolute w-full h-full object-cover" />
          <div className="absolute top-0 left-0 w-full h-full bg-black/50 flex flex-col justify-center items-center text-arifin-100 text-center font-raleway px-6 md:px-12 lg:px-14 xl:px-28 ">
          <h1 className="font-lora font-semibold text-3xl md:text-3xl mt-7 lg:text-4xl xl:text-5xl md:w-[80%] xl:w-[60%] mb-4 lg:mb-6">Detail Product</h1>
          </div>
      </div>

      <nav className="bg-white shadow-sm py-6">
        <div className="container mx-auto  px-6 md:px-12 lg:px-14 xl:px-28">
            <div className="flex justify-between items-center">
               
                <div className="flex items-center space-x-6">
                    <a href="#" className="text-gray-600">Products</a>
                    <a href="#" className="text-gray-600">Collections</a>
                    <a href="#" className="text-gray-600">Find Store</a>
                    <a href="#" className="text-gray-600">Contact Us</a>
                   
                </div>
            </div>
        </div>
    </nav>

    <div className="container mx-auto  px-6 md:px-12 lg:px-14 xl:px-28 py-8">
        <div className="flex flex-col md:flex-row gap-8">
            
            <div className="md:w-1/2">
                <div className="mb-4">
                    <img src={`${base_url}/image/${produk.gambar}`} alt="Main product image" className="w-full rounded-lg"/>
                </div>
               
            </div>

           
            <div className="md:w-1/2">
                <h1 className="text-3xl font-semibold mb-2">{produk.name}</h1>
                <p className="text-gray-500 mb-4">{produk.material}</p>
                <p className="text-2xl font-bold mb-6">$00.00</p>

                <p className="text-gray-600 mb-4">
                   {produk.deskripsi}
                </p>

                <div className="mb-6">
                    <h3 className="font-semibold mb-2">Choose Color</h3>
                    <div className="flex gap-4">
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

               

                <button className="bg-green-500 text-white px-8 py-3 rounded-md hover:bg-green-600 transition-colors">
                    Order Now
                </button>
                <div className="mt-8 space-y-4">
                    <div className="border-t pt-4">
                        <button className="flex justify-between items-center w-full">
                            <span className="font-semibold">Product Details</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                    </div>
                    <div className="border-t pt-4">
                        <button className="flex justify-between items-center w-full">
                            <span className="font-semibold">Dimensions</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                    </div>
                </div>

                
            </div>
        </div>

         {/* produk terkait */}
         <h1 className="text-3xl mt-24 font-raleway">Related Products</h1>
         <div className="mt-10">        
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {related.length > 0 ? (
                related.map((product, index) => (
                   <a href={`/detail/${product.id}`}>
                     <div
                    key={index}
                    className="bg-white rounded-lg shadow-md overflow-hidden hover:scale-105 transition-transform duration-300"
                    >
                    {/* Gambar Produk */}
                    <img
                        src={`${base_url}image/${product.gambar}`} // Default placeholder jika gambar tidak ada
                        alt={product.name}
                        className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                       
                        <p className="text-sm text-gray-600">
                        <span className="font-medium">Color:</span> {product.color || "Tidak tersedia"}
                        </p>
                        {/* Motif */}
                        <p className="text-sm text-gray-600">
                        <span className="font-medium">Motif:</span> {product.motif || "Tidak tersedia"}
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

    <Footer/>

    </>
  );
}

export default DetailProduk;
