import { db } from "@/db";
import { notFound } from "next/navigation";
import SnippetEditform from "@/components/snippet-edit-form";

type SnippetEditPageProp = {
  params: {
    id: string;
  };
};

export default async function SnippetEditPage(props: SnippetEditPageProp) {
  const id = parseInt(props.params.id);

  const snippet = await db.snippet.findFirst({
    where: {
      id: id,
    },
  });

  if (!snippet) {
    return notFound();
  }

  return (
    <div>
      <SnippetEditform snippet={snippet} />
    </div>
  );
}
