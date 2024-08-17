import {
  Box, Flex,
} from "@radix-ui/themes";
import Link from "next/link";
import Image from "next/image";
import logo from "/public/logo.png";

export default function Footer() {
  return (
    <footer className="w-screentext-[#fff] py-5">
      <Flex justify="center">Copyright © 2024</Flex>
    </footer>
  );
}
