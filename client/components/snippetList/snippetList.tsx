import Link from "next/link";

export function SnippetList({ snippets }: { snippets: Snippet[] }) {
  return (
    <div className="flex-row w-full bg-green-200 justifycontent-center alignitems-center shadow-md radius-md">
      {snippets.map(({ title, id, language }: Snippet) => (
        <div
          className="shadow-sm m-10 h-18 w-20 bg-white-000 py-6 px-10 radius-md"
          key={id}
        >
          <h5 className="m-0">{title}</h5>
          <p>{language}</p>
          <Link
            href={"/dashboard/snippet/[...id]"}
            as={`/dashboard/snippet/${id}`}
          >
            <a>View</a>
          </Link>
        </div>
      ))}
    </div>
  );
}
