import "../App.css";

function Category() {
  return (
    <>
      <div id="category" className="pb-36 pt-24 md:py-36 px-6 md:px-12 lg:px-14 xl:px-28 ">
        <div className="mx-auto px-2 md:px-0 text-center">
            <p className="mb-5 text-xl font-raleway text-arifin-400">types of products</p>
            <h1 className="text-2xl md:text-3xl font-lora">Variety of batik fabrics for all styles</h1>
            <p className="text-sm font-lora mt-4">The perfect choice of batik fabrics to complement your needs, from classic to contemporary styles.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-24">
            <div className="">
                <img className="rounded-lg" src="./cate1.png"/>
            </div>
            <div className="">
                <img className="rounded-lg" src="./cate2.png"/>
            </div>
            <div className="">
                <img className="rounded-lg" src="./cate3.png"/>
            </div>
        </div>
      </div>

    <hr/>

    </>
  );
}

export default Category;
