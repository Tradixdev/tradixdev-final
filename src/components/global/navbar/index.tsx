"use client";

import { Button } from "@/components/ui/button";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { Loader2, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import CreateConversationDialog from "../create-agent";
import FAQ from "../faq";
import FeedbackDialog from "../feedback-provider";

export const AnimatedLink = ({
  onClick,
  children,
  className,
}: {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <button
      onClick={onClick}
      className={`relative inline-block overflow-hidden ${className}`}
    >
      <motion.div
        // initial={{ y: 0 }}
        // whileHover={{ y: "-100%" }}
        // transition={{ duration: 0.4, ease: "circInOut" }}
        className="flex flex-col h-fit"
      >
        <span className="">{children}</span>
        {/* <span className="overflow-hidden ">
          <motion.span
            initial={{ y: "100%" }}
            whileHover={{ y: "100%" }}
            transition={{ duration: 0.4, ease: "circInOut" }}
            className="absolute bottom-0 w-full"
          >
            {children}
          </motion.span>
        </span> */}
      </motion.div>
    </button>
  );
};

const Navbar = () => {
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);
  const [isFaqOpen, setIsFaqOpen] = useState(false);
  return (
    <section>
      <nav className="fixed top-1 md:top-5 left-1/2 -translate-x-1/2 rounded-full backdrop-blur-2xl w-full z-[9999] max-w-7xl mx-auto bg-black/50">
        <div className="max-w-7xl p-3 md:p-3 md:px-4 h-full mx-auto ">
          <div className="flex gap-7 justify-between items-center">
            <Link href={"/"} className="">
              {/* <h3 className="font-bold">Omega</h3> */}
              <Image
                src={"/images/logodev.png"}
                alt="Logo"
                width={65}
                height={65}
                className="size-10 rounded-full"
              />
            </Link>
            <div className="hidden md:flex items-center justify-between w-full">
              <div className="flex items-center gap-5">
                {/* <AnimatedLink
                  // onClick={()=>{}}
                  className="transition-all duration-800 text-white hover:text-white"
                >
                  Changelog
                </AnimatedLink> */}
                <AnimatedLink
                  onClick={() => setIsFaqOpen(true)}
                  className="transition-all duration-800 text-white hover:text-white"
                >
                  FAQ
                </AnimatedLink>
                <AnimatedLink
                  // href={"/about-us"}
                  onClick={() => setIsFeedbackOpen(true)}
                  className="transition-all duration-800 text-white hover:text-white"
                >
                  Contact
                </AnimatedLink>
              </div>
              <div className="flex items-center gap-5">
                <Link href={"https://x.com/AI_Devial"}>
                  <Image
                    src={"/images/twitter.svg"}
                    alt="Twitter"
                    width={24}
                    height={24}
                  />
                </Link>
                <Link href={"https://x.com/AI_Devial"}>
                  <Image
                    src={"/images/devx.png"}
                    alt="Twitter"
                    width={28}
                    height={28}
                  />
                </Link>
                <Link href={"https://t.me/devialai"}>
                  <Image
                    src={"/images/telegram.png"}
                    alt="Twitter"
                    width={24}
                    height={24}
                  />
                </Link>
                <Link
                  href={
                    "https://dexscreener.com/solana/QDbj3rHgq31tsE4CQviSULQR7tJYQbCFfppZYPdpump"
                  }
                >
                  <Image
                    src={"/images/unnamed.png"}
                    alt="Twitter"
                    width={28}
                    height={28}
                  />
                </Link>
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
            <div className="block md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button className="py-4 bg-[#B5FE00] hover:bg-[#B5FE00] h-fit rounded-full">
                    <Menu size={24} />
                  </Button>
                </SheetTrigger>
                <SheetContent className="h-fit w-full backdrop-blur-2xl bg-gradient-to-br from-[#B5FE00]/50 to-black top-28 rounded-3xl">
                  <div className="flex flex-col gap-5">
                    {/* <AnimatedLink
                      onClick={() => {}}
                      className="transition-all duration-800 text-white hover:text-white"
                    >
                      Changelog
                    </AnimatedLink> */}
                    <AnimatedLink
                      onClick={() => setIsFaqOpen(true)}
                      className="transition-all duration-800 text-white hover:text-white"
                    >
                      FAQ
                    </AnimatedLink>
                    <AnimatedLink
                      onClick={() => setIsFeedbackOpen(true)}
                      className="transition-all duration-800 text-white hover:text-white"
                    >
                      Contact
                    </AnimatedLink>
                  </div>
                  <SheetFooter>
                    <div className="flex items-center justify-between mt-10 gap-5">
                      <div className="flex items-center gap-5">
                        <Link href={"https://x.com/AI_Devial"}>
                          <Image
                            src={"/images/twitter.svg"}
                            alt="Twitter"
                            width={24}
                            height={24}
                          />
                        </Link>
                        <Link href={"https://x.com/AI_Devial"}>
                          <Image
                            src={"/images/devx.png"}
                            alt="Twitter"
                            width={24}
                            height={24}
                          />
                        </Link>
                        <Link href={"https://t.me/devialai"}>
                          <Image
                            src={"/images/telegram.png"}
                            alt="Twitter"
                            width={24}
                            height={24}
                          />
                        </Link>
                        <Link
                          href={
                            "https://dexscreener.com/solana/QDbj3rHgq31tsE4CQviSULQR7tJYQbCFfppZYPdpump"
                          }
                        >
                          <Image
                            src={"/images/unnamed.png"}
                            alt="Twitter"
                            width={28}
                            height={28}
                          />
                        </Link>
                      </div>
                      <HoverBorderGradient
                        containerClassName="rounded-full"
                        as="button"
                        onClick={() => setIsCreateDialogOpen(true)}
                        className="dark:bg-black bg-white text-black text-sm dark:text-white flex items-center space-x-2"
                      >
                        <span>Join Waitlist</span>
                      </HoverBorderGradient>
                    </div>
                  </SheetFooter>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>
      <CreateConversationDialog
        open={isCreateDialogOpen}
        onOpenChange={setIsCreateDialogOpen}
      />
      <FAQ open={isFaqOpen} onOpenChange={setIsFaqOpen} />
      <FeedbackDialog open={isFeedbackOpen} onOpenChange={setIsFeedbackOpen} />
    </section>
  );
};

export default Navbar;
