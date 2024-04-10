"use client";

import yaml from "js-yaml";
import { Loader2 } from "lucide-react";
import React, { useEffect, useState } from "react";

import Navbar from "@/components/global/nav-bar";
import MDRenderer from "@/components/markdown/renderer";

interface Blog {
  theme: string;
  title: string;
  content: string;
}

function HomePage({ params }: { params: { slug: string } }) {
  const [error, setError] = useState("");
  const [blog, setBlog] = useState<Blog | null>(null);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      const res = await fetch(
        `${window.location.origin}/blogs/${params.slug}.yml`
      );
      if (!res.ok) {
        setError("Either the blog could not be found or something went wrong.");
      }

      const text = await res.text();
      const blog = yaml.load(text) as Blog;

      setError("");
      setBlog(blog);
      setIsLoading(false);
    };

    fetchBlog();
  }, [params.slug]);

  let underline = false;

  return (
    <div className="min-h-screen bg-black overflow-hidden">
      <div className="dark:bg-black bg-white dark:bg-grid-white/[0.07] bg-grid-black/[0.07] relative pb-14">
        <div className="max-w-7xl mx-auto p-5">
          <Navbar blog />

          {blog && (
            <div className="flex justify-center items-center">
              <div className="space-y-10 text-center">
                <h1 className="text-4xl lg:text-7xl font-bold">
                  <span className="text-xl lg:text-4xl">{blog.theme}: </span>
                  {blog.title.split(" ").map((part) => {
                    if (part === "[" || part === "]") {
                      underline = !underline;
                      return null;
                    }
                    return underline ? (
                      <span className="underline underline-offset-8 decoration-purple-500">
                        {part}{" "}
                      </span>
                    ) : (
                      <span>{part} </span>
                    );
                  })}
                </h1>
              </div>
            </div>
          )}
        </div>
        <div className="h-10 xl:h-32 bg-gradient-to-t from-black absolute -bottom-5 left-0 xl:bottom-0 w-full"></div>
      </div>

      <div className="flex justify-center min-h-[80vh] max-w-7xl mx-auto p-5">
        {error ? (
          <p className="text-2xl lg:text-4xl text-rose-400 font-semibold">
            {error}
          </p>
        ) : isLoading ? (
          <Loader2 className="h-36 w-36 animate-spin" />
        ) : (
          <MDRenderer className="mt-0 md:mt-6 text-lg">
            {blog?.content || ""}
          </MDRenderer>
        )}
      </div>
    </div>
  );
}

export default HomePage;
