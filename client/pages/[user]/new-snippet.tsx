import { gql, useMutation } from "@apollo/client";
import { useState } from "react";
import { CodeEditor } from "../../components";
import { useRouter } from "next/router";
import SAVE_SNIPPET_QUERY from '../../graphql/mutations/createSnippet'


export interface NewSnippetProps {
  user: string;
}

const NewSnippet: React.FC<NewSnippetProps> = ({ user }) => {
  const [data, setData] = useState({
    title: "",
    language: "javascript",
    content: `function HelloWorld(...args) {
  \t return "Hello " + args.join(' ')
}`,
    notes: "",
  });

  const router = useRouter();

  const [saveSnippet] = useMutation(SAVE_SNIPPET_QUERY);

  const handleChange = (e) => {
    setData({ ...data, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    saveSnippet({
      variables: {
        data: {
          title: data.title,
          language: data.language,
          content: data.content,
          notes: data.notes,
        },
      },
    })
      .then(() => {
        router.push({
          pathname: "/[...user]",
          query: {
            user,
          },
        });
      })
      .catch((err) => console.warn(err));
  };

  return (
    <div className="mt-17">
      <form
        onSubmit={handleSubmit}
        className="w-2/3 mx-auto bg-white-000 p-14 radius-lg shadow-2xl min-h-25"
      >
        <label htmlFor="Title">Title</label>
        <input onChange={handleChange} type="text" name="title" id="title" />
        <CodeEditor
          language={data.language}
          value={data.content}
          onChange={setData}
        />
        <label htmlFor="Notes">Notes</label>
        <textarea onChange={handleChange} name="notes" id="notes"></textarea>
        <input type="submit" value="Save" />
      </form>
    </div>
  );
};

export async function getServerSideProps(context) {
  return {
    props: {
      user: context.params.user,
    },
  };
}

export default NewSnippet;
