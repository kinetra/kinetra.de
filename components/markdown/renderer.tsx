import React from "react";

import ReactMarkdown from "react-markdown";
import SyntaxHighlighter from "react-syntax-highlighter";

import { tomorrowNightBright as dark } from "react-syntax-highlighter/dist/esm/styles/hljs";

import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

import { cn } from "@/lib/utils";

interface Props {
  children: string;
  className?: string;
  p_className?: string;
}

function MDRenderer({ children, className, p_className }: Props) {
  return (
    <ReactMarkdown
      className={cn("prose prose-invert text-sm mt-8", className)}
      components={{
        h1: ({ children }) => (
          <h1 className="text-black dark:text-white break-words">{children}</h1>
        ),
        h2: ({ children }) => (
          <h2 className="text-black dark:text-white break-words">{children}</h2>
        ),
        h3: ({ children }) => (
          <h3 className="text-black dark:text-white break-words">{children}</h3>
        ),
        h4: ({ children }) => (
          <h4 className="text-black dark:text-white break-words">{children}</h4>
        ),
        strong: ({ children }) => (
          <strong className="text-black dark:text-white break-words">
            {children}
          </strong>
        ),
        code: ({ children, className }) => {
          console.log(children);
          return className ? (
            // @ts-expect-error
            <SyntaxHighlighter
              customStyle={{ margin: 0, padding: 0 }}
              language={className.replace("language-", "")}
              wrapLongLines
              style={dark}
            >
              {children}
            </SyntaxHighlighter>
          ) : (
            <code className="before:hidden after:hidden bg-gray-100 dark:bg-zinc-800 rounded-md p-1 font-semibold break-words">
              {children}
            </code>
          );
        },
        hr: ({ children }) => (
          <hr className="border-gray-400 dark:border-gray-600 break-words">
            {children}
          </hr>
        ),
        a: ({ href, children }) => (
          <a
            href={href}
            className="text-indigo-600 dark:text-indigo-300 font-semibold text-xs hover:text-indigo-400 dark:hover:text-indigo-400 break-words"
          >
            {children}
          </a>
        ),
        p: ({ children }) => (
          <p className={cn("text-white break-words", p_className)}>
            {children}
          </p>
        ),
        ul: ({ children }) => (
          <ul className="text-gray-600 dark:text-gray-200 break-words">
            {children}
          </ul>
        ),
      }}
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
    >
      {children}
    </ReactMarkdown>
  );
}

export default MDRenderer;
