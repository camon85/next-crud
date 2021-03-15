import { NextApiRequest, NextApiResponse } from "next";

type Article = { title: string; content: string };

const articles: Array<Article> = [
  { title: "title1", content: "content1" },
  { title: "title2", content: "content2" },
  { title: "title3", content: "content3" },
];

export default (req: NextApiRequest, res: NextApiResponse) => {
  const {
    body: { title, content },
    method,
  } = req;

  switch (method) {
    case "GET":
      // Get data from your database
      res.status(200).json(articles);
      break;
    case "POST":
      // Update or create data in your database
      articles.push({ title, content });
      res.status(200).json({ title, content });
      break;
    default:
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};
