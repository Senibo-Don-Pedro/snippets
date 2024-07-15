import { db } from "@/db";
import { redirect } from "next/navigation";

export default function SnippetCreatePage() {
  async function createSnippet(formData: FormData) {
    // THIS NEEDS TO BE A SERVER ACTION
    "use server";

    //CHECK THE USER'S INPUT AND MAKE SURE THEY'RE VALID
    const title = formData.get("title") as string;
    const code = formData.get("code") as string;

    //CREATE A NEW RECORD IN THE DATABASE
    const snippet = await db.snippet.create({
      data: {
        title: title,
        code: code,
      },
    });
    console.log(snippet);

    //REDIRECT THE USER BACK TO THE ROOT ROUTE
    redirect("/");
  }

  return (
    <form className="" action={createSnippet}>
      <h3 className="font-bold m-3">Create a snippet</h3>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            className="border rounded p-2 w-full"
          />
        </div>
        <div className="flex gap-2">
          <label htmlFor="code">Code</label>
          <textarea
            name="code"
            id="code"
            className="border rounded p-2 w-full"
          />
        </div>

        <button type="submit" className="rounded p-2 bg-blue-200">
          Create
        </button>
      </div>
    </form>
  );
}
