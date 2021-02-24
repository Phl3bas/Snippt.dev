import { gql } from "@apollo/client";
import { SnippetList } from "../../components";
import * as React from "react";
import { useNestServer } from "../../utils";
import Head from "next/head";
import Link from "next/link";

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

const Dashboard: React.FC<DashboardProps> = ({
  data,
  user,
}: {
  data: Snippet[];
  user: string;
}) => {
  return (
    <div className="shadow-lg h-25 bg-teal-400 p-10 mt-16 radius-lg">
      <Head>
        <title>Snippt.dev | {user}'s dashboard</title>
      </Head>
      <h2>Welcome {user}</h2>
      <Link href={"/[...user]/new-snippet"} as={`/${user}/new-snippet`}>
        <a role="button">New Snippet</a>
      </Link>
      <SnippetList user={user} snippets={data || []} />
    </div>
  );
};

export async function getServerSideProps(context) {
  const { allSnippets } = await useNestServer<{ allSnippets: [Snippet] }>(
    All_SNIPPETS_QUERY
  );

  return {
    props: {
      user: context.params.user,
      data: allSnippets,
    },
  };
}

export default Dashboard;