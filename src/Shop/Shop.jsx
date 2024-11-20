import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Shop = () => {
  const [heroData, setHeroData] = useState([]);

  useEffect(() => {
    fetch("/src/Hero.json")
      .then((response) => response.json())
      .then((data) => setHeroData(data));
  }, []);

  if (!heroData) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <section>
        <div className="relative w-full h-[316px]">
          <img
            className="w-full h-full blur-[6px] object-cover"
            src="/src/assets/Rectangle 1.png"
            alt="Background"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <div className="text-black text-5xl font-medium font-['Poppins']">
              Shop
            </div>
            <div className="flex items-center gap-2 mt-2">
              <div className="text-black text-base font-medium font-['Poppins']">
                Home
              </div>
              
                <img src="/src/assets/shop-arrow.svg" alt="" />
              
              <div className="text-black text-base font-light font-['Poppins']">
                Shop
              </div>
            </div>
          </div>
        </div>

        <div className=" h-[100px] bg-[#f9f1e7] flex">
          <div className="container mx-auto mt-8 ml-[100px] flex">
            <div className="hidden lg:block w-[25px] h-[25px] relative flex-col justify-start items-start inline-flex">
              <img src="/src/assets/system-uicons_filtering.svg" alt="" />
            </div>
            <div className="hidden lg:block text-black text-xl font-normal font-['Poppins'] ml-3">
              Filter
            </div>
            <div className="hidden lg:block w-7 h-7 relative ml-3">
              <img src="/src/assets/ci_grid-big-round.svg" alt="" />
            </div>
            <div className=" hidden lg:block w-7 h-7 relative ml-3">
              <img src="/src/assets/bi_view-list.svg" alt="" />
            </div>
            <div className="hidden lg:block w-[37px] h-[0px] origin-top-left rotate-90 border-2 border-[#9f9f9f] ml-5"></div>
            <div className="hidden lg:block text-black text-base font-normal font-['Poppins'] ml-4">
              Showing 1–16 of 32 results
            </div>
            <div className="hidden lg:block text-black text-xl font-normal font-['Poppins'] ml-[468px] mt-2">
              Show
            </div>
            <div className="hidden lg:block w-[45px] h-[40px] bg-white ml-3">
              <div className="hidden lg:block text-[#9f9f9f] text-xl font-normal font-['Poppins'] ml-3 pt-2">
                16
              </div>
            </div>
            <div className="hidden lg:block text-black text-xl font-normal font-['Poppins'] ml-6 mt-2">
              Short by
            </div>
            <div className="hidden lg:block w-[188px] h-[40px] bg-white ml-3">
              <div className="hidden lg:block text-[#9f9f9f] text-xl font-normal font-['Poppins'] mt-2 ml-3">
                Default
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-10">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-center justify-center">
          {heroData.map((hero) => (
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

        <div className=" flex justify-center items-center">
          <div className="h-[90px] pt-[30px] flex justify-start items-center gap-[28px]">
            <div className="w-[60px] h-[60px] relative flex justify-center items-center">
              <div className="btn w-full h-full bg-[#b88e2f] rounded-[10px]" />
              <div className="absolute text-white text-xl font-normal font-['Poppins']">
                1
              </div>
            </div>

            <div className="w-[60px] h-[60px] relative flex justify-center items-center">
              <div className="btn w-full h-full bg-[#f9f1e7] rounded-[10px]" />
              <div className="absolute text-black text-xl font-normal font-['Poppins']">
                2
              </div>
            </div>

            <div className=" w-[60px] h-[60px] relative flex justify-center items-center">
              <div className="btn w-full h-full bg-[#f9f1e7] rounded-[10px]" />
              <div className=" absolute text-black text-xl font-normal font-['Poppins']">
                3
              </div>
            </div>

            <div className="w-[98px] h-[60px] relative flex justify-center items-center">
              <div className="btn w-full h-full bg-[#f9f1e7] rounded-[10px]" />
              <div className="absolute text-black text-xl font-light font-['Poppins']">
                Next
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="w-full h-auto py-10 bg-[#faf3ea] flex flex-col items-center">
          <div className="w-full max-w-[1334px] flex flex-wrap justify-center gap-8 px-4">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="w-[60px] h-[60px] flex items-center justify-center">
                <img src="/src/assets/trophy 1.svg" alt="High Quality Icon" />
              </div>
              <div className="text-center sm:text-left">
                <div className="text-[#242424] text-[20px] sm:text-[25px] font-semibold font-['Poppins'] leading-[30px] sm:leading-[37.50px]">
                  High Quality
                </div>
                <div className="text-[#898989] text-base sm:text-xl font-medium font-['Poppins'] leading-[24px] sm:leading-[30px]">
                  crafted from top materials
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="w-[60px] h-[60px] flex items-center justify-center">
                <img
                  src="/src/assets/guarantee.svg"
                  alt="Warranty Protection Icon"
                />
              </div>
              <div className="text-center sm:text-left">
                <div className="text-[#242424] text-[20px] sm:text-[25px] font-semibold font-['Poppins'] leading-[30px] sm:leading-[37.50px]">
                  Warranty Protection
                </div>
                <div className="text-[#898989] text-base sm:text-xl font-medium font-['Poppins'] leading-[24px] sm:leading-[30px]">
                  Over 2 years
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="w-[60px] h-[60px] flex items-center justify-center">
                <img src="/src/assets/shipping.svg" alt="Free Shipping Icon" />
              </div>
              <div className="text-center sm:text-left">
                <div className="text-[#242424] text-[20px] sm:text-[25px] font-semibold font-['Poppins'] leading-[30px] sm:leading-[37.50px]">
                  Free Shipping
                </div>
                <div className="text-[#898989] text-base sm:text-xl font-medium font-['Poppins'] leading-[24px] sm:leading-[30px]">
                  Order over 150 $
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="w-[60px] h-[60px] flex items-center justify-center">
                <img
                  src="/src/assets/customer-support.svg"
                  alt="Customer Support Icon"
                />
              </div>
              <div className="text-center sm:text-left">
                <div className="text-[#242424] text-[20px] sm:text-[25px] font-semibold font-['Poppins'] leading-[30px] sm:leading-[37.50px]">
                  24 / 7 Support
                </div>
                <div className="text-[#898989] text-base sm:text-xl font-medium font-['Poppins'] leading-[24px] sm:leading-[30px]">
                  Dedicated support
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop;
