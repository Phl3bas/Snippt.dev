import { gql, useMutation } from "@apollo/client";
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
    }
  }
`;

export const DELETE_SNIPPET_MUTATION = gql`
  mutation($data: DeleteSnippetInput!) {
    deleteSnippet(deleteSnippetData: $data) {
      id
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
  const [deleteSnippet] = useMutation(DELETE_SNIPPET_MUTATION);

  const handleDelete = (id: string) => {
    deleteSnippet({
      variables: {
        data: {
          id,
        },
      },
    });
  };

  return (
    <div className="shadow-lg h-25 bg-indigo-500 p-10 mt-17 radius-lg">
      <Head>
        <title>Snippt.dev | {user}'s dashboard</title>
      </Head>
      <h2 className="text-white-000">Welcome {user}</h2>
      <Link href={"/[...user]/new-snippet"} as={`/${user}/new-snippet`}>
        <a role="button" className="bg-indigo-400 text-white-000">
          <span className="text-white-000">New Snippet</span>
        </a>
      </Link>
      <SnippetList
        deleteHandler={handleDelete}
        user={user}
        snippets={data || []}
      />
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
