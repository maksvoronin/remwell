import { blogModel } from "@/models";
import { BlogResponse } from "@/types";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<BlogResponse[]>
) {
  const posts: BlogResponse[] = await blogModel.find({}, { __v: 0 });
  return res.status(200).json(posts);
}
