import { gql } from "@apollo/client";
import { SnippetList } from "../../components";
import * as React from "react";
import { useNestServer } from "../../utils";
import Head from "next/head";

export const All_SNIPPETS_QUERY = gql`
  query {
    allSnippets {
      title
      language
      id
      content
    }
  }
`;

export interface DashboardProps {}

const Dashboard: React.FC<DashboardProps> = ({ data }: { data: Snippet[] }) => {
  return (
    <div className="shadow-2xl h-25 bg-teal-400 p-5 flex-col p-10 mt-16">
      <Head>
        <title>Snippt.dev | Dashboard</title>
      </Head>
      <h2>Dashboard</h2>
      <SnippetList snippets={data || []} />
    </div>
  );
};

export async function getServerSideProps() {
  const { allSnippets } = await useNestServer<{ allSnippets: [Snippet] }>(
    All_SNIPPETS_QUERY
  );

  return {
    props: {
      data: allSnippets,
    },
  };
}

export default Dashboard;
