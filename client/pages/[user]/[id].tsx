import { gql, useMutation } from "@apollo/client";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { useNestServer } from "../../utils";
import { CodeEditor } from "../../components";
import { useState } from "react";

export const INDV_SNIPPETS_QUERY = gql`
  query($id: String!) {
    snippet(id: $id) {
      title
      content
      language
      notes
    }
  }
`;

export const SAVE_SNIPPET_QUERY = gql`
  mutation($data: CreateSnippetInput!) {
    createSnippet(createSnippetData: $data) {
      id
      title
      language
      content
      notes
    }
  }
`;

interface SnippetPageProps {
  snippet: Snippet;
}
export default function SnippetPage({ snippet }: SnippetPageProps) {
  const [data, setData] = useState({
    content: snippet.content,
    language: snippet.language,
    notes: snippet.notes,
  });

  const [saveSnippet] = useMutation(SAVE_SNIPPET_QUERY);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(JSON.stringify(data, null, 2));
  };

  return (
    <div>
      <Head>
        <title>Snippt.dev | {snippet.title}</title>
      </Head>
      <h1>{snippet.title}</h1>
      <p>
        {snippet.language.charAt(0).toUpperCase() + snippet.language.slice(1)}
      </p>
      <form>
        <CodeEditor
          language={data.language.toLowerCase()}
          theme="cobalt"
          value={data.content}
          onChange={setData}
        />
        <input type="submit" onClick={handleSubmit} value="Save" />
      </form>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { snippet } = await useNestServer<{ snippet: Snippet }>(
    INDV_SNIPPETS_QUERY,
    {
      id: params.id,
    }
  );

  return {
    props: {
      snippet,
    },
  };
};
