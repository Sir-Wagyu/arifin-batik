import "../App.css";

function Category() {
  return (
    <>
      <section id="category" className="pb-36 pt-28 md:py-24 px-6 md:px-12 lg:px-14 xl:px-28 ">
        <div className="mx-auto px-2 md:px-0 text-center font-raleway">
            <p className="md:mb-1 text-lg md:text-xl text-arifin-400 font-semibold">types of products</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-lora font-medium text-arifin-500">Variety of batik fabrics for all styles</h1>
            <p className="mx-auto text-sm md:text-base xl:text-xl mt-4 lg:mt-5 lg:w-[60%] text-arifin-500">The perfect choice of batik fabrics to complement your needs, from classic to contemporary styles.</p>
        </div>
        <div className="relative w-full mt-24 overflow-y-hidden overflow-x-auto snap-x hideScroll">
          <div className="flex gap-5 md:gap-8 w-max scroll-smooth mx-auto">
            <div className="h-56 md:h-72 xl:h-96 aspect-square snap-center rounded-lg relative">
                <img className="rounded-lg w-full h-full object-cover" src="./cate1.png"/>
            </div>
            <div className=" h-56 md:h-72 xl:h-96 aspect-square snap-center rounded-lg relative">
                <img className="rounded-lg w-full h-full object-cover" src="./cate2.png"/>
            </div>
            <div className=" h-56 md:h-72 xl:h-96 aspect-square snap-center rounded-lg relative">
                <img className="rounded-lg w-full h-full object-cover" src="./cate1.png"/>
            </div>
          </div>
        </div>
      </section>

    <hr/>

    </>
  );
}

export default Category;
