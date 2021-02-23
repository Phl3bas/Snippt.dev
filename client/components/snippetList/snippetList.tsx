import Link from "next/link";

export function SnippetList({
  snippets,
  user,
}: {
  snippets: Snippet[];
  user: string;
}) {
  return (
    <div className="flex-row flex-wrap w-full bg-green-200 justifycontent-center alignitems-start gap-4 shadow-sm radius-md">
      {snippets.map(({ title, id, language }: Snippet) => (
        <div
          className="shadow-sm m-10 h-18 w-20 bg-white-000 py-6 px-10 radius-md bg-white-200:hover"
          key={id}
        >
          <h5 className="m-0">{title}</h5>
          <p>{language.charAt(0).toUpperCase() + language.slice(1)}</p>
          <Link href={"/[...user]/[...id]"} as={`/${user}/${id}`}>
            <a>View</a>
          </Link>
        </div>
      ))}
    </div>
  );
}
