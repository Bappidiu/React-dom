const Blogs = () => {
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
            <img src="/src/assets/favicon.png" alt="" />
            <div className="text-black text-5xl font-medium font-['Poppins']">
              Contact
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
      </section>

      <section className="bg-white dark:bg-gray-900 m-5">
        <div className="container px-6 py-10 mx-auto">
          <div className="text-center">
            <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
              Get In Touch with us
            </h1>
            <p className="max-w-lg mx-auto mt-4 text-gray-500">
              For More Information About Our Product & Services. Please Feel
              Free To Drop Us An Email. Our Staff Always Be There To Help You
              Out. Do Not Hesitate!
            </p>
          </div>

          <section className="bg-white dark:bg-gray-900">
            <div className="container px-6 py-12 mx-auto">
              <div className="lg:flex lg:items-center lg:-mx-6">
                <div className="lg:w-1/2 lg:mx-6">
                  <div className="mt-6 space-y-8 md:mt-8">
                    <p className="flex items-start -mx-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 mx-2 text-black-500 dark:text-blue-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <div className="inline-block">
                        <div className="text-black text-2xl font-medium font-['Poppins']">
                          Address
                        </div>
                        <div className="w-[212px] text-black text-base font-normal font-['Poppins']">
                          236 5th SE Avenue, New York NY10000, United States
                        </div>
                      </div>
                    </p>
                    <p className="flex items-start -mx-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 mx-2 text-black-500 dark:text-blue-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                      <div>
                        <div className="text-black text-2xl font-medium font-['Poppins']">
                          Phone
                        </div>
                        <div className="w-[212px] text-black text-base font-normal font-['Poppins']">
                          Mobile: +(84) 546-6789
                          <br />
                          Hotline: +(84) 456-6789
                        </div>
                      </div>
                    </p>
                    <p className="flex items-start -mx-2">
                      <img src="/src/assets/bi_clock-fill.svg" alt="" />
                      <div>
                        <div className="text-black text-2xl font-medium font-['Poppins'] ml-3">
                          Working Time
                        </div>
                        <div className="w-[212px] text-black text-base font-normal font-['Poppins'] ml-3">
                          Monday-Friday: 9:00 - 22:00
                          <br />
                          Saturday-Sunday: 9:00 - 21:00
                        </div>
                      </div>
                    </p>
                  </div>
                
                </div>
                <div className="mt-8 lg:w-1/2 lg:mx-6">
                  <div className="w-full px-8 py-10 mx-auto overflow-hidden bg-white rounded-lg shadow-2xl dark:bg-gray-900 lg:max-w-xl shadow-gray-300/50 dark:shadow-black/50">
                    
                    <form className="mt-6">
                      <div className="flex-1">
                        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                          Full Name
                        </label>
                        <input
                          type="text"
                          placeholder="Abc"
                          className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                      </div>
                      <div className="flex-1 mt-6">
                        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                          Email address
                        </label>
                        <input
                          type="email"
                          placeholder="Abc@def.com"
                          className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                      </div>
                      <div className="flex-1 mt-6">
                        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                          Subject
                        </label>
                        <input
                          type="email"
                          placeholder="This is an optional"
                          className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                      </div>
                      <div className="w-full mt-6">
                        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                          Message
                        </label>
                        <textarea
                          className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-48 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                          placeholder="Hi! i’d like to ask about"
                          defaultValue={""}
                        />
                      </div>
                      <button className="w-[237px] px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#b88e2f] rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
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

export default Blogs;
