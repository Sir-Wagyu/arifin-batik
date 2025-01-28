import "../App.css";

function Value() {
  return (
    <>
        <section class="max-w-6xl mx-auto pt-32  px-6 md:px-12 lg:px-14 xl:px-28">
        <div className="mx-auto px-2 md:px-0 text-center">
            <p className="mb-5 text-xl font-raleway text-arifin-400">why choose us</p>
            <h1 className="text-2xl md:text-3xl font-lora">Best Service and Quality for You</h1>
           
        </div>
            <div class="grid md:grid-cols-3 px-10 md:px-6 gap-14 md:gap-8 mt-20">
           
            <div class="text-center">
                <div class="flex justify-center mb-4">
                <div class="w-28 h-28 flex items-center justify-center bg-gray-200 rounded-full">
                    <img src="./icon2.png" alt="Batik Custom" />
                </div>
                </div>
                <h3 class="text-xl font-semibold text-gray-800 mb-2">
                Custom Batik Services
                </h3>
                <p class="text-gray-600">
                Can't find the design you are looking for? We are ready to help create batik cloth according to your wishes, from motifs, colors, to sizes.
                </p>
            </div>
             
            <div class="text-center">
                <div class="flex justify-center mb-4">
                <div class="w-28 h-28 flex items-center justify-center bg-gray-200 rounded-full">
                    <img src="./icon1.png" alt="Variasi Produk" />
                </div>
                </div>
                <h3 class="text-xl font-semibold text-gray-800 mb-2">
                Wide Range of Product Variations
                </h3>
                <p class="text-gray-600">
                We provide various types of batik fabrics, from modern stamped batik to exclusive hand-drawn batik, which are suitable for various events and needs.
                </p>
            </div>
        
            <div class="text-center">
                <div class="flex justify-center mb-4">
                <div class="w-28 h-28 flex items-center justify-center bg-gray-200 rounded-full">
                    <img src="./icon3.png"  alt="Harga Terbaik" />
                </div>
                </div>
                <h3 class="text-xl font-semibold text-gray-800 mb-2">
                Best Quality, Affordable Price
                </h3>
                <p class="text-gray-600">
                We ensure that every batik cloth we produce has the best quality at a price that remains friendly to you.
                </p>
            </div>
            </div>
         </section>

    </>
  );
}

export default Value;
