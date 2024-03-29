import { adminModel, feedbackModel } from "@/models";
import { FeedbackResponse, ErrorResponse } from "@/types";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ErrorResponse | FeedbackResponse>
) {
  const { id, name, score, text, token } = req.body;
  if (!id || !token)
    return res.status(500).json({
      code: 1,
      text: "Incorrect post data",
      prompt: "Check sent post data",
    } as ErrorResponse);

  const feedback = await feedbackModel.findOne({ _id: id });

  if (!feedback)
    return res
      .status(404)
      .json({ code: 2, text: "Feedback not found" } as ErrorResponse);
  const admin = await adminModel.findOne({ token });
  if (!admin)
    return res
      .status(404)
      .json({
        code: 3,
        text: "Admin not found",
        prompt: "Check token",
      } as ErrorResponse);
  if (name) feedback.name = name;
  if (score) feedback.score = score;
  if (text) feedback.text = text;
  await feedback.save();
  return res.status(201).json(feedback);
}
