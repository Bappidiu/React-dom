import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Home = () => {
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
      <div
        className="hero h-auto w-full"
        style={{
          backgroundImage: "url(/src/assets/hero1.jpeg)",
        }}
      >
        <img className="lg:hidden" src="/src/assets/hero1.jpeg" alt="" />
        <div className="lg:hidden hero-content text-neutral-content  bg-[#fff2e3]">
          <div className="max-w-md pt-[62px] pl-10 pb-10]">
            <div className="text-[#333333] text-base font-semibold font-['Poppins'] tracking-[3px] ">
              New Arrival
            </div>
            <div className=" text-[#b88e2f] text-[52px] font-bold font-['Poppins'] leading-[65px]">
              Discover Our New Collection
            </div>
            <div className=" text-[#333333] text-lg font-medium font-['Poppins'] leading-normal mb-10 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis.
            </div>
            <div className="h-[74px] px-[72px] py-[25px] bg-[#b88e2f] border-2 justify-start items-start gap-2.5 inline-flex">
              <div className="text-white text-base font-bold font-['Poppins'] uppercase pb-10">
                BUY Now
              </div>
            </div>
          </div>
        </div>
        <div className="hero-content text-neutral-content  bg-[#fff2e3] ml-[800px] mt-[260px] mb-[180px] hidden md:hidden lg:block">
          <div className="max-w-md pt-[62px] pl-10 pb-10]">
            <div className="text-[#333333] text-base font-semibold font-['Poppins'] tracking-[3px] ">
              New Arrival
            </div>
            <div className=" text-[#b88e2f] text-[52px] font-bold font-['Poppins'] leading-[65px]">
              Discover Our New Collection
            </div>
            <div className=" text-[#333333] text-lg font-medium font-['Poppins'] leading-normal mb-10 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis.
            </div>
            <div className="h-[74px] px-[72px] py-[25px] bg-[#b88e2f] border-2 justify-start items-start gap-2.5 inline-flex">
              <div className="text-white text-base font-bold font-['Poppins'] uppercase pb-10">
                BUY Now
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="text-[#333333] text-[32px] font-bold font-['Poppins'] text-center mt-10">
          Browse The Range
        </div>
        <div className=" text-center text-[#666666] text-xl font-normal font-['Poppins'] ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
        <div className="container mx-auto lg:flex md:flex justify-center items-center gap-2.5 mt-10 ">
          <div className=" hidden lg:block">
            <img
              className="mt-5 w-[372px] h-[480px] "
              src="/src/assets/browse3.jpeg"
              alt=""
            />
            <p className="text-center text-[#333333] text-2xl font-semibold font-['Poppins'] mt-4">
              Living
            </p>
          </div>
          <div className="">
            <img className=" mt-5" src="/src/assets/browse.png" alt="" />
            <p className="text-center text-[#333333] text-2xl font-semibold font-['Poppins'] mt-4">
              Dining
            </p>
          </div>
          <div className="">
            <img className="mt-5" src="/src/assets/browse2.png" alt="" />
            <p className="text-center text-[#333333] text-2xl font-semibold font-['Poppins'] mt-4">
              Bedroom
            </p>
          </div>
        </div>
      </div>

      <div className="text-center text-[#3a3a3a] text-[40px] font-bold font-['Poppins'] leading-[48px] mt-[56px]">
        Our Products
      </div>

      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-center justify-center">
        {heroData.slice(0, 8).map((hero) => (
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

      <section>
        <div className="w-full h-auto bg-[#fbf7f2] mt-10">
          <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center justify-center gap-6 px-4 py-8">
            <div className="text-center lg:text-left">
              <div className="w-full text-[#3a3a3a] text-[24px] lg:text-[40px] font-bold font-['Poppins'] leading-[32px] lg:leading-[48px]">
                50+ Beautiful rooms <br /> inspiration
              </div>
              <div className="w-full text-[#606060] text-sm lg:text-base font-medium font-['Poppins'] leading-normal mt-4">
                Our designer already made a lot of beautiful prototype of rooms
                that inspire you.
              </div>
              <div className="w-36 lg:w-44 h-10 lg:h-12 bg-[#b88e2f] mt-6 mx-auto lg:mx-0">
                <div className="text-center text-white text-sm lg:text-base font-semibold font-['Poppins'] leading-normal py-2 lg:pt-3">
                  Explore More
                </div>
              </div>
            </div>

            <div className="w-full lg:w-auto relative">
              <div className="hidden lg:flex absolute inset-0 flex ml-6">
                <div className="w-[217px] h-[130px] bg-white/70 backdrop-blur-[3px] mt-[428px]">
                  <div className="flex mt-10 ml-6">
                    <div className="text-[#606060] text-base font-medium font-['Poppins'] leading-normal">
                      01
                    </div>
                    <h1>----</h1>
                    <div className="text-[#606060] text-base font-medium font-['Poppins'] leading-normal">
                      Bed Room
                    </div>
                  </div>
                  <div className="text-[#3a3a3a] text-[28px] font-semibold font-['Poppins'] leading-[33.60px] ml-6 ">
                    Inner Peace
                  </div>
                </div>
                <div className="w-12 h-12 bg-[#b88e2f] mt-[510px]">
                  <div className="w-6 h-6 relative">
                    <img
                      className="mt-3 ml-3"
                      src="/src/assets/Right 16px.svg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <img
                className="w-full max-w-[404px] h-auto mx-auto lg:mt-[44px]"
                src="/src/assets/Rectangle 24.png"
                alt="Room Inspiration 1"
              />
            </div>

            <div className="w-full lg:w-auto">
              <img
                className="w-full max-w-[372px] h-auto mx-auto"
                src="/src/assets/Rectangle 25.png"
                alt="Room Inspiration 2"
              />
              <div className="flex justify-center lg:justify-start items-center gap-3 mt-4">
                <div className="w-[27px] h-[27px] relative">
                  <div className="w-[27px] h-[27px] absolute opacity-70 rounded-full border border-[#b88e2f]"></div>
                  <div className="w-[11px] h-[11px] absolute top-[8px] left-[8px] bg-[#b88e2f] rounded-full border border-[#b88e2f]"></div>
                </div>
                <div className="w-[11px] h-[11px] bg-[#d8d8d8] rounded-full"></div>
                <div className="w-[11px] h-[11px] bg-[#d8d8d8] rounded-full"></div>
                <div className="w-[11px] h-[11px] bg-[#d8d8d8] rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    


    </div>
  );
};

export default Home;
