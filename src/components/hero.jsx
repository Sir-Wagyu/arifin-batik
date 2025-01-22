import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleDown } from "@fortawesome/free-solid-svg-icons";
function Hero() {
  return (
    <>
      <div className="w-full h-screen flex items-center justify-center relative">
        <img src="./hero2.jpg" alt="hero-image" className="absolute w-full h-full object-cover" />
        <div className="absolute top-0 left-0 w-full h-full bg-black/40 flex flex-col justify-center items-center text-arifin-100 text-center font-raleway px-6 md:px-12 lg:px-14 xl:px-28 ">
          <h1 className="font-lora font-semibold text-3xl md:text-4xl lg:text-5xl xl:text-6xl md:w-[80%] xl:w-[60%] mb-4 lg:mb-6">Weaving Tradition into Every Moment of Your Life</h1>
          <p className="text-base lg:text-lg xl:text-xl font-medium md:w-[80%] xl:w-[50%]">Discover our exclusive batik collection that combines tradition and modernity. Make your moments more special with high quality batik cloth</p>

          <div className="absolute w-full bottom-10 left-0 right-0">
            <FontAwesomeIcon icon={faChevronCircleDown} className="text-2xl md:text-3xl lg:text-4xl animate-bounce"/>
          </div>
        </div>
        
      </div>

    </>
  );
}

export default Hero;
