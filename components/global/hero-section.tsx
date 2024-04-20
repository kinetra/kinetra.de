import React from "react";

import Link from "next/link";
import { MovingBorderBtn } from "@/components/ui/moving-border";
import { SiReactrouter } from "react-icons/si";
import Title from "@/components/shared/title";

function HeroSection() {
  return (
    <div className="min-h-[60vh] flex flex-col-reverse gap-14 lg:gap-0 lg:flex-row items-center justify-between ">
      <div className="space-y-10 text-center lg:text-left">
        <h1 className="text-4xl w-[75%] mx-auto lg:mx-0 lg:text-7xl font-bold">
          <span className="underline underline-offset-8 decoration-purple-500">
            Lightning-fast
          </span>{" "}
          serialization.
        </h1>

        <p className="md:w-96 md:mx-auto lg:mx-0 text-lg text-gray-300">
          Benc V2, an upgraded version of V1, is efficient, blazingly fast and
          compatible with data structure changes. Scale better, love the
          experience.
        </p>

        <Link
          href="https://github.com/bencv2/go-runtime"
          className="inline-block"
        >
          <Title text="Get Started" />
        </Link>
      </div>

      <div className="relative mb-14 lg:mb-0">
        <div className="w-72 h-72 space-y-3 -rotate-[30deg] relative">
          <div className="flex gap-3 translate-x-8">
            <div className="w-32 h-32 rounded-2xl bg-purple-400" />
            <div className="w-32 h-32 rounded-full bg-indigo-400" />
          </div>
          <div className="flex gap-3 -translate-x-8">
            <div className="w-32 h-32 rounded-2xl bg-indigo-400" />
            <div className="w-32 h-32 rounded-full bg-purple-400" />
          </div>
          <div className="glow absolute top-[40%] right-1/2 -z-[9999]" />
        </div>

        <Link
          href="https://github.com/bencv2/go-runtime"
          className="absolute bottom-5 sm:bottom-14 left-0 sm:left-10"
        >
          <MovingBorderBtn
            borderRadius="0.5rem"
            className="p-3 gap-x-2 font-semibold"
          >
            <SiReactrouter className="h-5 w-5" />

            <p>
              Benc V2 is{" "}
              <span className="underline underline-offset-2 decoration-purple-300">
                OUT
              </span>
            </p>
          </MovingBorderBtn>
        </Link>
      </div>
    </div>
  );
}

export default HeroSection;
