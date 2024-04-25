"use client";

import React, { useEffect } from "react";

import Navbar from "@/components/global/nav-bar";
import Products from "@/components/global/products";
import HeroSection from "@/components/global/hero-section";

import Link from "next/link";
import { redirect } from "next/navigation";

function HomePage() {
  return redirect("/benc");

  return (
    <div className="min-h-screen bg-black overflow-hidden">
      <div className="dark:bg-black bg-white dark:bg-grid-white/[0.07] bg-grid-black/[0.07] relative">
        <div className="max-w-7xl mx-auto p-5">
          <Navbar />
          <HeroSection />
        </div>
        <div className="h-10 xl:h-32 bg-gradient-to-t from-black absolute -bottom-5 left-0 xl:bottom-0 w-full"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        <Products />

        <p className="text-center">
          Love to{" "}
          <Link
            className="underline hover:text-purple-200"
            href="https://www.youtube.com/@DailyWebCoding"
          >
            DailyWebCoding
          </Link>{" "}
          for this amazing website layout.
        </p>
      </div>
    </div>
  );
}

export default HomePage;
