import Router from "next/router";

export default function ArticleForm() {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const res = await fetch("/api/article", {
      body: JSON.stringify({
        title: event.target.title.value,
        content: event.target.content.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const result = await res.json();

    if (result) {
      Router.push("/list");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">title</label>
      <input id="title" name="title" type="text" required />

      <label htmlFor="title">content</label>
      <input id="content" name="content" type="content" required />

      <button type="submit">Save</button>
    </form>
  );
}
