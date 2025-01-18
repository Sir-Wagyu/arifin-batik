import "../App.css";

function Hero() {
  return (
    <>
      <div className="w-full h-screen flex items-center justify-center relative">
        <img src="./hero2.jpg" alt="hero-image" className="absolute w-full h-full object-cover" />
        <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>
      </div>
      <div className="w-full h-screen flex items-center justify-center relative">
        <img src="./hero2.jpg" alt="hero-image" className="absolute w-full h-full object-cover" />
        <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>
      </div>
    </>
  );
}

export default Hero;
