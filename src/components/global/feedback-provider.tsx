import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Loader2, X } from "lucide-react";
import { GlowyLoadingBar } from "./magicui/loading";

interface FeedbackDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const FeedbackDialog: React.FC<FeedbackDialogProps> = ({
  open,
  onOpenChange,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setProgress(0);

    // Simulate progress increase
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 70) {
          clearInterval(progressInterval);
          return prev;
        }
        return prev + 1;
      });
    }, 100);

    // Simulate success after 10 seconds
    setTimeout(() => {
      clearInterval(progressInterval);
      setIsLoading(false);
      setProgress(0);

      toast({
        title: "Success!",
        description: "Thank you for your feedback. We'll get back to you soon!",
        className: "bg-green-500 text-white border-none",
        duration: 5000,
      });

      onOpenChange(false);
    }, 10000);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-background glow border-[#B5FE00] text-white">
        <DialogHeader className="space-y-3">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-3xl font-bold font-syne">
              Get in Touch
            </DialogTitle>
          </div>
          <p className="text-sm text-gray-400 font-normal">
            Send us your thoughts, ideas, feedback — we would love to hear from
            you!
          </p>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex items-center gap-4">
            <Input
              placeholder="First Name"
              className="bg-transparent border-gray-800 focus-visible:ring-gray-400"
              disabled={isLoading}
            />
            <Input
              placeholder="Last Name"
              className="bg-transparent border-gray-800 focus-visible:ring-gray-400"
              disabled={isLoading}
            />
          </div>
          <Textarea
            placeholder="Feedback"
            className="bg-transparent border-gray-800 focus-visible:ring-gray-400 min-h-[100px]"
            disabled={isLoading}
          />
          <Input
            type="email"
            placeholder="Email"
            className="bg-transparent border-gray-800 focus-visible:ring-gray-400"
            disabled={isLoading}
          />

          <Button
            type="submit"
            className="w-full bg-[#B5FE00] text-black hover:bg-gray-200 transition-colors disabled:opacity-50"
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="flex items-center gap-2">
                <Loader2 className="h-4 w-4 animate-spin" />
                Sending Feedback...
              </div>
            ) : (
              "Send Feedback"
            )}
          </Button>

          {isLoading && (
            <div className="mt-4">
              <GlowyLoadingBar progress={progress} />
            </div>
          )}
        </form>

        <p className="text-sm text-gray-400 text-center">
          If you prefer, email us directly:{" "}
          <a
            href="mailto:hello@aiagent.app"
            className="text-white hover:underline"
          >
            hello@aiagent.app
          </a>
        </p>
      </DialogContent>
    </Dialog>
  );
};

export default FeedbackDialog;
