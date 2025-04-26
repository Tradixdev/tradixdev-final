'use client'

import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { AnimatedLink } from "../navbar";
import FAQ from "../faq";
import FeedbackDialog from "../feedback-provider";
import CreateConversationDialog from "../create-agent";

const Footer = () => {
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);
  const [isFaqOpen, setIsFaqOpen] = useState(false);
  return (
    <footer className="border-t">
      <div className="grid p-7 md:p-14 container mx-auto gap-5 md:gap-0 grid-cols-1 md:grid-cols-5">
        <div className="md:col-span-4">
          <h3 className="font-bold text-3xl font-syne mb-3">Devial Tech</h3>
          <p className="mb-10 max-w-80">
            AI-powered code generation and deployment © 2025 Devial
          </p>
          <div className="flex items-center gap-5">
            <Link href={"https://x.com/AI_Devial"}>
              <Image
                src={"/images/twitter.svg"}
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
            <Link href={"https://dexscreener.com/solana/QDbj3rHgq31tsE4CQviSULQR7tJYQbCFfppZYPdpump "}>
              <Image
                src={"/images/unnamed.png"}
                alt="Twitter"
                width={28}
                height={28}
              />
            </Link>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-start md:items-end gap-3 text-sm">
            <h2 className="text-white">Product</h2>
            {/* <AnimatedLink
              // href={"/about-us"}
              onClick={() => {}}
              className="transition-all duration-800 text-neutral-400 hover:text-white"
            >
              Changelog
            </AnimatedLink> */}
            <AnimatedLink
              onClick={() => setIsFaqOpen(true)}
              className="transition-all duration-800 text-neutral-400 hover:text-white"
            >
              FAQ
            </AnimatedLink>
            <AnimatedLink
              onClick={() => setIsFeedbackOpen(true)}
              className="transition-all duration-800 text-neutral-400 hover:text-white"
            >
              Contact
            </AnimatedLink>
            <AnimatedLink
              onClick={() => setIsCreateDialogOpen(true)}
              className="transition-all duration-800 text-neutral-400 hover:text-white"
            >
              Coming Soon
            </AnimatedLink>
          </div>
        </div>
      </div>
      <CreateConversationDialog
        open={isCreateDialogOpen}
        onOpenChange={setIsCreateDialogOpen}
      />
      <FAQ open={isFaqOpen} onOpenChange={setIsFaqOpen} />
      <FeedbackDialog open={isFeedbackOpen} onOpenChange={setIsFeedbackOpen} />
    </footer>
  );
};

export default Footer;
