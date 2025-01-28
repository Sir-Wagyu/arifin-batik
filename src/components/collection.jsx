import "../App.css";

function Collection() {
  return (
    <>
      <div id="collection" className="py-36">
      <div className="container mx-auto max-w-lg text-center pt-20 mb-16">
          <h1 className='text-3xl md:text-4xl border-b-2 border-arifin-400 font-lora inline-block pb-2 mb-4'>Collection</h1>
      </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-24">
            <div className="">
                <img className="rounded-lg" src="./collection1.png"/>
            </div>
            <div className="">
                <img className="rounded-lg" src="./collection2.png"/>
            </div>
            <div className="">
                <img className="rounded-lg" src="./collection3.png"/>
            </div>
            <div className="">
                <img className="rounded-lg" src="./collection4.png"/>
            </div>
        </div>
      </div>
    </>
  );
}

export default Collection;
