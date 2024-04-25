import Navbar from "@/components/global/nav-bar";
import React from "react";
import { getHighlighter } from "shikiji";

const bencLang = JSON.parse(
  '{"fileTypes":["benc"],"name":"benc","patterns":[{"include":"#main"}],"scopeName":"source.benc","uuid":"","repository":{"main":{"patterns":[{"match":"(safe|package|ctr|reserved|string|uint8)","name":"keyword.benc"},{"include":"#numeric"},{"match":"(#.*)","name":"comment.benc"},{"match":"([^s])","name":"text.benc"}]},"main__1":{"patterns":[{"include":"#main"}]},"numeric":{"patterns":[{"match":"([0-9]+)","name":"constant.numeric.benc"}]}}}'
);

async function BencHome() {
  const highlighter = await getHighlighter({
    langs: [bencLang, "go"],
    themes: ["aurora-x"],
  });

  const bencHtml = highlighter.codeToHtml(
    `
  package person
  
  ctr Person {
    age uint8 @1
    name string @2
  }
  `,
    {
      lang: "benc",
      theme: "aurora-x",
    }
  );

  const goHtml = highlighter.codeToHtml(
    `
  person := person.Person{
    age: 25,
    name: "Jeff"
  }

  benc.Encode(&person)
  `,
    {
      lang: "go",
      theme: "aurora-x",
    }
  );

  return (
    <div className="min-h-screen bg-black overflow-hidden">
      <div className="relative">
        <div className="max-w-7xl mx-auto p-5">
          <Navbar benc />

          <h1 className="text-xl sm:text-2xl p-5 sm:p-10">
            Benc is a <span className="text-purple-200">b</span>inary{" "}
            <span className="text-blue-200">enc</span>oder for serializing
            structured data, that is blanzingly fast.
          </h1>

          <div className="flex flex-col gap-y-4 sm:gap-y-0 sm:flex-row w-full gap-x-4 p-5 sm:p-10">
            <div className="w-full">
              <div dangerouslySetInnerHTML={{ __html: bencHtml }} />
              <p className="p-2">A benc schema.</p>
            </div>

            <div className="w-full">
              <div dangerouslySetInnerHTML={{ __html: goHtml }} />
              <p className="p-2">Usage in golang.</p>
            </div>
          </div>

          <div className="grid pt-2 px-5 sm:px-10">
            <h1 className="text-xl sm:text-2xl mb-4 underline underline-offset-4 decoration-blue-200">
              Get Started
            </h1>

            <a
              href="https://github.com/bencv2/bencc#installation"
              className="mt-4 text-base sm:text-lg"
            >
              1.{" "}
              <span className="text-blue-400 hover:text-blue-200">Install</span>{" "}
              the benc compiler.
            </a>

            <a href="/benc/lang" className="mt-1 text-base sm:text-lg">
              2. <span className="text-blue-400 hover:text-blue-200">Read</span>{" "}
              the benc language guide.
            </a>

            <a href="/benc/go" className="mt-1 text-base sm:text-lg">
              3. <span className="text-blue-400 hover:text-blue-200">View</span>{" "}
              a golang example.
            </a>
          </div>

          <div className="p-5 sm:p-10">
            <h1 className="text-xl sm:text-2xl underline underline-offset-4 decoration-blue-200">
              Why Benc?
            </h1>

            <p className="mt-4 text-base sm:text-lg">
              Benc is designed to be efficient, by default supporting zero
              memory allocation with blanzingly fast speed. Think of protobuf,
              with limitations, but 7x faster. You write a schema, generate Go
              code and start serializing your data - that easy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BencHome;
