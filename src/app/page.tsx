"use client";

import HallSection from "@/components/hall-section";
import { useAccount } from "wagmi";

export default function Page() {
  const account = useAccount();

  return (
    account?.isConnected && account?.chain?.name === "Sepolia" ? <HallSection /> : <div className="text-center mt-20 margin-auto text-4xl font-bold">Please connect wallet</div>
  );
}
