import { adminModel, blogModel } from "@/models";
import { ErrorResponse, BlogResponse } from "@/types";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ErrorResponse | BlogResponse>
) {
  const { id, token } = req.body;
  if(!id || !token) return res.status(500).json({code: 1, text: "Incorrect post data", prompt: "Check sent post data"} as ErrorResponse);
  const admin = await adminModel.findOne({token});
  if(!admin) return res.status(404).json({code: 3, text: "Admin not found", prompt: "Check token"} as ErrorResponse);
  return res.status(200).json(await blogModel.findOneAndRemove({_id: id}) as BlogResponse);
}
