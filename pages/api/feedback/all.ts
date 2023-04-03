import { NextApiRequest, NextApiResponse } from "next";

type FeedbackResponse = {
  title: string;
  author: string;
  description: string;
  link: string;
  date: number;
  text: string;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<FeedbackResponse>
) {
}
