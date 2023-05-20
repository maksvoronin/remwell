import { adminModel, feedbackModel } from "@/models";
import { FeedbackResponse, ErrorResponse } from "@/types";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ErrorResponse | FeedbackResponse>
) {
  const { name, score, text, token } = req.body;
  if (!name || !score || !text)
    return res
      .status(500)
      .json({
        code: 1,
        text: "Incorrect post data",
        prompt: "Check sent post data",
      } as ErrorResponse);
  return res
    .status(201)
    .json(await feedbackModel.create({ name, score, text }));
}
