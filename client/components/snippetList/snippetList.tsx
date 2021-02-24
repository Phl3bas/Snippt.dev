import Link from "next/link";

export function SnippetList({
  deleteHandler,
  snippets,
  user,
}: {
  deleteHandler: (string) => void;
  snippets: Snippet[];
  user: string;
}) {
  const handleDeleteClick = (id) => {
    deleteHandler(id);
  };

  return (
    <div className="flex-row flex-wrap w-full bg-indigo-300 justifycontent-center alignitems-start gap-4 shadow-sm radius-md">
      {snippets.map(({ title, id, language }: Snippet) => (
        <div
          className="shadow-sm m-10 h-18 w-20 bg-white-000 py-6 px-10 radius-md"
          key={id}
        >
          <h5 className="m-0">{title}</h5>
          <p>{language.charAt(0).toUpperCase() + language.slice(1)}</p>
          <div className="flex-row text-white-000">
            <Link href={"/[...user]/[...id]"} as={`/${user}/${id}`}>
              <a role="button" className=" bg-semantic-info">
                <span className="text-white-000">View</span>
              </a>
            </Link>
            <button
              onClick={() => {
                handleDeleteClick(id);
              }}
              className="bg-semantic-danger text-white-000"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
