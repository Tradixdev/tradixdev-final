import React, { useState } from "react";
import Image from "next/image";
import {
  CandlestickChart,
  DollarSign,
  LucideIcon,
  Percent,
  Rocket,
  TrendingUp,
  Verified,
} from "lucide-react";
import { motion } from "framer-motion";

interface ModuleCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

const ModuleCard: React.FC<ModuleCardProps> = ({
  icon: Icon,
  title,
  description,
  index,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="w-full relative overflow-hidden hover:border-[#B5FE00] transition-all duration-500 h-full p-7 md:p-14 border rounded-3xl flex flex-col gap-3"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="bg-[#B5FE00] border w-fit p-3 rounded-full text-black">
        <Icon
          className=""
          size={20}
          {...(title === "Future MT Airdrop" ? { fill: "black" } : {})}
        />
      </div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p
        className={
          title === "Future MT Airdrop"
            ? "text-neutral-200"
            : "text-neutral-400"
        }
      >
        {description}
      </p>

      <motion.div
        className="absolute -bottom-5 -right-10 w-60 h-60 rounded-full opacity-50 -z-20 bg-[#B5FE00]"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={
          isHovered ? { scale: 1.2, opacity: 0.6 } : { scale: 0.8, opacity: 0 }
        }
        transition={{ duration: 0.5 }}
      />
      <div className="absolute glow-blur-token bottom-0 right-0 w-full h-full -z-10" />
    </motion.div>
  );
};

const Token = () => {
  const modules = [
    {
      icon: Rocket,
      title: "Future MT Airdrop",
      description:
        "Eligible token holders will receive Management Tokens (MT) upon full monetization of the AI Agent via Assisterr, unlocking governance privileges and exclusive benefits.",
    },
    {
      icon: DollarSign,
      title: "Native Service Fees",
      description:
        "Devix Tech tokens power contract deployments, AI-driven audits, and premium features—fueling the ecosystem and ensuring seamless platform operations.",
    },
    {
      icon: Percent,
      title: "Governance & Voting",
      description:
        "Token holders can propose and vote on platform upgrades, feature rollouts, and roadmap decisions, directly shaping Devix's future.",
    },
    {
      icon: TrendingUp,
      title: "Staking & Rewards",
      description:
        "Staking Devix tokens lets participants earn passive rewards, enjoy reduced fees, and gain priority access to advanced AI features.",
    },
    {
      icon: Verified,
      title: "Premium Model Access",
      description:
        "Higher-tier token balances unlock exclusive AI features, real-time optimization tools, and advanced blockchain integrations, delivering a competitive edge.",
    },
    {
      icon: CandlestickChart,
      title: "Ecosystem Incentives",
      description:
        "Token ownership unlocks partner discounts, cross-platform collaborations, and referral perks, enhancing the Devix blockchain community.",
    },
  ];

  return (
    <section className="mt-10 px-5 md:px-5 lg:px-60 mx-auto relative">
      <div className="w-full text-center py-7">
        <h3 className="font-syne font-bold text-5xl">Token Utility</h3>
      </div>
      <div className="w-full gap-5 grid grid-cols-1 md:grid-cols-3">
        {modules.map((module, index) => (
          <ModuleCard
            key={index}
            icon={module.icon}
            title={module.title}
            description={module.description}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default Token;
