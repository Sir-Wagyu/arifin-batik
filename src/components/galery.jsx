function Galery() {

  return (
    <>
   <div className="container mx-auto max-w-lg text-center pt-20 mb-16  px-6 md:px-12 lg:px-14 xl:px-28">
        <h1 className='text-3xl md:text-4xl border-b-2 border-arifin-400 font-lora inline-block pb-2 mb-4'>Gallery</h1>
        <p className="text-gray-700 text-[.9rem]">
        Step into our gallery and discover the charm of stamped batik—a harmonious blend of traditional techniques and modern artistry. Each piece showcases intricate patterns and vibrant colors, reflecting the craftsmanship and cultural heritage behind this timeless art. 
        </p>
    </div>

    <div class="columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3 pb-28 px-3">
        <div>
          <img src="./galery1.jpg" className={`w-full h-auto transition-all duration-300 rounded-md shadow-lg`}/>
        </div>

        <div>
          <img src="./galery6.jpg" className={`w-full h-auto transition-all duration-300 rounded-md shadow-lg`}/>
        </div>

        <div>
          <img src="./galery3.jpg" className={`w-full h-auto transition-all duration-300 rounded-md shadow-lg`}/>
        </div>

        <div>
          <img src="./galery4.jpg" className={`w-full h-auto transition-all duration-300 rounded-md shadow-lg`}/>
        </div>

        <div>
          <img src="./galery5.jpg" className={`w-full h-auto transition-all duration-300 rounded-md shadow-lg`}/>
        </div>

        <div>
          <img src="./galery2.jpg" className={`w-full h-auto transition-all duration-300 rounded-md shadow-lg`}/>
        </div>

    </div>
    </>
  );
};

export default Galery;