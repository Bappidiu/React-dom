import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Details = () => {
    const [heroData, setHeroData] = useState([]);

  useEffect(() => {
    fetch("/src/Hero.json")
      .then((response) => response.json())
      .then((data) => setHeroData(data));
  }, []);
  return (
    <div>
      <div className="w-full h-[100px] bg-[#f9f1e7]">
        <div className="flex flex-wrap items-center justify-center md:justify-start">
          <div className="text-[#9f9f9f] text-base font-normal font-['Poppins'] mt-8 ml-2 md:ml-3">
            Home
          </div>
          <img
            className="mt-8 ml-2 md:ml-3"
            src="/src/assets/shop-arrow.svg"
            alt=""
          />
          <div className="text-[#9f9f9f] text-base font-normal font-['Poppins'] mt-8 ml-2 md:ml-3">
            Shop
          </div>
          <img
            className="mt-8 ml-2 md:ml-3"
            src="/src/assets/shop-arrow.svg"
            alt=""
          />
          <div className="w-[37px] h-0 origin-top-left rotate-90 border-2 border-[#9f9f9f] mt-2 ml-12 md:ml-3"></div>
          <div className="text-black text-base font-normal font-['Poppins'] mt-8 ml-2 md:ml-3">
            Asgaard Safa
          </div>
        </div>
      </div>

      <div className="container mx-auto p-4 pt-6 flex flex-col lg:flex-row gap-4">
        {/* Thumbnail Images */}
        <div className="flex lg:flex-col gap-4">
          <div className="w-[76px] h-20 bg-[#F9F1E7] rounded-[10px]">
            <img
              src="/src/assets/Outdoor sofa set 2.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-[76px] h-20 bg-[#F9F1E7] rounded-[10px]">
            <img
              src="/src/assets/Outdoor sofa set_2 1.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-[76px] h-20 bg-[#F9F1E7] rounded-[10px]">
            <img
              src="/src/assets/Stuart sofa 1.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-[76px] h-20 bg-[#F9F1E7] rounded-[10px]">
            <img
              src="/src/assets/Maya sofa three seater (1) 1.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Main Image */}
        <div className="flex-1 w-full lg:w-auto">
          <div className="w-full h-[300px] sm:h-[400px] lg:h-[500px] bg-[#f9f1e7] rounded-[10px]">
            <img
              src="/src/assets/Asgaard sofa 3.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Product Details */}
        <div className="lg:ml-8 flex-1">
          <div className="text-black text-2xl sm:text-3xl lg:text-[42px] font-normal font-['Poppins']">
            Asgaard sofa
          </div>
          <div className="text-[#9f9f9f] text-xl sm:text-2xl font-medium font-['Poppins'] mt-2">
            Rs. 250,000.00
          </div>

          {/* Rating and Reviews */}
          <div className="mt-2">
            <div className="flex items-center">
              <img
                src="/src/assets/dashicons_star-filled.svg"
                alt=""
                className="w-5 h-5"
              />
              <img
                src="/src/assets/dashicons_star-filled.svg"
                alt=""
                className="w-5 h-5"
              />
              <img
                src="/src/assets/dashicons_star-filled.svg"
                alt=""
                className="w-5 h-5"
              />
              <img
                src="/src/assets/dashicons_star-filled.svg"
                alt=""
                className="w-5 h-5"
              />
              <img
                src="/src/assets/carbon_star-half.svg"
                alt=""
                className="w-5 h-5"
              />
              <h3 className="ml-4 text-sm sm:text-base">5 Customer Reviews</h3>
            </div>
          </div>

          {/* Description */}
          <div className="w-full sm:w-[424px] text-black text-sm sm:text-base font-normal font-['Poppins'] mt-4">
            Setting the bar as one of the loudest speakers in its class, the
            Kilburn is a compact, stout-hearted hero with a well-balanced audio
            which boasts a clear midrange and extended highs for a sound.
          </div>

          {/* Size Selection */}
          <div className="mt-5">
            <div className="text-[#9f9f9f] text-sm font-normal font-['Poppins']">
              Size
            </div>
            <div className="flex gap-4 mt-2">
              <div className="w-[30px] h-[30px] bg-[#b88e2f] rounded-[5px] flex items-center justify-center text-white text-xs">
                L
              </div>
              <div className="w-[30px] h-[30px] bg-[#f9f1e7] rounded-[5px] flex items-center justify-center text-black text-xs">
                XL
              </div>
              <div className="w-[30px] h-[30px] bg-[#f9f1e7] rounded-[5px] flex items-center justify-center text-black text-xs">
                XS
              </div>
            </div>
          </div>

          {/* Color Selection */}
          <div className="mt-5">
            <div className="text-[#9f9f9f] text-sm font-normal font-['Poppins']">
              Color
            </div>
            <div className="flex gap-4 mt-2">
              <div className="w-[30px] h-[30px] bg-[#806df9] rounded-full"></div>
              <div className="w-[30px] h-[30px] bg-black rounded-full"></div>
              <div className="w-[30px] h-[30px] bg-[#b88e2f] rounded-full"></div>
            </div>
          </div>

          {/* Quantity and Actions */}
          <div className="flex flex-wrap gap-4 mt-6">
            <div className="w-[120px] h-14 bg-white rounded-[10px] border border-[#9f9f9f] flex items-center justify-between px-4">
              <button className="text-black">-</button>
              <span className="text-black">1</span>
              <button className="text-black">+</button>
            </div>

            <button className="w-full sm:w-[215px] h-14 bg-white text-black rounded-[15px] border border-black font-['Poppins']">
              Add To Cart
            </button>

            <button className="w-full sm:w-[215px] h-14 bg-transparent border border-black rounded-[15px] font-['Poppins'] flex items-center justify-center">
              <span className="mr-2">+</span>Compare
            </button>
          </div>

          <div>
            <div className="w-full max-w-[605px] border border-[#d9d9d9] mt-10 mx-auto lg:mt-[60px]"></div>

            {/* SKU Section */}
            <div className="flex flex-wrap items-center mt-6">
              <div className="text-[#9f9f9f] text-sm sm:text-base font-normal font-['Poppins']">
                SKU
              </div>
              <div className="text-[#9f9f9f] text-sm sm:text-base font-medium font-['Poppins'] ml-2 sm:ml-4 lg:ml-[61px]">
                :
              </div>
              <div className="text-[#9f9f9f] text-sm sm:text-base font-normal font-['Poppins'] ml-2">
                SS001
              </div>
            </div>

            {/* Category Section */}
            <div className="flex flex-wrap items-center mt-3">
              <div className="text-[#9f9f9f] text-sm sm:text-base font-normal font-['Poppins']">
                Category
              </div>
              <div className="text-[#9f9f9f] text-sm sm:text-base font-medium font-['Poppins'] ml-2 sm:ml-4 lg:ml-[33px]">
                :
              </div>
              <div className="text-[#9f9f9f] text-sm sm:text-base font-normal font-['Poppins'] ml-2">
                Sofas
              </div>
            </div>

            {/* Tags Section */}
            <div className="flex flex-wrap items-center mt-3">
              <div className="text-[#9f9f9f] text-sm sm:text-base font-normal font-['Poppins']">
                Tags
              </div>
              <div className="text-[#9f9f9f] text-sm sm:text-base font-medium font-['Poppins'] ml-2 sm:ml-4 lg:ml-[61px]">
                :
              </div>
              <div className="text-[#9f9f9f] text-sm sm:text-base font-normal font-['Poppins'] ml-2">
                Sofa, Chair, Home, Shop
              </div>
            </div>

            {/* Share Section */}
            <div className="flex flex-wrap items-center mt-3">
              <div className="text-[#9f9f9f] text-sm sm:text-base font-normal font-['Poppins']">
                Share
              </div>
              <div className="text-[#9f9f9f] text-sm sm:text-base font-medium font-['Poppins'] ml-2 sm:ml-4 lg:ml-[55px]">
                :
              </div>
              <div className="flex gap-2 ml-2">
                <img
                  src="/src/assets/akar-icons_facebook-fill.svg"
                  alt="Facebook"
                  className="w-5 h-5"
                />
                <img
                  src="/src/assets/akar-icons_linkedin-box-fill.svg"
                  alt="LinkedIn"
                  className="w-5 h-5"
                />
                <img
                  src="/src/assets/ant-design_twitter-circle-filled.svg"
                  alt="Twitter"
                  className="w-5 h-5"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-[1px] border border-[#d9d9d9]"></div>

<div className="container mx-auto p-4 pt-6 lg:p-6 lg:pt-10 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-10">
  <div className="text-black text-lg md:text-2xl font-medium font-['Poppins']">
    Description
  </div>
  <div className="text-[#9f9f9f] text-lg md:text-2xl font-normal font-['Poppins']">
    Additional Information
  </div>
  <div className="text-[#9f9f9f] text-lg md:text-2xl font-normal font-['Poppins']">
    Reviews [5]
  </div>
</div>

<div className="container mx-auto p-4 text-justify text-[#9f9f9f] text-sm md:text-base font-normal font-['Poppins'] max-w-4xl">
  <p className="mb-4">
    Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable
    active stereo speaker takes the unmistakable look and sound of Marshall,
    unplugs the chords, and takes the show on the road.
  </p>
  <p>
    Weighing in under 7 pounds, the Kilburn is a lightweight piece of
    vintage-styled engineering. Setting the bar as one of the loudest
    speakers in its class, the Kilburn is a compact, stout-hearted hero with
    a well-balanced audio which boasts a clear midrange and extended highs
    for a sound that is both articulate and pronounced. The analogue knobs
    allow you to fine-tune the controls to your personal preferences while
    the guitar-influenced leather strap enables easy and stylish travel.
  </p>
</div>


<div className="container mx-auto flex flex-col md:flex-row gap-4 mt-9 justify-center items-center">
  <div className="w-full md:w-[605px] h-[348px] bg-[#f9f1e7] rounded-[10px] flex justify-center items-center m-2">
    <img src="/src/assets/Cloud sofa three seater + ottoman_1 1.png" alt="Sofa Image 1" className="w-full h-full object-cover rounded-[10px]" />
  </div>
  <div className="w-full md:w-[605px] h-[348px] bg-[#f9f1e7] rounded-[10px] flex justify-center items-center">
    <img src="/src/assets/Cloud sofa three seater + ottoman_2 1.png" alt="Sofa Image 2" className="w-full h-full object-cover rounded-[10px] mx-2" />
  </div>
</div>

<div className="w-full h-[1px] border border-[#d9d9d9] mt-10"></div>
<div className="text-center text-black text-4xl font-medium font-['Poppins'] mt-10">Related Products</div>

<div className="mt-10">
<div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-center justify-center">
        {heroData.slice(0, 4).map((hero) => (
          <div
            key={hero.id}
            className="container mx-auto w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 m-6 relative group"
          >
            {/* The entire card including image and content */}
            <div className="relative group w-full h-full">
              {/* Card Image */}
              <img
                className="object-cover object-center w-full h-56 transition-all duration-300 group-hover:opacity-50"
                src={hero.image}
                alt="avatar"
              />
              {/* Card Content */}
              <div className="container mx-auto p-6 group-hover:opacity-0 transition-opacity duration-300">
                <div className="text-[#3a3a3a] text-2xl font-semibold font-['Poppins'] leading-[28.80px]">
                  {hero.title}
                </div>
                <div className="text-[#898989] text-base font-medium font-['Poppins'] leading-normal">
                  {hero.category}
                </div>
                <div className="flex">
                  <div className="text-[#3a3a3a] text-xl font-semibold font-['Poppins'] leading-[30px]">
                    Rp {hero.price}
                  </div>
                  <div className="text-[#b0b0b0] text-base font-normal font-['Poppins'] line-through leading-normal ml-6">
                    Rp {hero.old_price}
                  </div>
                </div>
              </div>

              {/* Discount Badge */}
              <div className="w-12 h-12 left-[213px] top-[24px] absolute">
                <div className="w-12 h-12 left-0 top-0 absolute bg-[#e97171] rounded-full" />
                <div className="left-[5px] top-[12px] absolute text-white text-base font-medium font-['Poppins'] leading-normal">
                  -{hero.discount_percent}%
                </div>
              </div>

              {/* Overlay for Background Blur */}
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm ">
                <div className="flex mt-[247px]">
                  <div className="flex w-4 h-4 relative ml-[20px]">
                    <img src="/src/assets/gridicons_share.svg" alt="" />
                    <div className="text-white text-base font-semibold font-['Poppins'] leading-normal">
                      Share
                    </div>
                  </div>
                  <div className="flex w-4 h-4 relative ml-[100px]">
                    <img src="/src/assets/compare-svgrepo-com 1.svg" alt="" />
                    <div className="text-white text-base font-semibold font-['Poppins'] leading-normal">
                      Compare
                    </div>
                  </div>
                  <div className="flex w-4 h-4 relative ml-[120px]">
                    <img src="/src/assets/Heart.svg" alt="" />
                    <div className="text-white text-base font-semibold font-['Poppins'] leading-normal">
                      Like
                    </div>
                  </div>
                </div>
              </div>

              {/* Button Overlay on Hover */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Link to={"/Details"}>
                  <button className="w-[202px] h-12 bg-white flex items-center justify-center">
                    <span className="text-[#b88e2f] text-base font-semibold font-['Poppins'] leading-normal">
                      Details
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full flex items-center justify-center mt-10">
        <div className="btn w-[245px] h-12 bg-white border border-[#b88e2f] flex items-center justify-center">
          <div className=" text-[#b88e2f] text-base font-semibold font-['Poppins'] leading-normal">
            Show More
          </div>
        </div>
      </div>
</div>

    </div>
  );
};

export default Details;
