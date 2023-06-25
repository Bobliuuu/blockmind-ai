import { PrismaClient } from "@prisma/client";
import { type NextApiRequest, type NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
  // const messages = await prisma.messages.findMany();
  // res.json(messages);
}
