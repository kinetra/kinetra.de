"use client";

import React from "react";

import Title from "@/components/shared/title";
import { HoverEffect } from "@/components/ui/card-hover-effect";

function Projects() {
  const projects = [
    {
      title: "bencv2 go",
      link: "https://github.com/bencv2/go-runtime",
      description:
        "The golang runtime of bencv2 - efficient, blazingly fast, data validation and compatible with data structure changes.",
    },
    {
      title: "bencc",
      link: "https://github.com/bencv2/bencc",
      description:
        "The compiler of bencv2 - generated and check broken bencv2 code in seconds. Don't let broken compatibility stop you.",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto p-5">
      <Title
        text="Projects"
        className="flex flex-col items-center justify-center -rotate-6"
      />

      <HoverEffect
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2"
        items={projects}
      />
    </div>
  );
}

export default Projects;
