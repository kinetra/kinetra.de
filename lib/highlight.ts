import {
  BundledLanguage,
  BundledTheme,
  HighlighterGeneric,
  getHighlighter,
} from "shikiji";

const bencLang = JSON.parse(
  '{"fileTypes":["benc"],"name":"benc","patterns":[{"include":"#main"}],"scopeName":"source.benc","uuid":"","repository":{"main":{"patterns":[{"match":"(safe|package|ctr|reserved|string|uint8|private)","name":"keyword.benc"},{"include":"#numeric"},{"match":"(#.*)","name":"comment.benc"},{"match":"([^s])","name":"text.benc"}]},"main__1":{"patterns":[{"include":"#main"}]},"numeric":{"patterns":[{"match":"([0-9]+)","name":"constant.numeric.benc"}]}}}'
);

export const highlighter = async () => {
  return await getHighlighter({
    langs: [bencLang, "go"],
    themes: ["aurora-x"],
  });
};
