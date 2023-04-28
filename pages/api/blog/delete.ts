import { blogModel } from "@/models";
import { ErrorResponse, BlogResponse } from "@/types";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ErrorResponse | BlogResponse>
) {
  const { id } = req.body;
  if(!id) return res.status(500).json({code: 1, text: "Incorrect post data", prompt: "Check sent post data"} as ErrorResponse);
  return res.status(200).json(await blogModel.findOneAndRemove({_id: id}) as BlogResponse);
}
