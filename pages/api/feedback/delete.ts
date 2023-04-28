import { feedbackModel } from "@/models";
import { FeedbackResponse, ErrorResponse } from "@/types";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ErrorResponse | FeedbackResponse>
) {
  const { id } = req.body;
  if(!id) return res.status(500).json({code: 1, text: "Incorrect post data", prompt: "Check sent post data"} as ErrorResponse);
  return res.status(200).json(await feedbackModel.findOneAndRemove({_id: id}) as FeedbackResponse);
}
