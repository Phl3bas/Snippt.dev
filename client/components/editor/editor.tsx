import { Dispatch, SetStateAction } from "react";
import { Controlled as CodeMirror } from "react-codemirror2";

export interface EditorProps {
  language: string;
  theme?: string;
  value: string;
  onChange: Dispatch<SetStateAction<Partial<Snippet>>>;
}

export const Editor: React.FC<EditorProps> = ({
  language,
  theme = "material",
  value,
  onChange,
}: EditorProps) => {
  const handleChange = (editor, data, value: string) => {
    onChange((prev) => ({ ...prev, content: value }));
  };
  return (
    <div
      className="relative min-w-25 w-3/5 mx-auto shadow-2xl my-10"
      style={{ height: "auto" }}
    >
      <svg
        className="absolute"
        style={{ zIndex: 1000, left: 10, top: 10 }}
        xmlns="http://www.w3.org/2000/svg"
        width="54"
        height="14"
        viewBox="0 0 54 14"
      >
        <g fill="none" fillRule="evenodd" transform="translate(1 1)">
          <circle
            cx="6"
            cy="6"
            r="6"
            fill="#FF5F56"
            stroke="#E0443E"
            strokeWidth=".5"
          ></circle>
          <circle
            cx="26"
            cy="6"
            r="6"
            fill="#FFBD2E"
            stroke="#DEA123"
            strokeWidth=".5"
          ></circle>
          <circle
            cx="46"
            cy="6"
            r="6"
            fill="#27C93F"
            stroke="#1AAB29"
            strokeWidth=".5"
          ></circle>
        </g>
      </svg>
      <CodeMirror
        onBeforeChange={handleChange}
        value={value}
        options={{
          viewportMargin: Infinity,
          lineWrapping: true,
          line: true,
          theme: theme,
          mode: language,
          screenReaderLabel: "code-editor",
          autoCloseBrackets: true,
          autoCloseTags: true,
          matchTags: true,
          matchBrackets: true,
        }}
      />
    </div>
  );
};
