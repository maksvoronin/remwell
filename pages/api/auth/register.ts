import { adminModel } from "@/models";
import { AuthResponse, ErrorResponse } from "@/types";
import { NextApiRequest, NextApiResponse } from "next";
import { v4 } from "uuid";
import {hash} from "bcrypt";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<AuthResponse | ErrorResponse>
) {
  const { name, login, password, token } = req.body;

  
  if(!name || !login || !password || !token) return res.status(500).json({code: 1, text: "Incorrect post data", prompt: "Check sent post data"} as ErrorResponse);
  const checkAdmin = await adminModel.findOne({ token });
  if (!checkAdmin && token !== process.env.SECRET_REG_TOKEN)
    return res
      .status(404)
      .json({
        code: 3,
        text: "Admin not found",
        prompt: "Check token",
      } as ErrorResponse);
  
  const admin = await adminModel.create({name, login, password: await hash(password, 3), token: v4()});
  return res.status(201).json(admin);
}
