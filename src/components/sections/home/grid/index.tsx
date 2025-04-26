"use client";

import { FileSearch, Link, PencilRuler } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import TiltedCard from "@/lib/TiltedCard/TiltedCard";
import { AnimatePresence, motion } from "framer-motion";

const Grid = () => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <section className="px-5 md:px-5 lg:px-60 relative">
      <div className="bg-circle-blur absolute -right-[450px] top-1/2 -translate-y-1/2 -z-10"></div>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-1 lg:grid-cols-2">
        <div className="p-7 rounded-3xl  border border-[#B5FE00] bg-gradient-to-r from-[#B5FE00]/60 to-transparent md:p-14 flex flex-col">
          <div className="flex items-center gap-3 mb-3 text-neutral-200 text-sm">
            <FileSearch size={16} /> AI-Powered Smart Contract Creation
          </div>
          <p className="text-2xl text-white/70">
            <span className="text-white font-semibold">
            Easily generate optimized,
            </span>{" "}
            blockchain-focused smart contracts and dApps with AI-driven code suggestions tailored to your project.
          </p>
          <Image
            src={"/images/devial_screen_1.png"}
            alt="Grid1"
            className="w-full rounded-2xl mt-5"
            width={600}
            height={600}
          />
        </div>
        <div className="p-7 rounded-3xl relative border border-[#B5FE00] md:p-14 flex items-center overflow-hidden flex-col">
          <div className="flex items-center gap-3 mb-3 text-neutral-400 text-sm">
            <Link size={16} /> Seamless Blockchain Deployment
          </div>
          <p className="text-2xl text-white/70">
            <span className="text-white">
            Deploy your dApps and smart contracts
            </span>{" "}
            across multiple blockchains effortlessly—no manual setup or complex configurations needed.
          </p>
          <div
            className="relative mt-5"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <div className="relative w-full h-full">
              {/* Default image */}
              <motion.div
                className="absolute inset-0"
                initial={{ opacity: 1 }}
                animate={{ opacity: isHovering ? 0 : 1 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <Image
                  src="/images/griddy.png"
                  alt="Grid1"
                  className=" rounded-2xl"
                  width={600}
                  height={600}
                />
              </motion.div>

              {/* Hover image */}
              <motion.div
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: isHovering ? 1 : 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <Image
                  src="/images/glowinggrid.png"
                  alt="Grid1 (hover state)"
                  className=" rounded-2xl"
                  width={600}
                  height={600}
                />
              </motion.div>
            </div>
          </div>
          {/* Invisible spacer with same dimensions as the images */}
          <div className="invisible">
            <Image
              src="/images/griddy.png"
              alt="Spacer"
              className="md:mix-blend-lighten rounded-2xl"
              width={600}
              height={600}
            />
          </div>
          <div className=" absolute glow-blur bottom-0 right-0 w-full opacity-100 h-full -z-10"></div>
        </div>
        <div className="p-7 rounded-3xl border-[#B5FE00] md:p-14 border flex flex-col">
          <div className="flex items-center gap-3 mb-3 text-neutral-400 text-sm">
            ✨ Magic features
          </div>
          <p className="text-2xl text-white/70">
            <span className="text-[#B5FE00] font-semibold">
            Unleash the power of AI-driven blockchain development.
            </span>{" "}
            From smart code generation to effortless deployment, everything you need is at your command.
          </p>
          <Accordion
            type="single"
            defaultValue="item-1"
            collapsible
            className="w-full mt-10"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <div className="flex items-center gap-3">
                  <div className="p-2 border rounded-xl">
                    <Image
                      src={"/images/download.svg"}
                      alt="Accordian"
                      width={16}
                      height={16}
                    />
                  </div>
                  SLM-Powered Code Optimization
                </div>
              </AccordionTrigger>
              <AccordionContent>
                Leverage 100+ Assisterr&apos;s Specialized Language Models
                trained on blockchain documentation to generate the most
                efficient and secure code.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                <div className="flex items-center gap-3">
                  <div className="p-2 border rounded-xl">
                    <Image
                      src={"/images/accordian2.svg"}
                      alt="Accordian"
                      width={16}
                      height={16}
                    />
                  </div>
                  Multi-Chain Compatibility
                </div>
              </AccordionTrigger>
              <AccordionContent>
                Deploy smart contracts across Solana, Ethereum, BSC, Avalanche,
                and more — no additional configurations needed.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                <div className="flex items-center gap-3">
                  <div className="p-2 border rounded-xl">
                    <Image
                      src={"/images/accordian3.svg"}
                      alt="Accordian"
                      width={16}
                      height={16}
                    />
                  </div>
                  One-Click Deployment
                </div>
              </AccordionTrigger>
              <AccordionContent>
                Instantly deploy your AI-generated dApps and smart contracts
                with a single click — no manual setup or complex configurations.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="p-7 rounded-3xl border border-[#B5FE00] md:p-14 relative bg-gradient-to-br from-[#B5FE00]/50 to-transparent overflow-hidden border-t">
          <TiltedCard
            imageSrc="/images/codeddd.png"
            altText="Dashboard"
            captionText="OMEGA AI"
            containerHeight="600px"
            containerWidth="600px"
            imageHeight="600px"
            imageWidth="600px"
            rotateAmplitude={20}
            scaleOnHover={1.05}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            overlayContent={<p className="tilted-card-demo-text"></p>}
          />
          {/* <div className=" absolute top-0 right-0 w-full h-full opacity-50 bg-gradient-to-l from-[#B5FE00] to-transparent"></div> */}
          {/* <div className=" absolute glow-blur bottom-0 right-0 w-full h-full -z-10"></div> */}
          {/* <Image
            src={"/images/grid3.avif"}
            alt="Grid1"
            className="mix-blend-lighten"
            width={600}
            height={600}
          /> */}
        </div>
      </div>
    </section>
  );
};

export default Grid;
