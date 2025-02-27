"use client";

import AyoshinahPulse from "@/components/AyoshinahPulse";
import { Ripple } from "@/components/magicui/ripple";
import * as Clerk from "@clerk/elements/common";
import * as SignIn from "@clerk/elements/sign-in";

export default function SignInPage() {
  return (
    <div className="relative flex min-h-[94vh] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background mt-3">
      <SignIn.Root>
        <SignIn.Step
          name="start"
          className="w-full space-y-6 rounded-2xl bg-white px-4 py-10 shadow-md ring-1 ring-black/5 sm:w-96 sm:px-8 z-50"
        >
          <header className="text-center flex flex-col items-center justify-center">
            <AyoshinahPulse size="small" />
            <h1 className="mt-2 text-xl font-medium tracking-tight text-zinc-950">
              Sign in to AyoshinAi
            </h1>
          </header>
          <Clerk.GlobalError className="block text-sm text-red-400" />
          <div className="space-y-4">
            <div className="space-y-2">
              <Clerk.Connection
                name="google"
                className="flex w-full items-center justify-center gap-x-3 rounded-md  bg-zinc-950 px-3.5 py-1.5 text-center text-sm font-normal text-white shadow outline-none ring-1 ring-inset ring-zinc-950 hover:bg-zinc-800 focus-visible:outline-[1.5px] focus-visible:outline-offset-2 focus-visible:outline-zinc-950 active:text-white/70 cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 16"
                  className="w-4"
                  aria-hidden
                >
                  <path
                    fill="currentColor"
                    d="M8.82 7.28v2.187h5.227c-.16 1.226-.57 2.124-1.192 2.755-.764.765-1.955 1.6-4.035 1.6-3.218 0-5.733-2.595-5.733-5.813 0-3.218 2.515-5.814 5.733-5.814 1.733 0 3.005.685 3.938 1.565l1.538-1.538C12.998.96 11.256 0 8.82 0 4.41 0 .705 3.591.705 8s3.706 8 8.115 8c2.382 0 4.178-.782 5.582-2.24 1.44-1.44 1.893-3.475 1.893-5.111 0-.507-.035-.978-.115-1.369H8.82Z"
                  />
                </svg>
                Login with Google
              </Clerk.Connection>
            </div>
            <Clerk.Field name="identifier" className="space-y-2">
              <Clerk.Label className="text-sm font-medium text-zinc-950">
                Username
              </Clerk.Label>
              <Clerk.Input
                type="text"
                required
                className="w-full rounded-md bg-white px-3.5 py-2 text-sm outline-none ring-1 ring-inset ring-zinc-300 hover:ring-zinc-400 focus:ring-[1.5px] focus:ring-zinc-950 data-[invalid]:ring-red-400"
              />
              <Clerk.FieldError className="block text-sm text-red-400" />
            </Clerk.Field>
            <Clerk.Field name="password" className="space-y-2">
              <Clerk.Label className="text-sm  font-medium text-zinc-950">
                Password
              </Clerk.Label>
              <Clerk.Input
                type="password"
                required
                className="w-full rounded-md bg-white px-3.5 py-2 text-sm outline-none ring-1 ring-inset ring-zinc-300 hover:ring-zinc-400 focus:ring-[1.5px] focus:ring-zinc-950 data-[invalid]:ring-red-400"
              />
              <Clerk.FieldError className="block text-sm text-red-400" />
            </Clerk.Field>
          </div>
          <SignIn.Action
            submit
            className="w-full bg-zinc-950 px-3.5 py-3 text-center text-sm font-medium text-white shadow outline-none ring-1 ring-inset ring-zinc-950 hover:bg-zinc-800 focus-visible:outline-[1.5px] focus-visible:outline-offset-2 focus-visible:outline-zinc-950 active:text-white/70 cursor-pointer rounded-xl"
          >
            Sign In
          </SignIn.Action>
        </SignIn.Step>
      </SignIn.Root>

      <Ripple />
    </div>
  );
}
