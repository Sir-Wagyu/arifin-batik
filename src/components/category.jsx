import "../App.css";

function Category() {
  return (
    <>
      <section id="category" className="py-20 md:py-24 lg:py-28 px-6 md:px-12 lg:px-14 xl:px-28 ">
        <div className="mx-auto px-2 md:px-0 text-center font-raleway">
            <p className="md:mb-1 text-lg md:text-xl text-arifin-400 font-semibold">types of products</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-lora font-medium text-arifin-500">Variety of batik fabrics for all styles</h1>
            <p className="mx-auto text-sm md:text-base xl:text-xl mt-4 lg:mt-5 lg:w-[60%] text-arifin-500">The perfect choice of batik fabrics to complement your needs, from classic to contemporary styles.</p>
        </div>
        <div className="relative w-full mt-14 md:mt-16 lg:mt-24 overflow-y-hidden overflow-x-auto snap-x hideScroll">
          <div className="flex gap-5 md:gap-8 w-max scroll-smooth mx-auto">
            <div className="h-56 md:h-72 xl:h-96 aspect-square snap-center rounded-lg relative overflow-hidden group">
                {/* Gambar */}
                <img loading="lazy" className="rounded-lg w-full h-full object-cover hover:scale-110 transition-all duration-450" src="./cate1.png" alt="Batik Custom"/>

                {/* Overlay dengan efek hover */}
                <div className="absolute bottom-0 top-2/3 inset-x-0 bg-black bg-opacity-50 rounded-lg flex items-center justify-center 
                                transition-transform duration-500 transform translate-y-full group-hover:translate-y-0">
                    <p className="md:text-lg xl:text-xl font-semibold text-arifin-100">Batik Rainbow</p>
                </div>
            </div>
            <div className="h-56 md:h-72 xl:h-96 aspect-square snap-center rounded-lg relative overflow-hidden group">
                {/* Gambar */}
                <img loading="lazy" className="rounded-lg w-full h-full object-cover hover:scale-110 transition-all duration-450" src="./cate2.png" alt="Batik Custom"/>

                {/* Overlay dengan efek hover */}
                <div className="absolute bottom-0 top-2/3 inset-x-0 bg-black bg-opacity-50 rounded-lg flex items-center justify-center 
                                transition-transform duration-500 transform translate-y-full group-hover:translate-y-0">
                    <p className="md:text-lg xl:text-xl font-semibold text-arifin-100">Batik Plain</p>
                </div>
            </div>
            <div className="h-56 md:h-72 xl:h-96 aspect-square snap-center rounded-lg relative overflow-hidden group">
                {/* Gambar */}
                <img loading="lazy" className="rounded-lg w-full h-full object-cover hover:scale-110 transition-all duration-450" src="./cate3.png" alt="Batik Custom"/>

                {/* Overlay dengan efek hover */}
                <div className="absolute bottom-0 top-2/3 inset-x-0 bg-black bg-opacity-50 rounded-lg flex items-center justify-center 
                                transition-transform duration-500 transform translate-y-full group-hover:translate-y-0">
                    <p className="md:text-lg xl:text-xl font-semibold text-arifin-100">Batik Smoke</p>
                </div>
            </div>

          </div>
        </div>
      </section>

    <hr/>

    </>
  );
}

export default Category;
