import { AuthResponse, ErrorResponse } from "@/types";
import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcrypt"
import { adminModel } from "@/models";
import { v4 } from "uuid";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<AuthResponse | ErrorResponse>
) {
  const {login, password} = req.body;

  if(!login || !password) return res.status(500).json({code: 1, text: "Incorrect post data", prompt: "Check sent post data"} as ErrorResponse);

  const candidate = await adminModel.findOne({login});
  if(!candidate) return res.status(404).json({code: 3, text: "Admin not found", prompt: "Check login"} as ErrorResponse);

  if(await bcrypt.compare(password, candidate.password)) {
    candidate.token = v4();
    return res.status(200).json(await candidate.save());
  } else {
    return res.status(403).json({code: 4, text: "Wrong password", prompt: "Check password"} as ErrorResponse);
  }
}
