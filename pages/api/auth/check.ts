import { adminModel } from "@/models";
import { AuthResponse, ErrorResponse } from "@/types";
import { NextApiRequest, NextApiResponse } from "next";
import { v4 } from "uuid";
import {hash} from "bcrypt";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<AuthResponse | ErrorResponse>
) {
  const { token } = req.query;

  if(!token) return res.status(500).json({code: 1, text: "Incorrect post data", prompt: "Check sent post data"} as ErrorResponse);

  const admin = await adminModel.findOne({token});
  if(!admin) return res.status(404).json({code: 3, text: "Admin not found", prompt: "Check token"} as ErrorResponse);
  return res.status(201).json(admin);
}
