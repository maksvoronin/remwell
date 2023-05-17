import { adminModel } from "@/models";
import { AuthResponse, ErrorResponse } from "@/types";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<AuthResponse | ErrorResponse>
) {
  const { id, token } = req.body;

  if(!id || !token) return res.status(500).json({code: 1, text: "Incorrect post data", prompt: "Check sent post data"} as ErrorResponse);
  const checkAdmin = await adminModel.findOne({ token });
  if (!checkAdmin)
    return res
      .status(404)
      .json({
        code: 3,
        text: "Admin not found",
        prompt: "Check token",
      } as ErrorResponse);
  
  const admin = await adminModel.findOneAndDelete({_id: id});
  return res.status(201).json(admin);
}
