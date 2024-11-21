

const Footer = () => {
  return (
    <>
    <footer className="bg-white dark:bg-gray-900">
      <div className="container p-6 mx-auto">
      <hr className="h-px my-6 bg-gray-200 border-none dark:bg-gray-700" />
        <div className="lg:flex">
          <div className="w-full -mx-6 lg:w-2/5">
            <div className="px-6">
            <div className="text-black text-2xl font-bold font-['Poppins'] mb-[50px]">Funiro.</div>
            <div className="w-[285px] text-[#9f9f9f] text-base font-normal font-['Poppins']">400 University Drive Suite 200 Coral Gables,
            <br/>FL 33134 USA</div>
              
            </div>
          </div>
          <div className="mt-6 lg:mt-0 lg:flex-1">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <div>
              <div className="text-[#9f9f9f] text-base font-medium font-['Poppins'] mb-[50px]">Links</div>
              <div className="text-black text-base font-medium font-['Poppins'] mb-[46px]">Home</div>
              <div className="text-black text-base font-medium font-['Poppins'] mb-[46px]">Shop</div>
              <div className="text-black text-base font-medium font-['Poppins'] mb-[46px]">About</div>
              <div className="text-black text-base font-medium font-['Poppins'] mb-[46px]">Contact</div>
                
              </div>
              <div>
              <div className="text-[#9f9f9f] text-base font-medium font-['Poppins'] mb-[50px]">Help</div>
              <div className="text-black text-base font-medium font-['Poppins'] mb-[46px]">Payment Options</div>
              <div className="text-black text-base font-medium font-['Poppins'] mb-[46px]">Returns</div>
              <div className="text-black text-base font-medium font-['Poppins'] mb-[46px]">Privacy Policies</div>
              
              </div>
              <div>
              <div className="text-[#9f9f9f] text-base font-medium font-['Poppins'] mb-[50px]">Newsletter</div>
              <div className="flex">
              <input type="text" placeholder="Enter Your Email Address" className="underline"/>
              <a className="hidden lg:block text-black text-sm font-medium font-['Poppins'] underline ml-9" href="">SUBSCRIBE</a>
              
              </div>
              </div>
              
            </div>
          </div>
        </div>
        <hr className=" h-px my-6 bg-gray-200 border-none dark:bg-gray-700" />
        <div>
        <div className="text-black text-base font-normal font-['Poppins']">2023 furino. All rights reverved</div>
        </div>
      </div>
    </footer>
  </>
  
  );
};

export default Footer;
