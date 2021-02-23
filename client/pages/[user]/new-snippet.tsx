import { useState } from "react";
import { CodeEditor } from "../../components";

export interface NewSnippetProps {}

const NewSnippet: React.FC<NewSnippetProps> = () => {
  const [data, setData] = useState({
    title: "",
    language: "javascript",
    content: "",
    notes: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <div className="mt-14">
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type="text" name="title" id="title" />
        <CodeEditor
          language={data.language}
          value={data.content}
          onChange={setData}
        />
        <textarea onChange={handleChange} name="notes" id="notes"></textarea>
        <input type="submit" value="Save" />
      </form>
    </div>
  );
};

export default NewSnippet;
