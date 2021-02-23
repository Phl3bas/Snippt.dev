import { gql } from "@apollo/client";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { useNestServer } from "../../utils";
import dynamic from "next/dynamic";
import { useState } from "react";

const CodeEditor = dynamic(
  import("../../components").then((c) => c.Editor),
  { ssr: false }
);

export const INDV_SNIPPETS_QUERY = gql`
  query($id: String!) {
    snippet(id: $id) {
      title
      content
      language
    }
  }
`;

interface SnippetPageProps {
  snippet: Snippet;
}
export default function SnippetPage({ snippet }: SnippetPageProps) {
  const [content, setContent] = useState(snippet.content);
  const [language, setlanguage] = useState(snippet.language.toLowerCase());

  return (
    <div>
      <Head>
        <title>Snippt.dev | {snippet.title}</title>
      </Head>
      <h1>{snippet.title}</h1>
      <p>
        {snippet.language.charAt(0).toUpperCase() + snippet.language.slice(1)}
      </p>
      <div>
        <CodeEditor language={language} value={content} onChange={setContent} />
      </div>
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
