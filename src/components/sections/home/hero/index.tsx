import Aurora from "@/lib/Aurora/Aurora";
import TextPressure from "@/lib/TextPressure/TextPressure";
import Waves from "@/lib/Waves/Waves";
import React from "react";

const Hero = () => {
  return (
    <section className="h-[60vh] md:h-screen mx-auto relative overflow-hidden">
      <div className="h-full flex w-full ">
        <Waves
          lineColor="#B5FE00"
          backgroundColor="rgba(255, 255, 255, 0.2)"
          waveSpeedX={0.02}
          waveSpeedY={0.05}
          waveAmpX={60}
          waveAmpY={20}
          friction={0.9}
          tension={0.01}
          maxCursorMove={400}
          xGap={50}
          yGap={10}
        />
        <div className="bg-gradient-to-t from-black to-transparent w-full h-full absolute top-0 left-0"></div>
        <div className="flex flex-col z-10 justify-center items-center gap-5 w-full h-full">
          <div className="size-full flex flex-col z-10 justify-center items-center gap-5 mx-20 mt-28">
            <TextPressure
              text="DEVIX"
              flex={true}
              alpha={false}
              stroke={false}
              width={true}
              weight={false}
              italic={true}
              textColor="#ffffff"
              strokeColor="#ff0000"
              minFontSize={16}
            />
          </div>
          <h1 className="text-2xl font-syne font-bold md:text-6xl mx-5 mb-20 text-center md:mx-60 relative z-20">
            AI-Enhanced Code Generation and Seamless Deployment
          </h1>
        </div>

        <Aurora
          colorStops={["#B5FE00", "#000000", "#B5FE00"]}
          speed={0.7}
          amplitude={0.5}
        />
      </div>
    </section>
  );
};

export default Hero;
