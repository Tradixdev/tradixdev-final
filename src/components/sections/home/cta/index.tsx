import CreateConversationDialog from "@/components/global/create-agent";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import React, { useState } from "react";

const CTA = () => {
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  return (
    <section className="my-10 px-5 md:px-5 lg:px-60 mx-auto relative">
      <div className="border rounded-3xl p-7 md:p-14 ">
        <p className="text-3xl font-syne  text-white/70 max-w-2xl mb-10">
          <span className="text-[#B5FE00] font-bold">
            Seize the chance to be among the first to experience Devial&apos;s
            breakthroughs
          </span>{" "}
          — reach out to us today.
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
      <CreateConversationDialog
        open={isCreateDialogOpen}
        onOpenChange={setIsCreateDialogOpen}
      />
    </section>
  );
};

export default CTA;
