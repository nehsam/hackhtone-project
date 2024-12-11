import Image from "next/image";
import Second from "@/app/images/Neha.jpg"; // Path to your image

const HeroSection = () => {
  return (
    <div className="relative w-full lg:h-[800px] h-auto">
      <Image
        src={Second}
        alt="Second"
        className="w-full h-full object-cover"
        layout="fill"
      />

      <div className="absolute inset-0 flex flex-col justify-center items-start p-6 sm:p-12">
        <div className="text-white max-w-lg w-full">
          <p className="text-[20px] font-semibold">Summer 2020</p>
          <h1 className="text-[36px] sm:text-[65px] font-semibold leading-tight mt-2">
            New Collection
          </h1>
          <p className="text-[16px] sm:text-[25px] font-normal mt-4">
            We know how large objects will act, but things on a small scale.
          </p>
          <button
            className="mt-6 px-6 py-3 bg-[#2DC071] text-white font-semibold text-[16px] rounded hover:bg-gray-800"
          >
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

      