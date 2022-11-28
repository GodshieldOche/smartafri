import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { cookies } = req;

  const smartToken = cookies.smartToken;

  res.status(200).json({ token: smartToken });
}
