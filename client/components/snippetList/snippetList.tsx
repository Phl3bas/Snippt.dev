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
          className="flex-col justifycontent-between shadow-sm m-12 h-22 w-23 bg-white-000 py-6 px-13 radius-md"
          key={id}
        >
          <h5 className="m-0">{title}</h5>
          <p>{language.charAt(0).toUpperCase() + language.slice(1)}</p>
          <div className="flex-row">
            <Link href={"/[...user]/[...id]"} as={`/${user}/${id}`}>
              <a
                role="button"
                className=" bg-semantic-info shadow-md radius-none bg-blue-500:hover hover-none"
              >
                <span className="text-white-000">View</span>
              </a>
            </Link>
            <button
              onClick={() => {
                handleDeleteClick(id);
              }}
              className="bg-semantic-danger text-white-000 shadow-md radius-none bg-red-600:hover hover-none"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
