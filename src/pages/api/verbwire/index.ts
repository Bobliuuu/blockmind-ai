import { type NextApiRequest, type NextApiResponse } from "next";
import { sdk } from 'api';

export default function handler(req: NextApiRequest, res: NextApiResponse) {

  sdk.postNftMintMintfrommetadataurl({
    quantity: '1',
    chain: 'goerli',
    allowPlatformToOperateToken: 'true'
  }, {accept: 'application/json'})
    .then(({ data }) => console.log(data))
    .catch(err => console.error(err));
  res.json({ response: "Hello World" });
}
