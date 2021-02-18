import { gql } from "@apollo/client";
import { GetServerSideProps, NextPageContext } from "next";
import Head from "next/head";
import { useNestServer } from "../../../utils";

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
  return (
    <div>
      <Head>
        <title>Snippt.dev | {snippet.title}</title>
      </Head>
      <h1>{snippet.title}</h1>
      <p>{snippet.language}</p>
      <div>
        <p>{snippet.content}</p>
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
