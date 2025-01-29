import "../App.css";
import Navbar from "../components/navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faLocationDot } from "@fortawesome/free-solid-svg-icons";



function Contact() {
  return (
    <>
     <Navbar/>
     <div className="w-full h-[40vh] flex items-center justify-center relative">
          <img src="./hero2.jpg" alt="hero-image" className="absolute w-full h-full object-cover" />
          <div className="absolute top-0 left-0 w-full h-full bg-black/50 flex flex-col justify-center items-center text-arifin-100 text-center font-raleway px-6 md:px-12 lg:px-14 xl:px-28 ">
          <h1 className="font-lora font-semibold text-3xl md:text-3xl mt-7 lg:text-4xl xl:text-5xl md:w-[80%] xl:w-[60%] mb-4 lg:mb-6">Contact Us</h1>
          </div>
      </div>

      <div className="bg-gray-100 text-gray-800">
      {/* Section: More Ways to Connect */}
      <section className="text-center py-28 bg-white">
        <h2 className="text-2xl font-semibold">More Ways to Connect</h2>
        <p className="text-gray-600 mt-2">
        Get in touch with us to learn more about our services or to address any of your concerns
        </p>
        <div className="flex flex-wrap justify-center gap-8 mt-6">
          <div className="text-center">
            <div className="bg-gray-200 p-4 rounded-full text-2xl text-gray-700">
            <FontAwesomeIcon icon={faPhone} />
            </div>
            <p className="mt-2">123-456-7890</p>
          </div>
          <div className="text-center">
            <div className="bg-gray-200 p-4 rounded-full text-2xl text-gray-700">
            <FontAwesomeIcon icon={faEnvelope} />
            </div>
            <p className="mt-2">hello@domain.com</p>
          </div>
          <div className="text-center">
            <div className="bg-gray-200 p-4 rounded-full text-2xl text-gray-700">
            
            </div>
            <p className="mt-2">website.name</p>
          </div>
          <div className="text-center">
            <div className="bg-gray-200 p-4 rounded-full text-2xl text-gray-700">
            <FontAwesomeIcon icon={faLocationDot} />
            </div>
            <p className="mt-2">4567 Anywhere, USA</p>
          </div>
        </div>
      </section>

      {/* Section: Frequently Asked Questions */}
      <section className="py-8 bg-gray-100">
        <h2 className="text-center text-2xl font-semibold">
          Frequently Asked Questions
        </h2>
        <div className="flex flex-wrap justify-center mt-6">
          <ul className="space-y-3">
            <li className="text-gray-700 hover:text-gray-900">
              My first question goes right here & is a line?
            </li>
            <li className="text-gray-700 hover:text-gray-900">
              My first question goes right here & is a line?
            </li>
            <li className="text-gray-700 hover:text-gray-900">
              My first question goes right here & is a line?
            </li>
            <li className="text-gray-700 hover:text-gray-900">
              My first question goes right here & is a line?
            </li>
          </ul>
        </div>
      </section>

      {/* Section: What Our Clients Have to Say */}
      <section className="py-8 bg-white">
        <h2 className="text-center text-2xl font-semibold">
          What Our Clients Have to Say
        </h2>
        <p className="text-center text-gray-600 mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className="flex justify-center items-center gap-4 mt-6">
          <button className="p-2 bg-gray-200 rounded-full text-gray-700">◀</button>
          <div className="bg-gray-100 p-6 rounded shadow-md max-w-lg text-center">
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua."
            </p>
            <p className="mt-4 font-semibold">- Name</p>
          </div>
          <button className="p-2 bg-gray-200 rounded-full text-gray-700">▶</button>
        </div>
      </section>

      {/* Section: Connect on Social */}
      <section className="py-8 bg-gray-100">
        <h2 className="text-center text-2xl font-semibold">Connect on Social</h2>
        <p className="text-center text-gray-600 mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className="flex justify-center mt-6 space-x-4">
          <a href="#" className="text-gray-700 text-2xl">
            🌐
          </a>
          <a href="#" className="text-gray-700 text-2xl">
            📘
          </a>
          <a href="#" className="text-gray-700 text-2xl">
            🐦
          </a>
          <a href="#" className="text-gray-700 text-2xl">
            📷
          </a>
        </div>
      </section>
    </div>
    </>
  );
}

export default Contact;
