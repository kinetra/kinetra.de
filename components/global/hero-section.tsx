import React from "react";

import Link from "next/link";
import { SiCheckmarx } from "react-icons/si";

function HeroSection() {
  return (
    <div className="min-h-[60vh] flex flex-col-reverse gap-14 lg:gap-0 lg:flex-row items-center justify-between ">
      <div className="space-y-10 text-center lg:text-left">
        <h1 className="text-4xl w-[75%] mx-auto lg:mx-0 lg:text-7xl font-bold">
          Bencv2.
        </h1>

        <p className="md:w-96 md:mx-auto lg:mx-0 text-lg text-gray-300">
          Introducing a lightning-fast, free and open-source serializer for Go.
        </p>

        <div className="md:w-96 md:mx-auto lg:mx-0 text-lg text-gray-100">
          <p className="flex justify-center lg:justify-start items-center gap-x-2">
            <SiCheckmarx className="text-blue-400" />
            Efficient: Zero Memory Allocations
          </p>

          <p className="flex justify-center lg:justify-start items-center gap-x-2">
            <SiCheckmarx className="text-purple-400" />
            Lightning-Fast:{" "}
            <a
              className="underline underline-offset-4 hover:text-blue-200 decoration-blue-400"
              href="https://github.com/bencv2/go-benchmarks"
            >
              Convince yourself
            </a>
          </p>

          <p className="flex justify-center lg:justify-start items-center gap-x-2">
            <SiCheckmarx className="text-blue-400" />
            Dont let broken compatibility stop you
          </p>
        </div>

        <Link href="https://kinetra.de/kin-cli" className="inline-block">
          <h1 className="text-3xl font-bold hover:text-purple-200 transition-all">
            Get Started
          </h1>
        </Link>
      </div>

      <div className="relative mb-14 mt-8 flex justify-center lg:my-0">
        <div className="flex gap-3">
          <div className="w-96 h-72 rounded-2xl bg-purple-400" />
        </div>

        <pre className="absolute top-[10%] text-lg w-[80%] text-black/90 font-bold">
          package person
          <br />
          <br />
          ctr Person {"{"}
          <br />
          {"    "}name string @1
          <br />
          {"    "}age uint8 @2
          <br />
          {"}"}
        </pre>

        <a
          href="https://kinetra.de/kin-cli"
          className="absolute bottom-[7%] text-center font-bold text-sm p-2 w-[80%] bg-black/70 rounded-lg"
        >
          Compile It
        </a>
      </div>
    </div>
  );
}

export default HeroSection;
