import Image from "next/image";
import React from "react";

const Support = () => {
  return (
    <section className=" max-w-7xl mx-auto relative">
      <div className="w-full text-center py-7">
        <h3 className="text-xl md:text-xl ">Supported by:</h3>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-4">
        <div className="w-full h-full p-7 md:p-14 flex items-center justify-center">
          <Image
            src={"/images/img1.avif"}
            alt="Image1"
            width={1000}
            height={1000}
            className="object-cover w-40 md:w-full"
          />
        </div>
        <div className="w-full h-full p-7 md:p-14 flex items-center justify-center">
          <Image
            src={"/images/img2.avif"}
            alt="Image1"
            width={1000}
            height={1000}
            className="object-cover w-40 md:w-full"
          />
        </div>
        <div className="w-full h-full p-7 md:p-14 flex items-center justify-center">
          <Image
            src={"/images/img3.avif"}
            alt="Image1"
            width={1000}
            height={1000}
            className="object-cover w-40 md:w-full"
          />
        </div>
        <div className="w-full h-full p-7 md:p-14 flex items-center justify-center">
          <Image
            src={"/images/img4.avif"}
            alt="Image1"
            width={1000}
            height={1000}
            className="object-cover w-40 md:w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Support;
