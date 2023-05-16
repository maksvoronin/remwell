import { blogModel, feedbackModel } from "@/models";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  feedbackCount: number;
  blogCount: number;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const feedbackCount: number = await feedbackModel.count();
  const blogCount: number = await blogModel.count();
  return res.json({ feedbackCount, blogCount });
}
