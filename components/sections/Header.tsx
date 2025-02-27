"use client";

import Link from "next/link";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

import { Button } from "../ui/button";

import AyoshinahPulse from "../AyoshinahPulse";

const Header = () => {
  return (
    <header className=" top-0 left-0 right-0 px-4 md:px-0 bg-white/80 backdrop-blur-sm border-b border-gray-200 z-50 rounded-xl font-poppins shadow">
      <div className="px-7">
        <div className="flex items-center justify-between gap-4">
          {/* Left side */}
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center gap-1">
              <AyoshinahPulse size="small" color="black" />
              <h1 className="text-xl font-semibold bg-gradient-to-r from-gray-900 to-gray-500 bg-clip-text text-transparent capitalize font-poppins">
                AyoshinAi
              </h1>
            </Link>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-4">
            <SignedIn>
              <Link href="/manage-plan">
                <Button
                  variant={"outline"}
                  size={"lg"}
                  className="mr-4 cursor-pointer"
                >
                  Manage Plan
                </Button>
              </Link>

              <div className="p-2 w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 transition-colors cursor-pointer">
                <UserButton />
              </div>
            </SignedIn>

            <SignedOut>
              <SignInButton mode="redirect">
                <Button
                  variant={"default"}
                  size={"lg"}
                  // className="bg-gradient-to-r from-gray-600 to-gray-400 text-transparent bg-clip-text"
                  className="rounded-xl cursor-pointer font-poppins h-12"
                >
                  Sign in
                </Button>
              </SignInButton>
            </SignedOut>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
