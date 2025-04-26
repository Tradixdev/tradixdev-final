import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
interface FAQSProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const FAQ = ({ open, onOpenChange }: FAQSProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[340px] md:max-w-[570px] w-full h-[550px] md:h-[480px] overflow-y-auto bg-black rounded-3xl glow text-white">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="font-syne text-left text-3xl font-bold">
              Frequently Asked Questions.
            </DialogTitle>
          </div>
          <p className="text-sm text-zinc-400">
            Everything you need to know about Devix.
          </p>
        </DialogHeader>
        <Accordion
          type="single"
          defaultValue="item-1"
          collapsible
          className="w-full mt-10"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <div className="flex items-center gap-3">
                Which blockchains does Devix support?
              </div>
            </AccordionTrigger>
            <AccordionContent>
              Devix currently supports major networks like Ethereum, Solana, BSC
              and Polygon, with plans to expand to other popular blockchains.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              <div className="flex items-center gap-3">
                Can Devix integrate with existing development tools?
              </div>
            </AccordionTrigger>
            <AccordionContent>
              Devix offers plugins and API endpoints that work seamlessly with
              popular dev stacks such as Hardhat, Truffle, and Foundry. This
              allows you to incorporate AI-driven contract generation without
              disrupting your existing workflow.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              <div className="flex items-center gap-3">
                How do I get started with Devix?
              </div>
            </AccordionTrigger>
            <AccordionContent>
              For now the waitlist for early access is open, feel free to
              subscribe.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>
              <div className="flex items-center gap-3">
                Where do I go for support or community discussions?
              </div>
            </AccordionTrigger>
            <AccordionContent>
              Devix has a dedicated help center, an official Discord channel,
              and regular AMAs on Twitter (X). You can also reach out via email
              for technical assistance and account-related questions.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </DialogContent>
    </Dialog>
  );
};

export default FAQ;
