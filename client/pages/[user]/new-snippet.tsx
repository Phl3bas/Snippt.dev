import { gql, useMutation } from "@apollo/client";
import { useState } from "react";
import { CodeEditor } from "../../components";
import { useRouter } from "next/router";

export const SAVE_SNIPPET_QUERY = gql`
  mutation($data: CreateSnippetInput!) {
    createSnippet(createSnippetData: $data) {
      title
      language
      content
      notes
    }
  }
`;

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
          content: JSON.stringify(data.content, null, 2),
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

export async function getServerSideProps(context) {
  return {
    props: {
      user: context.params.user,
    },
  };
}

export default NewSnippet;
