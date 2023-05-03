import { adminModel, feedbackModel } from "@/models";
import { FeedbackResponse, ErrorResponse } from "@/types";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ErrorResponse | FeedbackResponse>
) {
  const { name, score, text, token } = req.body;
  if (!name || !score || !text || !token)
    return res
      .status(500)
      .json({
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
    .json(await feedbackModel.create({ name, score, text }));
}
