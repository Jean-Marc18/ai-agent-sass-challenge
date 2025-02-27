"use client";

import { ArrowRight } from "lucide-react";

import { BackgroundLines } from "../BackgroundLines";
import Search from "../Search";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-white/80 rounded-xl overflow-hidden shadow">
      <BackgroundLines>
        <div className="flex items-center pt-52 w-full flex-col px-7 h-full gap-5 ">
          <div className="bg-neutral-400/15 text-white p-1 rounded-lg backdrop-blur-sm">
            <div className="flex items-center justify-between gap-2 text-neutral-200">
              <span className="pl-1 max-sm:text-sm">
                Discover the all new AI Sass agent
              </span>
              <div className=" bg-neutral-400/15 text-white p-1 rounded-sm backdrop-blur-sm">
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>
          </div>

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

          {/* Input search */}
          <div className="mt-12 z-50">
            <Search />
          </div>
        </div>
      </BackgroundLines>
    </section>
  );
};

export default Hero;
