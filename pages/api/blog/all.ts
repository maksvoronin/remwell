import { BlogResponse } from "@/types";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<BlogResponse[]>
) {
  res.status(200).json([
    
  ]);
}
