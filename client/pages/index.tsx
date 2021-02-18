import Head from "next/head";
import Link from "next/link";

export default function Home({ data }: { data: Snippet[] }) {
  console.log(data);
  return (
    <div>
      <Head>
        <title>Snippets!!!!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1>Hello this is the homepage to snippt.dev</h1>
      </div>
    </div>
  );
}
