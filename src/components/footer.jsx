import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";



const footer = () => {
  return (
    <>
   <div className="w-full h-64 lg:h-96 mb-2 mt-10">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d693.2689179117708!2d115.19526772376743!3d-8.698212599217173!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOMKwNDEnNTMuNiJTIDExNcKwMTEnNDQuMyJF!5e1!3m2!1sid!2sid!4v1738044207228!5m2!1sid!2sid"
    loading="lazy"
    className="w-full h-full"
  ></iframe>
</div> 

<footer className="bg-arifin-500 text-gray-300 w-full py-10  px-6 md:px-12 lg:px-14 xl:px-28">
  <div className="container">
    <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
      {/* Brand Section */}
      <div className="lg:w-1/4">
        <div className="flex items-center mb-3 flex-row gap-2">
          <img src="../logo.png" alt="" className="w-14 h-14"/>
          <h1 className="text-2xl mt-3 font-lora text-white mb-3 font-alice">ArifinBatik</h1>
        </div>
        <p className="text-sm">
         We create stamped batik that blends traditional techniques with modern aesthetics. Each piece showcases meticulous craftsmanship, creativity, and passion.
        </p>
        <div className="flex gap-4 mt-4">
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
            <FontAwesomeIcon icon={faFacebook} size="lg" />
          </a>
         
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </a>
        </div>
      </div>

      {/* Links Section */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* About */}
        <div>
          <h2 className="text-white font-lora mb-2 text-xl">About</h2>
          <ul className="text-sm space-y-1">
            <li><a href="/#about" className="hover:underline">About Us</a></li>
            <li><a href="/#about" className="hover:underline">Why Choose Us</a></li>
            <li><a href="/#about" className="hover:underline">Collection</a></li>
            <li><a href="/#about" className="hover:underline">Products</a></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h2 className="text-white font-lora mb-2 text-xl">Quick link</h2>
          <ul className="text-sm space-y-1">
            <li><a href="/products" className="hover:underline">Products</a></li>
            <li><a href="/#about" className="hover:underline">About</a></li>
            <li><a href="/#gallery" className="hover:underline">Gallery</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

       
        {/* Contact */}
        <div>
          <h2 className="text-white font-lora mb-2 text-xl">Contact Us</h2>
          <p className="text-sm">
             Jl. Taman Pancing Timur, Pemogan, Denpasar Selatan, Kota Denpasar, Bali
          </p>
          <p className="text-sm mt-2">
            (+62) 817-818-147<br />
            arifinbatik@gmail.com
          </p>
        </div>
      </div>
    </div>

    {/* Footer Bottom */}
    <div className="border-t border-gray-600 mt-10 pt-6 text-center">
      <p className="text-sm">
        &copy; 2025 arifinbatik. All rights reserved. | 
        <a href="#" className="hover:underline mx-1">Privacy</a> | 
        <a href="#" className="hover:underline">Terms & Conditions</a>
      </p>
    </div>
  </div>
</footer>

    </>
  );
};

export default footer;
