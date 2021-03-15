import { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  console.log(req.body);
  res.status(200).json({ title: req.body.title, content: req.body.content });
  // res.status(200).json({ 'title': 'First article',  'content': 'Test api route'})
};
