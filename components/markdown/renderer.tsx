import React from "react";

import ReactMarkdown from "react-markdown";

import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

import { cn } from "@/lib/utils";
import { highlighter } from "@/lib/highlight";

interface Props {
  children: string;
  className?: string;
  p_className?: string;
}

async function MDRenderer({ children, className, p_className }: Props) {
  const hl = await highlighter();

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
          if (className) {
            const html = hl.codeToHtml(children as string, {
              theme: "aurora-x",
              lang: className.replace("language-", ""),
            });

            if (!html) {
              return;
            }

            return <div dangerouslySetInnerHTML={{ __html: html }} />;
          }

          return (
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
            className="no-underline text-indigo-600 dark:text-indigo-400 font-bold hover:text-indigo-400 dark:hover:text-indigo-300 break-words"
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
