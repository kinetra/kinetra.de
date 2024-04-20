import React from "react";
import { cn } from "@/lib/utils";

type Props = {
  text: string;
  className?: string;
};

const Title = ({ text, className }: Props) => {
  return (
    <div className={cn("group", className)}>
      <h1 className="text-3xl font-bold group-hover:text-purple-200 transition-all">
        {text}
      </h1>
      <div className="w-40 h-2 bg-purple-300 rounded-full"></div>
      <div className="w-40 h-2 bg-indigo-300 rounded-full translate-x-2"></div>
    </div>
  );
};

export default Title;
