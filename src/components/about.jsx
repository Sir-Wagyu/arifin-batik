import "../App.css";

function About() {
  return (
    <>
     <div id="about" className="pt-28 ">
     <div className="pb-16 mt-40 bg-arifin-200">
        <div className="md:pr-14 px-6 md:px-12 lg:px-14 xl:px-28">
        <div className="md:flex grid grid-cols-1 items-center gap-7">
            <div className="max-w-lg mx-auto container pt-14 md:py-0">
                <h1 className='text-slate-900 text-3xl leading-[2.5rem] mb-4' data-aos="fade-up" data-aos-delay="100">"15 Years of Expertise in Producing and Selling Premium Stamp Batik"</h1>
                <p className='text-slate-800 text-[.9rem] text-justify' data-aos="fade-up" data-aos-delay="500">With over 15 years of experience, we have become a trusted name in the production and sale of high-quality stamp batik. Combining craftsmanship and attention to detail, our products reflect the perfect harmony of tradition and modern design.

We are proud to serve numerous requests and orders, ensuring every piece meets the highest standards of quality and customer satisfaction. Whether you're looking for beautiful batik designs for personal use or bulk orders for your business, our dedication to excellence ensures your needs are met with care and professionalism.

Experience the richness of Indonesian culture and superior craftsmanship with our premium stamp batik products. Let us help you bring the art of batik into your life!</p>
            </div>
            <img src="./about.jpg" alt="batik stamp bali export best quality produk in Bali" className='rounded-xl md:mt-[-5rem] mt-0 w-full md:w-[40%] h-[400px] md:h-[500px]' />
        </div>
        </div>
     </div>
     </div>

    </>
  );
}

export default About;
