import { blogModel } from "@/models";
import { BlogResponse, ErrorResponse } from "@/types";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<BlogResponse[] | ErrorResponse>
) {
  const { title, author, description, link, date, text } = req.body;
  if (!title || !author || !description || !link || !text)
    return res
      .status(500)
      .json({
        code: 1,
        text: "Incorrect post data",
        prompt: "Check sent post data",
      } as ErrorResponse);
  return res
    .status(201)
    .json(
      await blogModel.create({ title, author, description, link, date: date || Date.now(), text })
    );
}
