import { createHighlighter, type Highlighter } from "shiki";

const pursuitTheme = {
  name: "pursuit",
  type: "dark" as const,
  bg: "#020202",
  fg: "#939393",
  settings: [
    { settings: { foreground: "#939393", background: "#020202" } },
    {
      scope: ["comment", "punctuation.definition.comment", "string.comment"],
      settings: { foreground: "#424242", fontStyle: "italic" },
    },
    {
      scope: ["keyword", "storage", "storage.type", "storage.modifier", "keyword.control", "keyword.operator.new"],
      settings: { foreground: "#f0a35a" },
    },
    {
      scope: ["string", "string.quoted", "constant.numeric", "constant.language"],
      settings: { foreground: "#f0f0f0" },
    },
    {
      scope: ["entity.name.function", "support.function", "entity.name"],
      settings: { foreground: "#f0f0f0" },
    },
  ],
};

const LANGS = [
  "javascript",
  "typescript",
  "tsx",
  "jsx",
  "python",
  "bash",
  "json",
  "css",
  "html",
  "markdown",
  "yaml",
  "toml",
  "sql",
  "go",
  "rust",
  "text",
] as const;

let highlighterPromise: Promise<Highlighter> | null = null;

function getHighlighter() {
  highlighterPromise ??= createHighlighter({
    themes: [pursuitTheme],
    langs: [...LANGS],
  });
  return highlighterPromise;
}

export async function highlightCode(code: string, lang: string): Promise<string> {
  const highlighter = await getHighlighter();
  const loaded = highlighter.getLoadedLanguages();
  const resolved = loaded.includes(lang) ? lang : "text";
  return highlighter.codeToHtml(code, { lang: resolved, theme: "pursuit" });
}
