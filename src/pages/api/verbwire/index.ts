import { type NextApiRequest, type NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const sdk = require('api')('@verbwire/v1.0#g4z182klj3bh6g6');

  sdk.postNftMintMintfrommetadataurl({
    quantity: '1',
    chain: 'goerli',
    allowPlatformToOperateToken: 'true'
  }, {accept: 'application/json'})
    .then(({ data }) => console.log(data))
    .catch(err => console.error(err));
  res.json({ response: "Hello World" });
}
