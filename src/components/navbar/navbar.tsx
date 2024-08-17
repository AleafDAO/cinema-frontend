"use client";

import React from "react";

import { useScroll } from "ahooks";

import { cn } from "@/lib/utils";

import { ConnectButton } from "@rainbow-me/rainbowkit";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { Icon } from "@iconify/react";
import AvatarDiv from "../avatar";
import TooltipProvider from "../tooltip";
import logo from "/public/logo.png";

export const Navbar = () => {
  const scroll = useScroll(() => document);
  const router = useRouter();
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
        <Icon
          icon="icon-park-solid:avatar"
          className="cursor-pointer ml-5"
          width="30"
          height="30"
          onClick={() => {
            router.push("/personal");
          }}
        />
      </div>
    </header>
  );
};
