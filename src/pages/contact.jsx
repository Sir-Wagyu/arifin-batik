import "../App.css";
import Navbar from "../components/navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faLocationDot, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Footer from "../components/footer";



function Contact() {
  return (
    <>
      <Navbar />
      <div className="w-full h-[40vh] flex items-center justify-center relative font-lora">
        <img src="./hero2.jpg" alt="hero-image" className="absolute w-full h-full object-cover" />
        <div className="absolute top-0 left-0 w-full h-full bg-black/50 flex flex-col justify-center items-center text-arifin-100 text-center font-raleway px-6 md:px-12 lg:px-14 xl:px-28">
          <h1 className="font-lora font-semibold text-3xl md:text-3xl mt-7 lg:text-4xl xl:text-5xl md:w-[80%] xl:w-[60%] mb-4 lg:mb-6">Contact Us</h1>
        </div>
      </div>

      <div className=" font-raleway px-6 md:px-12 lg:px-14 xl:px-28">

        {/* Section: Frequently Asked Questions */}
        <section className="py-8 mt-10 text-arifin-500">
          <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-lora text-arifin-500 font-semibold">
            Frequently Asked Questions
          </h2>
          <div className="w-full mt-4 lg:w-[80%] mx-auto">
            <button className="group w-full justify-center border-b-2 border-warna-300 py-5 px-2 mt-4 transition-all text-left">
                  <div className="flex items-center justify-between hover:text-warna-300">
                      <p className="font-medium md:text-lg w-[88%] group-focus:font-semibold group-focus:text-arifin-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                      <FontAwesomeIcon icon={faChevronRight} className="group-focus:rotate-90 transition-all"/>
                  </div>
                  <div className="max-h-0 overflow-hidden transition-[max-height] duration-500 ease-in-out group-focus:max-h-40">
                  <p className="mt-2 py-3">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde fugiat ex culpa, fuga optio temporibus!
                  </p>
              </div>
            </button>
            <button className="group w-full justify-center border-b-2 border-warna-300 py-5 px-2 mt-4 transition-all text-left">
                  <div className="flex items-center justify-between hover:text-warna-300">
                      <p className="font-medium md:text-lg w-[88%] group-focus:font-semibold group-focus:text-arifin-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                      <FontAwesomeIcon icon={faChevronRight} className="group-focus:rotate-90 transition-all"/>
                  </div>
                  <div className="max-h-0 overflow-hidden transition-[max-height] duration-500 ease-in-out group-focus:max-h-40">
                  <p className="mt-2 py-3">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde fugiat ex culpa, fuga optio temporibus!
                  </p>
              </div>
            </button>
            <button className="group w-full justify-center border-b-2 border-warna-300 py-5 px-2 mt-4 transition-all text-left">
                  <div className="flex items-center justify-between hover:text-warna-300">
                      <p className="font-medium md:text-lg w-[88%] group-focus:font-semibold group-focus:text-arifin-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                      <FontAwesomeIcon icon={faChevronRight} className="group-focus:rotate-90 transition-all"/>
                  </div>
                  <div className="max-h-0 overflow-hidden transition-[max-height] duration-500 ease-in-out group-focus:max-h-40">
                  <p className="mt-2 py-3">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde fugiat ex culpa, fuga optio temporibus!
                  </p>
              </div>
            </button>
            <button className="group w-full justify-center border-b-2 border-warna-300 py-5 px-2 mt-4 transition-all text-left">
                  <div className="flex items-center justify-between hover:text-warna-300">
                      <p className="font-medium md:text-lg w-[88%] group-focus:font-semibold group-focus:text-arifin-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                      <FontAwesomeIcon icon={faChevronRight} className="group-focus:rotate-90 transition-all"/>
                  </div>
                  <div className="max-h-0 overflow-hidden transition-[max-height] duration-500 ease-in-out group-focus:max-h-40">
                  <p className="mt-2 py-3">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde fugiat ex culpa, fuga optio temporibus!
                  </p>
              </div>
            </button>
          </div>
        </section>

        {/* Section: More Ways to Connect */}
        <section className="text-center py-12 md:py-16 lg:py-24 text-arifin-500">
          <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-lora text-arifin-500 font-semibold">More Ways to Connect</h2>
          <p className="mx-auto text-sm md:text-base xl:text-xl mt-3 lg:mt-5 lg:w-[60%] text-arifin-500">
            Get in touch with us to learn more about our services or to address any of your concerns
          </p>
          <div className="flex flex-wrap justify-center gap-5 mt-10">
            <a className="text-center group md:w-[25%]">
              <FontAwesomeIcon icon={faPhone} className="bg-arifin-400 text-arifin-100 py-5 px-5 md:py-7 md:px-7 rounded-full text-lg md:text-xl lg:text-2xl group-hover:bg-arifin-500 transition-all"/>
              <p className="mt-2 font-medium ">123-456-7890</p>
            </a>
            <a className="text-center md:w-[25%]">
              <FontAwesomeIcon icon={faEnvelope} className="bg-arifin-400 text-arifin-100 py-5 px-5 md:py-7 md:px-7 rounded-full text-lg md:text-xl lg:text-2xl"/>
              <p className="mt-2 font-medium">arifinbatik@gmail.com</p>
            </a>
            <a className="text-center md:w-[25%]">
              <FontAwesomeIcon icon={faLocationDot} className="bg-arifin-400 text-arifin-100 py-5 px-5 md:py-7 md:px-8 rounded-full text-lg md:text-xl lg:text-2xl"/>
              <p className="mt-2 font-medium">Jl. Taman Pancing Timur, Pemogan, Denpasar Selatan, Kota Denpasar, Bali</p>
            </a>
           
          </div>
        </section>


      </div>
      <Footer />
    </>
  );
}

export default Contact;
