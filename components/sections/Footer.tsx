import React from "react";
import { BackgroundLines } from "../BackgroundLines";
import { SignInButton, SignedOut } from "@clerk/nextjs";
import { Button } from "../ui/button";
import Link from "next/link";
import AyoshinahPulse from "../AyoshinahPulse";
import { Facebook, Instagram } from "lucide-react";
import { CountryCombobox } from "../ui/combobox";

const Footer = () => {
  return (
    <section className="relative min-h-[100%] bg-white/80 rounded-xl overflow-hidden shadow">
      <BackgroundLines className="h-[100%] px-7">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center gap-1">
              <AyoshinahPulse size="small" color="blue" />
              <h1 className="text-xl font-semibold bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent capitalize font-poppins">
                AyoshinAi
              </h1>
            </Link>
          </div>

          <div className="flex justify-center-center gap-4 text-neutral-500 z-50">
            <Link
              href=""
              className="border border-neutral-700 p-2 rounded-lg cursor-pointer"
            >
              <Instagram className="h-5 w-5" />
            </Link>
            <Link
              href=""
              className="border border-neutral-700 p-2 rounded-lg cursor-pointer"
            >
              <Facebook className="h-5 w-5" />
            </Link>
          </div>
        </div>

        <div className="flex items-center justify-center w-full flex-col h-full gap-5 py-24">
          <h2 className="text-2xl text-neutral-200 md:text-4xl lg:text-7xl relative z-20 font-bold tracking-tight font-roboto pb-2 capitalize text-center">
            Meet your personal <br />{" "}
            <span className="text-transparent sm:text-center text-start font-bold sm:text-7xl text-4xl bg-clip-text bg-gradient-to-b from-white via-neutral-200 to-blue-500/[0.6]">
              AI Sass agent
            </span>
          </h2>

          <p className=" bg-clip-text text-transparent text-center bg-gradient-to-r from-white to-white/50 max-w-xl mx-auto text-sm md:text-lg  ">
            Transform your video content with AI-powered analysis,
            transcription, and insights, Get started in seconds.
          </p>

          <div className="flex justify-center gap-4">
            <SignedOut>
              <SignInButton mode="redirect">
                <Button
                  variant={"secondary"}
                  size={"lg"}
                  // className="bg-gradient-to-r from-gray-600 to-gray-400 text-transparent bg-clip-text"
                  className="rounded-xl cursor-pointer font-poppins h-12"
                >
                  Sign in
                </Button>
              </SignInButton>
            </SignedOut>

            <Link
              href="#about"
              className="h-12 p-3 text-sm text-center flex items-center justify-center rounded-xl bg-white/20 border-white/20 backdrop-blur-sm text-white !!border-none cursor-pointer font-poppins"
            >
              How it Works
            </Link>
          </div>
        </div>

        <div className="flex items-center justify-between gap-4 border-t border-neutral-800 py-5 z-50">
          <CountryCombobox />

          <p className="text-neutral-400 font-poppins text-sm">
            &copy; AyoshinAi 2025. All Rights Reserved
          </p>
        </div>
      </BackgroundLines>
    </section>
  );
};

export default Footer;
