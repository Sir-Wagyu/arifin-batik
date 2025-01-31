import "../App.css";

function About() {
  return (
    <>

      <div id="about" className="pb-36 pt-10 md:py-20 md:mt-20 lg:mt-16 xl:mt-28">
        <div className="bg-arifin-200 px-6 md:px-12 lg:px-14 xl:px-28 pb-10 md:py-14">
          <div className="font-raleway flex flex-col lg:flex-row items-center justify-center gap-7">
            <div className="w-full lg:w-[50%] mx-auto font-raleway order-2 lg:order-1">
              <p className="text-lg md:text-xl text-arifin-400 font-semibold mb-2 md:mb-4">Story About Us</p>
              <h1 className='text-2xl md:text-3xl lg:text-4xl font-lora font-medium text-arifin-500 mb-8 md:mb-11'>&quot;15 Years of Expertise in Producing and Selling Premium Stamp Batik&quot;</h1>
              <p className='text-arifin-500 text-sm md:text-base text-justify'>
              With over 15 years of experience, we have become a trusted name in the production and sale of high-quality stamp batik. Combining craftsmanship and attention to detail, our products reflect the perfect harmony of tradition and modern design. <br />
              <br />
              We are proud to serve numerous requests and orders, ensuring every piece meets the highest standards of quality and customer satisfaction. Whether you&apos;re looking for beautiful batik designs for personal use or bulk orders for your business, our dedication to excellence ensures your needs are met with care and professionalism. <br />
              <br />
              Experience the richness of Indonesian culture and superior craftsmanship with our premium stamp batik products. Let us help you bring the art of batik into your life!
              </p>
            </div>
            <div className="rounded-lg overflow-hidden aspect-video lg:aspect-[5/4] w-screen md:w-[95%] lg:w-[50%] xl:w-[40%] md:mt-[-10rem] lg:mt-0 xl:mt-[-16rem] order-1 lg:order-2">
              <img src="./about.jpg" alt="profile_img" className="w-full h-full object-cover"/>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default About;
