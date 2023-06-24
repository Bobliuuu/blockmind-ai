import { type NextApiRequest, type NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.json({ response: "Hello World" });
}

// import { type NextApiRequest, type NextApiResponse } from "next";
// import { Configuration, CreateChatCompletionRequest, OpenAIApi, ChatCompletionRequestMessage } from "openai";
// import { OpenAIStream, StreamingTextResponse } from 'ai'
// import { Configuration, OpenAIApi } from 'openai-edge'

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {

//   const openai = new OpenAIApi(
//     new Configuration({ apiKey: process.env.OPENAI_KEY })
//   );

//   const { prompt } = req.query;
//   const message = [
//     { role: "system", content: `You are a smart blockchain assistant.` },
//     {
//       role: "user",
//       content: "What is a smart contract?",
//     },
//     {
//       role: "assistant",
//       content: "A smart contract is a way for developers to learn more about blockchain.",
//     },
//     { role: "user", content: prompt },
//   ];

//   let get_message = async (message: any[]) => {
//     const response = await openai.createChatCompletion({
//       model: "gpt-3.5-turbo",
//       messages: message
//     });

//     if (response.data && response.data.choices && response.data.choices[0] && response.data.choices[0].message) {
//       return response.data.choices[0].message.content;
//     }
//     return "";
//   };

//   let data = await get_message(message);

//   return res.status(200).json({response: data })
// }
