import "../App.css";

function Value() {
  return (
    <>
        <div id="value" className="pb-20 pt-10 md:py-20 px-6 md:px-12 lg:px-14 xl:px-28 ">
            <div className="mx-auto px-2 md:px-0 text-center font-raleway">
                <p className="md:mb-1 text-lg md:text-xl text-arifin-400 font-semibold">Why Choose Us</p>
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-lora font-medium text-arifin-500">Best Service and Quality for You</h1>
            </div>
            <div className="grid lg:grid-cols-3 gap-16 lg:gap-10 mt-16 text-arifin-500">
                <div className="text-center">
                    <div className="flex justify-center mb-4 lg:mb-6 group">
                        <div className="mb-2 w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 flex items-center justify-center bg-arifin-200 rounded-full">
                            <img src="./icon2.png" alt="Batik Custom" className="mx-auto w-full h-full object-contain group-hover:scale-110 transition-all duration-450"/>
                        </div>
                    </div>
                    <h2 className="text-xl font-semibold  mb-3">
                    Custom Batik Services
                    </h2>
                    <p className="md:w-[75%] lg:w-full mx-auto">
                    Can&apos;t find the design you are looking for? We are ready to help create batik cloth according to your wishes, from motifs, colors, to sizes.
                    </p>
                </div>
                
                <div className="text-center">
                    <div className="flex justify-center mb-4 lg:mb-6 group">
                        <div className="mb-2 w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 flex items-center justify-center bg-arifin-200 rounded-full">
                            <img src="./icon1.png" alt="Variasi Produk" className="mx-auto w-full h-[90%] object-contain group-hover:scale-110 transition-all duration-450"/>
                        </div>
                    </div>
                    <h2 className="text-xl font-semibold mb-3">
                    Wide Range of Product Variations
                    </h2>
                    <p className="md:w-[75%] lg:w-full mx-auto">
                    We provide various types of batik fabrics, from modern stamped batik to exclusive hand-drawn batik, which are suitable for various events and needs.
                    </p>
                </div>
            
                <div className="text-center">
                    <div className="flex justify-center mb-4 lg:mb-6 group">
                        <div className="mb-2 w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 flex items-center justify-center bg-arifin-200 rounded-full">
                            <img src="./icon3.png"  alt="Harga Terbaik" className="mx-auto w-full h-[90%] object-contain group-hover:scale-110 transition-all duration-450"/>
                        </div>
                    </div>
                    <h2 className="text-xl font-semibold  mb-3">
                    Best Quality, Affordable Price
                    </h2>
                    <p className="md:w-[75%] lg:w-full mx-auto">
                    We ensure that every batik cloth we produce has the best quality at a price that remains friendly to you.
                    </p>
                </div>
            </div>
        </div>
    </>
  );
}

export default Value;
