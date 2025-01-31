import "../App.css";
import { Link } from "react-router-dom";

function Collection() {
  return (
    <>
      <div id="collection" className="pb-20 pt-10 md:py-20 px-6 md:px-12 lg:px-14 xl:px-28 font-raleway">
        <div className="w-max mx-auto text-center">
            <h1  className="text-2xl md:text-3xl lg:text-4xl font-lora font-medium text-arifin-500 pb-2 border-b-2 border-arifin-400 ">Collections</h1>
        </div>

        <div className="mx-auto lg:max-w-[88%] grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-7 mt-10 md:mt-12 lg:mt-14">
              <div className="aspect-square rounded-lg ">
                  <img className="w-full h-full object-cover" src="./collection1.png"/>
              </div>
              <div className="aspect-square rounded-lg">
                  <img className="w-full h-full object-cover" src="./collection2.png"/>
              </div>
              <div className="aspect-square rounded-lg">
                  <img className="w-full h-full object-cover" src="./collection3.png"/>
              </div>
              <div className="aspect-square rounded-lg">
                  <img className="w-full h-full object-cover" src="./collection4.png"/>
              </div>
              <div className="hidden lg:block aspect-square rounded-lg">
                  <img className="w-full h-full object-cover" src="./collection4.png"/>
              </div>
              <div className="hidden lg:block aspect-square rounded-lg">
                  <img className="w-full h-full object-cover" src="./collection4.png"/>
              </div>
          </div>

          <Link to="/product" className="mt-14 lg:mt-20 block mx-auto w-max bg-arifin-400 text-arifin-100 rounded-lg px-8 lg:px-10 py-3 font-medium text-sm md:text-base hover:bg-arifin-500 transition-all duration-300">
            Explore More
          </Link>
      </div>
    </>
  );
}

export default Collection;
