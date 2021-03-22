import { gql, useMutation, useQuery } from "@apollo/client";
import { SnippetList } from "../../components";
import * as React from "react";
import Head from "next/head";
import Link from "next/link";
import { initializeApollo } from "../../lib/apolloClient";
import ALL_SNIPPETS_QUERY from '../../graphql/queries/AllSnippetsQuery'
import DELETE_SNIPPET_MUTATION from '../../graphql/mutations/deleteSnippet'


export interface DashboardProps {
  user: string
}

interface AllSnippets {
  allSnippets: Snippet[]
}

interface Snippet {
  title: string,
  language: string,
  id, string,
}

const Dashboard: React.FC<DashboardProps> = ({
  user,
}: DashboardProps) => {
  
  // const router = useRouter()
  const {data, error, loading} = useQuery(ALL_SNIPPETS_QUERY);
  const [deleteSnippet] = useMutation(DELETE_SNIPPET_MUTATION);

  const {allSnippets} = data;

  const handleDelete = (id: string) => {
    deleteSnippet({
      variables: {
        data: {
          id,
        },
      },
      refetchQueries:[{
        query: ALL_SNIPPETS_QUERY
      }]
    });
  };
  if(error) {
    return <h1>404 | page not found</h1>
  }

  

  return (
    <div className="shadow-lg h-28 bg-indigo-500 p-10 mt-17 radius-lg">
      <Head>
        <title>Snippt.dev | {user}'s dashboard</title>
      </Head>
      <h2 className="text-white-000">Welcome {user}</h2>
      <Link href={"/[...user]/new-snippet"} as={`/${user}/new-snippet`}>
        <a role="button" className="bg-indigo-400 text-white-000">
          <span className="text-white-000">New Snippet</span>
        </a>
      </Link>
      {loading ? <div>...loading</div> : <SnippetList
        deleteHandler={handleDelete}
        user={user}
        snippets={allSnippets || []}
      />}
    </div>
  );
};

export async function getServerSideProps(context) {
  const apolloClient = initializeApollo()
  await apolloClient.query({
    query: ALL_SNIPPETS_QUERY,
  })
  return {
    props: {
      user: context.params.user,
      initialApolloState: apolloClient.cache.extract()
    },
  };
}

export default Dashboard;
