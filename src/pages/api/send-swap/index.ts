import { NextApiRequest, NextApiResponse } from 'next';
import { ethers } from 'hardhat';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { fromCoin, toCoin, amount, gasFee } = req.body;

  try {
    const provider = ethers.provider;
    const signer = (await ethers.getSigners())[0];

    const fromCoinContract = await ethers.getContractAt(fromCoinABI, fromCoinAddress);
    const toCoinContract = await ethers.getContractAt(toCoinABI, toCoinAddress);

    await fromCoinContract.connect(signer).approve('0x...', amount);

    await thirdPartyContract.connect(signer).convert(fromCoinAddress, toCoinAddress, amount, { gasLimit: gasFee });

    const receipt = await provider.getTransactionReceipt(receipt.transactionHash);

    res.json({ response: 'Conversion successful', receipt });
  } catch (error) {
    res.status(500).json({ response: 'Conversion failed', error: error.message });
  }
}
