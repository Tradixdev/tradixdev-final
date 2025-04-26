"use client";

import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

interface CreateConversationDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function CreateConversationDialog({
  open,
  onOpenChange,
}: CreateConversationDialogProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { toast } = useToast();

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkMobile();

    // Add resize listener
    window.addEventListener("resize", checkMobile);

    // Cleanup
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const buttonVariants = {
    rest: { scale: 1 },
    hover: {
      scale: 1.02, // Reduced scale for subtler effect
      boxShadow: "0 0 25px rgba(212, 175, 55, 0.3)",
      transition: {
        type: "spring",
        stiffness: 30, // Reduced stiffness for smoother animation
        damping: 8,
        duration: 0.3, // Added duration for more controlled animation
      },
    },
  };

  const drawerVariants = {
    closed: {
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 300, // Reduced stiffness
        damping: 35, // Increased damping
        duration: 0.5, // Added duration
        ease: "easeInOut", // Changed easing
      },
    },
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 35,
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  // Overlay animation variants
  const overlayVariants = {
    closed: {
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    open: {
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 5000));

    toast({
      title: "Application Submitted!",
      description:
        "Thank you for applying for early access. We'll be in touch soon.",
      duration: 5000,
      className: cn(
        "bottom-0 w-fit h-fit right-0 flex fixed md:top-4 md:right-4",
        isMobile && "bottom-4 top-auto "
      ),
    });

    setIsLoading(false);
    setIsOpen(false);
    setUsername("");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[340px] md:max-w-fit w-full h-[480px] md:h-fit overflow-y-auto bg-black rounded-3xl glow text-white">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-3xl font-syne font-bold">
              Join The Elite
            </DialogTitle>
          </div>
        </DialogHeader>
        <div className="h-full flex flex-col justify-center">
          <div>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-md font-medium text-[#b6fe00] mb-2">
                  Email
                </label>
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  // placeholder="@username"
                  disabled={isLoading}
                  required
                  className={cn(
                    "w-full px-4 py-3 bg-black/50 border border-[#b6fe00] rounded-lg focus:ring-2 focus:ring-[#b6fe00] focus:border-transparent text-white placeholder-gray-500 backdrop-blur-sm transition-all duration-300", // Added transition
                    isLoading && "opacity-50 cursor-not-allowed"
                  )}
                />
              </div>
              <div>
                <label className="block text-md font-medium text-[#b6fe00] mb-2">
                  Telegram Username
                </label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  // placeholder="@username"
                  disabled={isLoading}
                  required
                  className={cn(
                    "w-full px-4 py-3 bg-black/50 border border-[#b6fe00] rounded-lg focus:ring-2 focus:ring-[#b6fe00] focus:border-transparent text-white placeholder-gray-500 backdrop-blur-sm transition-all duration-300", // Added transition
                    isLoading && "opacity-50 cursor-not-allowed"
                  )}
                />
                <p className="mt-2 text-sm text-[#b6fe00]">
                  Make sure to provide correct username
                </p>
              </div>
              <div>
                <label className="block text-md font-medium text-[#b6fe00] mb-2">
                Your Solana wallet address
                </label>
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  // placeholder="@username"
                  disabled={isLoading}
                  required
                  className={cn(
                    "w-full px-4 py-3 bg-black/50 border border-[#b6fe00] rounded-lg focus:ring-2 focus:ring-[#b6fe00] focus:border-transparent text-white placeholder-gray-500 backdrop-blur-sm transition-all duration-300", // Added transition
                    isLoading && "opacity-50 cursor-not-allowed"
                  )}
                />
              </div>

              <motion.button
                whileHover={
                  !isLoading
                    ? {
                        scale: 1.02,
                        boxShadow: "0 0 25px rgba(212, 175, 55, 0.3)",
                        transition: {
                          duration: 0.3,
                          ease: "easeInOut",
                        },
                      }
                    : {}
                }
                whileTap={
                  !isLoading
                    ? {
                        scale: 0.98,
                        transition: {
                          duration: 0.2,
                        },
                      }
                    : {}
                }
                type="submit"
                disabled={isLoading}
                className={cn(
                  "w-full bg-gradient-to-r from-[#b6fe00] to-[#b6fe00]/40 text-black px-6 py-3 rounded-full font-discuss-lessons font-semibold",
                  "flex items-center justify-center transition-all duration-300", // Added transition
                  isLoading && "opacity-50 cursor-not-allowed"
                )}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Processing...
                  </>
                ) : (
                  "Submit Application"
                )}
              </motion.button>
            </form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default CreateConversationDialog;
