import "../App.css";
import { useState } from "react";

function HeroProduk({ onSearch }) {

  const [searchQuery, setSearchQuery] = useState("");

  // Fungsi untuk menangani perubahan input pencarian
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <>
      <div className="w-full h-[60vh] flex items-center justify-center relative">
            <img src="./hero2.jpg" alt="hero-image" className="absolute w-full h-full object-cover" />
            <div className="absolute top-0 left-0 w-full h-full bg-black/50 flex flex-col justify-center items-center text-arifin-100 text-center font-raleway px-6 md:px-12 lg:px-14 xl:px-28 ">
                <h1 className="font-lora font-semibold text-3xl md:text-4xl lg:text-5xl xl:text-4xl md:w-[80%] xl:w-[60%] mb-4 lg:mb-6">Our Featured Products</h1>
                <p className="text-base lg:text-lg xl:text-xl font-medium md:w-[80%] xl:w-[50%]">Explore our premium collection of stamped batik with unique, eye-catching designs</p>
                <div className="mt-6 w-full">
                <input
                    type="text"
                    name="search"
                    value={searchQuery} // Mengikat state dengan input
                    onChange={handleSearchChange} // Menangani perubahan input
                    placeholder="Search your product..."
                    className="w-full rounded-3xl max-w-md px-5 py-3 text-md bg-arifin-100 text-gray-700 placeholder-gray-400 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                />
                </div>
            </div>
        </div>

       

    </>
  );
}

export default HeroProduk;
