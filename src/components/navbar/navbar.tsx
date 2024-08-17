"use client";

import React from "react";

import { useScroll } from "ahooks";

import { cn } from "@/lib/utils";

import { ConnectButton } from "@rainbow-me/rainbowkit";

import { useRouter } from "next/navigation";
import { Icon } from "@iconify/react";
import { useAccount } from "wagmi";

export const Navbar = () => {
  const scroll = useScroll(() => document);
  const router = useRouter();
  const account = useAccount();
  const isShowAvatar = account?.isConnected && account?.chain?.name === "Sepolia";
  return (
    <header
      className={cn(
        " hover:shadow-lg w-full sticky top-0 backdrop-blur transition-[background-color,border-width]  flex justify-center z-10",
        (scroll?.top ?? 0) > 60
          && "bg-background/50 hover:shadow-lg",
      )}
    >
      <div className="w-full flex justify-center items-center h-16  md:max-w-screen-lg 2xl:max-w-screen-xl">
        <ConnectButton />
        {
          isShowAvatar && (
          <Icon
            icon="icon-park-solid:avatar"
            className="cursor-pointer ml-5"
            width="30"
            height="30"
            onClick={() => {
              router.push("/personal");
            }}
          />
          )
        }

      </div>
    </header>
  );
};
