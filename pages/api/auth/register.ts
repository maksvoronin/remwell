import { adminModel } from "@/models";
import { AuthResponse, ErrorResponse } from "@/types";
import { NextApiRequest, NextApiResponse } from "next";
import { v4 } from "uuid";
import {hash} from "bcrypt";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<AuthResponse | ErrorResponse>
) {
  const { name, login, password } = req.body;

  if(!name || !login || !password) return res.status(500).json({code: 1, text: "Incorrect post data", prompt: "Check sent post data"} as ErrorResponse);

  const admin = await adminModel.create({name, login, password: await hash(password, 3), token: v4()});
  return res.status(201).json(admin);
}
