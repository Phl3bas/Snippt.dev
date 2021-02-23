import { Dispatch, SetStateAction, useLayoutEffect } from "react";
import { Controlled as CodeMirror } from "react-codemirror2";

export interface EditorProps {
  language: string;
  theme?: string;
  value: string;
  onChange: Dispatch<SetStateAction<string>>;
}

export const Editor: React.FC<EditorProps> = ({
  language,
  theme = "material",
  value,
  onChange,
}: EditorProps) => {
  const handleChange = (editor, data, value) => {
    onChange(value);
  };

  useLayoutEffect(() => {
    require("codemirror/lib/codemirror");
    require("codemirror/lib/codemirror.css");

    require("codemirror/addon/edit/closebrackets");
    require("codemirror/addon/edit/closetag");
    require("codemirror/addon/edit/matchbrackets");
    require("codemirror/addon/edit/matchtags");

    require("codemirror/addon/lint/javascript-lint");
    require("codemirror/addon/lint/lint");

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
  }, []);

  return (
    <div className="relative w-1/2 mx-auto shadow-2xl">
      <svg
        className="absolute"
        style={{ zIndex: 1000, left: 10, top: 10 }}
        xmlns="http://www.w3.org/2000/svg"
        width="54"
        height="14"
        viewBox="0 0 54 14"
      >
        <g fill="none" fill-rule="evenodd" transform="translate(1 1)">
          <circle
            cx="6"
            cy="6"
            r="6"
            fill="#FF5F56"
            stroke="#E0443E"
            stroke-width=".5"
          ></circle>
          <circle
            cx="26"
            cy="6"
            r="6"
            fill="#FFBD2E"
            stroke="#DEA123"
            stroke-width=".5"
          ></circle>
          <circle
            cx="46"
            cy="6"
            r="6"
            fill="#27C93F"
            stroke="#1AAB29"
            stroke-width=".5"
          ></circle>
        </g>
      </svg>
      <CodeMirror
        onBeforeChange={handleChange}
        value={value}
        options={{
          lineWrapping: true,
          line: true,
          theme: theme,
          mode: language,
          lint: true,
        }}
      />
    </div>
  );
};
