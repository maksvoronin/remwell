import { adminModel, blogModel } from "@/models";
import { BlogResponse, ErrorResponse } from "@/types";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<BlogResponse[] | ErrorResponse>
) {
  const { title, author, description, link, date, text, token } = req.body;
  if (!title || !author || !description || !link || !text || !token)
    return res.status(500).json({
      code: 1,
      text: "Incorrect post data",
      prompt: "Check sent post data",
    } as ErrorResponse);

  const admin = await adminModel.findOne({ token });
  if (!admin)
    return res
      .status(404)
      .json({
        code: 3,
        text: "Admin not found",
        prompt: "Check token",
      } as ErrorResponse);
  return res
    .status(201)
    .json(
      await blogModel.create({
        title,
        author,
        description,
        link,
        date: date || Date.now(),
        text,
      })
    );
}
