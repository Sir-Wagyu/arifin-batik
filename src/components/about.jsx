import "../App.css";

function About() {
  return (
    <>
<div id="about" className="pb-36 pt-10 md:py-20 md:mt-20 lg:mt-16 xl:mt-28">
  <div className="bg-arifin-200 px-6 md:px-12 lg:px-14 xl:px-28 pb-10 md:py-14">
    <div className="font-raleway flex flex-col lg:flex-row items-center justify-center gap-7">
      <div className="w-full lg:w-[50%] mx-auto font-raleway order-2 lg:order-1">
        <p className="text-lg md:text-xl text-arifin-400 font-semibold mb-2 md:mb-4">Story About Us</p>
        <h1 className='text-2xl md:text-3xl lg:text-4xl font-lora font-medium text-arifin-500 mb-8 md:mb-11'>&quot;30 Years of Excellence in Producing and Selling Premium Stamp Batik&quot;</h1>
        <p className='text-arifin-500 text-sm md:text-base text-justify'>
          With over 30 years of experience, we have established ourselves as a leading name in the production and sale of high-quality stamp batik. Our dedication to craftsmanship and precision ensures that each piece embodies a perfect blend of tradition and contemporary design. <br />
          <br />
          Over the decades, we have fulfilled countless orders with a commitment to superior quality and customer satisfaction. Whether you seek exquisite batik designs for personal use or large-scale production for your business, our expertise guarantees the best results. <br />
          <br />
          Discover the beauty of Indonesian heritage through our premium stamp batik collection. Let us be your trusted partner in bringing authentic batik artistry into your life!
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
