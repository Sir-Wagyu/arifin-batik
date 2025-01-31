function Galery() {

  return (
    <>
    <div className="pb-20 pt-10 md:py-20  font-raleway">
      <div className="container mx-auto text-center pt-20 mb-16 px-6 md:px-12 lg:px-14 xl:px-28 ">
            <h1 className='text-2xl md:text-3xl lg:text-4xl font-lora font-medium text-arifin-500 border-b-2 border-arifin-400 pb-2 w-max mx-auto mb-8 px-3'>Gallery</h1>
            <p className="text-arifin-500 text-sm md:text-base w-full md:w-[60%] lg:w-[70%] mx-auto">
            Step into our gallery and discover the charm of stamped batik—a harmonious blend of traditional techniques and modern artistry. Each piece showcases intricate patterns and vibrant colors, reflecting the craftsmanship and cultural heritage behind this timeless art. 
            </p>
        </div>

      <div className="columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3 pb-28 px-3">
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
    </div>
    </>
  );
};

export default Galery;