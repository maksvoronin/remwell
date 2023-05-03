import { blogModel } from "@/models";
import { BlogResponse, ErrorResponse } from "@/types";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<BlogResponse | ErrorResponse>
) {
  const post = await blogModel.findOne({ link: req.query.link }, { __v: 0 });
  if (!post) return res.status(404).json({code: 3, text: "Post not found", prompt: "Check post link"} as ErrorResponse);
  return res.status(200).json(post);
}
