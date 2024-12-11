import Image from "next/image";
import greenman from "@/app/images/shop-hero-2-png-picture-1.png";

const GreenDiv = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto rounded-[5px] bg-[#23856D] relative border lg:my-[2000px]">
      <div className="w-full h-auto py-[112px] flex flex-col items-center sm:flex-row sm:gap-[80px] px-6">
        {/* Left Section */}
        <div className="flex flex-col items-center gap-[30px] sm:w-[50%] text-center sm:text-left">
          <h4 className="font-Montserrat font-normal text-[20px] leading-[30px] text-white">
            SUMMER 2020
          </h4>
          <h1 className="font-Montserrat font-bold text-[36px] sm:text-[58px] leading-[44px] sm:leading-[80px] text-white">
            Vita Classic Product
          </h1>
          <p className="font-Montserrat font-medium text-[14px] leading-[20px] text-white sm:w-[341px] w-[80%]">
            We know how large objects will act, We know how objects will act, We know.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-[20px] sm:gap-[34px]">
            <h3 className="font-Montserrat font-bold text-[24px] leading-[32px] text-white">
              $16.48
            </h3>
            <button className="rounded-[5px] bg-[#2DC071] px-[40px] py-[15px] flex items-center justify-center gap-[10px]">
              <h1 className="font-Montserrat text-[14px] leading-[22px] text-white">
                ADD TO CART
              </h1>
            </button>
          </div>
        </div>

        {/* Right Section (Image) */}
        <div className="w-full sm:w-[50%] flex justify-center items-center mt-[30px] sm:mt-0">
          <Image src={greenman} alt="picman" className="w-[80%] sm:w-auto" />
        </div>
      </div>
    </div>
  );
};

export default GreenDiv;

// mt-[-130px]