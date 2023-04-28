import {feedbackModel} from "@/models";
import { FeedbackResponse } from "@/types";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<FeedbackResponse[]>
) {
  const feedbacks: FeedbackResponse[] = await feedbackModel.find({}, {__v: 0});
  return res.json(feedbacks);
}
