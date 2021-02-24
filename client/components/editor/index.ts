import dynamic from "next/dynamic";
import CodeMirrorConfig from "./config/codemirror";
import ModeConfig from "./config/languages";
import ThemeConfig from "./config/themes";

export const CodeEditor = dynamic(
  () => {
    CodeMirrorConfig();
    ModeConfig();
    ThemeConfig();
    return import("./editor").then(({ Editor }) => Editor);
  },
  { ssr: false }
);
