import { gql, useMutation, useQuery } from "@apollo/client";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { CodeEditor } from "../../components";
import { useState } from "react";
import { initializeApollo } from "../../lib/apolloClient";
import { useRouter } from "next/router";
import GET_SNIPPET_QUERY from '../../graphql/queries/getSnippetQuery'
import UPDATE_SNIPPET_MUTATION from '../../graphql/mutations/updateSnippet'

export default function SnippetPage({id}) {
  const { data, loading, error}  = useQuery(GET_SNIPPET_QUERY, {variables: {id}})
  const [updateSnippet] = useMutation(UPDATE_SNIPPET_MUTATION)
  const router = useRouter()
  const [editorData, setEditorData] = useState({
    title: data.snippet.title,
    content: data.snippet.content,
    language: data.snippet.language,
    notes: data.snippet.notes,
  });
  

  const handleSubmit = (e) => {
    e.preventDefault();
    updateSnippet({variables: {data: {
      id,
      content: JSON.stringify(editorData.content),
      ...editorData
    }}}).then((data)=> router.push('/[...user]', '/phl3bas')).catch((err)=> alert({'error': err}))
  };


  

  const handleChange = (e) => {
    e.persist();
    setEditorData((prev)=>({...prev, notes: e.target.value}))
  }

  return (
    <div className="mt-17">
      <Head>
        <title>Snippt.dev | {editorData.title}</title>
      </Head>
      <h1>{data.snippet.title}</h1>
      <p>
        {editorData.language.charAt(0).toUpperCase() + editorData.language.slice(1)}
      </p>
      <form>
        <CodeEditor
          language={editorData.language.toLowerCase()}
          value={editorData.content}
          onChange={setEditorData}
        />
        <textarea name="notes" id="notes"defaultValue={editorData.notes} onChange={handleChange}></textarea>
        <input type="submit" onClick={handleSubmit} value="Save" />
      </form>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
 
    const apolloClient =  initializeApollo()

    await apolloClient.query({query: GET_SNIPPET_QUERY, variables: {
      id: params.id
    }})


  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      id: params.id
    },
  };
};
