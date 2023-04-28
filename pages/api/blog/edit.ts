import { blogModel } from "@/models";
import { BlogResponse, ErrorResponse } from "@/types";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<BlogResponse[] | ErrorResponse>
) {
  const { id, title, author, description, link, date, text } = req.body;
  if (!id)
    return res.status(500).json({
      code: 1,
      text: "Incorrect post data",
      prompt: "Check sent post data",
    } as ErrorResponse);
  const post = await blogModel.findOne({ _id: id });
  if (!post)
    return res
      .status(404)
      .json({ code: 2, text: "Post not found" } as ErrorResponse);
  if (title) post.title = title;
  if (author) post.author = author;
  if (description) post.description = description;
  if (link) post.link = link;
  if (text) post.text = text;
  await post.save();
  return res.status(201).json(post);
}
