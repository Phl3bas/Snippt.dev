import dynamic from "next/dynamic";

export const CodeEditor = dynamic(
  () => {
    require("codemirror/lib/codemirror");
    require("codemirror/lib/codemirror.css");

    require("codemirror/addon/edit/closebrackets");
    require("codemirror/addon/edit/closetag");
    require("codemirror/addon/edit/matchbrackets");
    require("codemirror/addon/edit/matchtags");

    require("codemirror/mode/vue/vue");
    require("codemirror/mode/yaml/yaml");
    require("codemirror/mode/sql/sql");
    require("codemirror/mode/sass/sass");
    require("codemirror/mode/ruby/ruby");
    require("codemirror/mode/rust/rust");
    require("codemirror/mode/r/r");
    require("codemirror/mode/php/php");
    require("codemirror/mode/nginx/nginx");
    require("codemirror/mode/markdown/markdown");
    require("codemirror/mode/lua/lua");
    require("codemirror/mode/jsx/jsx");
    require("codemirror/mode/julia/julia");
    require("codemirror/mode/fortran/fortran");
    require("codemirror/mode/commonlisp/commonlisp");
    require("codemirror/mode/shell/shell");
    require("codemirror/mode/powershell/powershell");
    require("codemirror/mode/css/css");
    require("codemirror/mode/dart/dart");
    require("codemirror/mode/django/django");
    require("codemirror/mode/dockerfile/dockerfile");
    require("codemirror/mode/elm/elm");
    require("codemirror/mode/erlang/erlang");
    require("codemirror/mode/javascript/javascript");
    require("codemirror/mode/python/python");
    require("codemirror/mode/go/go");
    require("codemirror/theme/cobalt.css");
    require("codemirror/theme/darcula.css");
    require("codemirror/theme/material.css");
    require("codemirror/theme/material-darker.css");
    require("codemirror/theme/material-palenight.css");
    require("codemirror/theme/material-ocean.css");
    require("codemirror/theme/monokai.css");
    require("codemirror/theme/nord.css");
    require("codemirror/theme/seti.css");
    return import("./editor").then((c) => c.Editor);
  },
  { ssr: false }
);
