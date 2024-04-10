"use client";

import React from "react";

import Title from "@/components/shared/title";
import { HoverEffect } from "@/components/ui/card-hover-effect";

function Projects() {
  const projects = [
    {
      title: "BencV1",
      link: "https://github.com/deneonet/benc",
      description:
        "The original - faster than V2, but no validations and data structure changes are unsupported. But good if speed is essential.",
    },
    {
      title: "BencV2",
      link: "/blog/benc-v2",
      description:
        "The upgrade of v1 - efficient, blazingly fast, data validation and compatible with data structure changes.",
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
