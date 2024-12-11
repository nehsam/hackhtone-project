import Image from "next/image";
import colours from "@/app/images/d1.png";
import colours1 from "@/app/images/d2.png";
import colours2 from "@/app/images/d3.png";
import colours3 from "@/app/images/d4.png";
import colours4 from "@/app/images/d5.png";
import colours5 from "@/app/images/d6.png";
import colours6 from "@/app/images/d7.png";
import colours7 from "@/app/images/d8.png";

const CardText = () => {
  return (
    <div className="lg:mt-[100px] w-full rounded-[5px] absolute top-[1750px] border bg-white">
      <div className="mx-auto w-full max-w-[1400px] flex flex-col justify-evenly p-5 sm:p-10">
        {/* Title Section */}
        <div className="w-full flex flex-col justify-center items-center text-center mb-8">
          <h4 className="font-Montserrat font-normal lg:text-[20px] sm:text-[20px] leading-[24px] sm:leading-[30px] text-[#737373]">
            Featured Products
          </h4>
          <h3 className="font-Montserrat font-bold lg:text-[28px] sm:text-[24px] leading-[28px] sm:leading-[32px] text-[#252B42]">
            BESTSELLER PRODUCTS
          </h3>
          <p className="font-Montserrat font-normal lg:text-[17px] leading-[20px] text-[#737373]">
            Problems trying to resolve the conflict between
          </p>
        </div>

        {/* Products Section */}
        <div className="w-full flex flex-wrap justify-center gap-6">
          {/* Product Cards */}
          {[ 
            { src: colours, alt: "colours" },
            { src: colours1, alt: "colours1" },
            { src: colours2, alt: "colours2" },
            { src: colours3, alt: "colours3" },
            { src: colours4, alt: "colours4" },
            { src: colours5, alt: "colours5" },
            { src: colours6, alt: "colours6" },
            { src: colours7, alt: "colours7" }
          ].map((product, index) => (
            <div key={index} className="w-full sm:w-[238px] md:w-[250px] lg:w-[300px] flex flex-col items-center mb-8">
              {/* Image */}
              <div className="w-[239px] h-[427px] flex justify-center overflow-hidden mb-4">
                <Image
                  src={product.src}
                  alt={product.alt}
                  className="w-full h-full object-contain rounded"
                />
              </div>
              {/* Text Section */}
              <div className="w-full text-center">
                <h5 className="font-Montserrat font-bold text-[16px] leading-[24px] text-[#252B42]">
                  Graphic Design
                </h5>
                <p className="font-Montserrat font-normal text-[14px] leading-[20px] text-[#737373]">
                  English Department
                </p>
                <div className="flex justify-center gap-2 mt-2">
                  <h5 className="font-Montserrat font-bold text-[16px] text-[#BDBDBD] line-through">
                    $16.48
                  </h5>
                  <h5 className="font-Montserrat font-bold text-[16px] text-[#23856D]">
                    $6.48
                  </h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardText;
