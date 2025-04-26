"use client";

import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { Clock, Loader2, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import SpotlightCard from "@/lib/SpotlightCard/SpotlightCard";
import { AnimatePresence, motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import CreateConversationDialog from "@/components/global/create-agent";

const StickyGrid = () => {
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);
  return (
    <section className="min-h-screen mt-10 px-5 md:px-5 lg:px-60 relative mx-auto">
      <div className="bg-circle-blur absolute -left-[450px] top-1/2 -translate-y-1/2 -z-10"></div>

      {/* Main grid container */}
      <div className="relative grid gap-10 grid-cols-1 md:grid-cols-3">
        {/* Sticky card - first column */}
        <div className="h-full md:row-span-1 p-0 md:p-0">
          <div className="border border-[#B5FE00] bg-gradient-to-br from-[#B5FE00] to-transparent h-full p-7 md:p-14 rounded-3xl">
            <div className="flex items-center gap-3 mb-3 text-neutral-700 text-sm">
              <Clock size={16} /> Early access
            </div>
            <p className="text-2xl text-black/70 mb-5">
              <span className="text-black font-syne font-bold">
                Join waitlist for early access.
              </span>
            </p>
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              onClick={() => setIsCreateDialogOpen(true)}
              className="dark:bg-black bg-white text-black text-sm dark:text-white flex items-center space-x-2"
            >
              <span>Join Waitlist</span>
            </HoverBorderGradient>
          </div>
        </div>

        {/* Second column - first card */}
        <div className=" rounded-3xl">
          <SpotlightCard
            className="p-7 md:p-14 rounded-3xl border card-spotlight h-full"
            spotlightColor="rgba(181, 254, 0, 0.5)"
          >
            <div className="flex items-center gap-3 mb-3 text-neutral-400 text-sm">
              Specialized language models
            </div>
            <p className="text-2xl text-white/70">
              <span className="text-[#B5FE00]">
                Supercharge your blockchain development
              </span>{" "}
              with AI-powered language models. Get instant smart contract
              suggestions, enhance security, and deploy with confidence.
            </p>
          </SpotlightCard>
        </div>

        {/* Large card spanning two columns */}
        <div className="p-7 md:p-14 relative overflow-hidden rounded-3xl border md:row-span-2">
          <div className="flex flex-col md:flex-row items-center gap-3 mb-14 justify-center">
            <h3 className="text-xl">Based on</h3>
            <div className="">
              <Image
                src={"/images/img1.avif"}
                alt="Image1"
                width={200}
                height={200}
                className="object-cover"
              />
            </div>
          </div>
          <div className="flex items-center gap-3 mb-3 text-neutral-700 text-sm">
            Endless possibilities.
          </div>
          <p className="text-2xl text-white/70 mb-5">
            <span className="text-[#B5FE00]">
              Deploy your idea on the blockchain in minutes
            </span>{" "}
            — this is only the start.
          </p>
          <div className="w-full md:absolute mx-auto">
            <Image
              src={"/images/devial_screen_1.png"}
              alt="Grid1"
              className="rounded-3xl w-full h-full"
              width={400}
              height={400}
            />
          </div>
          <div className="absolute -top-5 -left-10 w-80 h-80 rounded-full opacity-50 -z-20 bg-[#B5FE00]" />
          <div className="absolute glow-blur-token bottom-0 right-0 w-full h-full -z-10" />
        </div>
        {/* Second column - second card */}
        <div className=" md:col-span-2">
          <SpotlightCard
            className="p-7 md:p-14 rounded-3xl border card-spotlight h-full"
            spotlightColor="rgba(181, 254, 0, 0.5)"
          >
            <div className="flex items-center gap-3 mb-3 text-neutral-400 text-sm">
              On-Chain AI Computing
            </div>
            <p className="text-2xl text-white/70">
              <span className="text-[#B5FE00]">
                Run and scale AI models with blockchain-powered GPU computing.
              </span>{" "}
              No central servers, no slowdowns—just seamless, high-performance
              AI for your projects.
            </p>
          </SpotlightCard>
        </div>
      </div>
      <CreateConversationDialog
        open={isCreateDialogOpen}
        onOpenChange={setIsCreateDialogOpen}
      />
    </section>
  );
};

export default StickyGrid;
