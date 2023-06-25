import axios from "axios";
import { type NextApiRequest, type NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  setTimeout(() => {
    const input = req.body.input as string;
    if (input.includes("mint")) {
      res.json({
        url: "/dashboard/studio",
        response: "What's your wallet address?",
      });
    } else if (input.includes("0x")) {
      res.json({
        response:
          "There are third-party projects and initiatives, such as the Solana NFT standards like Candy Machine or Metaplex, that provide frameworks and tools for creating NFTs on the Solana blockchain.<br>To mint an NFT on Solana using such frameworks, you would typically follow these steps:<br>Set up your development environment: Install the Solana command-line tool (solana-cli), set up a Solana wallet, and configure your development environment.<br>Create your NFT metadata: Prepare the metadata for your NFT, including information like the name, description, image URI, and any additional attributes or properties you want to associate with the NFT.<br>Configure your NFT project: Depending on the framework you choose, you may need to set up your project, define any necessary configurations, and specify your wallet address (0x8a73596507BFd153114c2A9B890A03d72DDc0FFB in your case) as the minting authority.<br>Mint the NFT: Utilize the provided minting functions or scripts in the framework to mint your NFT. This typically involves specifying the recipient address, metadata URI, and any additional properties or royalties associated with the NFT. ",
        url: "/dashboard/studio",
      });
    } else if (input.includes("safe")) {
      res.json({
        response:
          "Based on the provided code, there are several observations and concerns regarding the safety and reliability of the smart contract:<br><br>Lack of comprehensive documentation: The code lacks detailed comments and explanations, making it difficult to understand the intended functionality and purpose of certain sections.<br><br>Dependency on external contracts and interfaces: The contract relies on external contracts such as the UniswapV2Factory and UniswapV2Router02 interfaces. The correctness and security of the contract would also depend on the security and reliability of these external contracts.<br><br>Lack of input validation: The contract does not perform input validation or sanity checks on certain variables or function parameters. This could potentially lead to unexpected behavior or vulnerabilities.<br><br>Lack of access control: Apart from the owner-related functions, the contract does not implement access control mechanisms for critical functions. This may expose the contract to potential security risks.<br><br>Use of deprecated Solidity version: The contract is written in Solidity version 0.8.7, which may not include the latest security patches and features. It's generally recommended to use the latest stable version of Solidity to benefit from improvements and security enhancements.<br><br>Limited testing and auditing: The provided code does not contain information about extensive testing or external audits. Conducting thorough testing and obtaining security audits are crucial steps to ensure the reliability and safety of a smart contract. ",
      });
    } else if (input.includes("write")) {
      res.json({
        response:
          'pragma solidity ^0.8.0;<br><br>contract EthTransfer {<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspfunction sendEth(address payable _recipient) external {<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspprequire(address(this).balance >= 1 ether, "Insufficient balance in the contract");<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp_recipient.transfer(1 ether);<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp}<br>}',
      });
    } else if (input.includes("swap")) {
      res.json({
        url: "/dashboard/send-swap",
        response:
          "To swap 1 ETH to DAI, you would typically use a decentralized exchange (DEX) or a centralized exchange that supports the trading pair ETH/DAI. Here, I'll provide you with an example of how you can perform this swap using a decentralized exchange like Uniswap on the Ethereum network.<br><br>Set up a wallet: Make sure you have a wallet that supports interacting with decentralized exchanges and allows you to hold both ETH and DAI. Examples include MetaMask, MyEtherWallet, or Trust Wallet. Set up your wallet and ensure you have both ETH and DAI in your wallet.<br><br>Access Uniswap: Visit the Uniswap interface at https://app.uniswap.org or use a similar DEX that supports the ETH/DAI trading pair.<br><br>Connect your wallet: Connect your wallet to the DEX interface. Follow the instructions provided by the wallet provider to connect your wallet and grant the necessary permissions to interact with the DEX.<br><br>Select the trading pair: On the Uniswap interface, select the ETH/DAI trading pair. Ensure that you have sufficient ETH in your wallet for the swap.<br><br>Set up the swap: In the swap interface, enter the amount of ETH you want to swap. Make sure you specify that you want to swap ETH for DAI. The interface should display the estimated amount of DAI you will receive based on the current exchange rate and any associated fees.<br><br>Confirm the swap: Review the details of the swap, including the estimated amount of DAI you will receive and any fees involved. If you are satisfied, confirm the swap and proceed with the transaction.<br><br>Confirm the transaction: Depending on your wallet and the DEX interface, you may be prompted to confirm the transaction. Review the transaction details and approve the transaction to initiate the swap.<br><br>Wait for confirmation: After confirming the transaction, you will need to wait for the transaction to be processed and confirmed on the Ethereum network. This may take a few moments, so be patient.<br><br>Verify the swap: Once the transaction is confirmed, you can check your wallet balance to see that the DAI tokens have been added to your wallet. You have now successfully swapped 1 ETH to DAI.",
      });
    } else {
      void axios
        .get(`http://localhost:5000?prompt=${input}`)
        .then((response) => {
          res.json({
            response: response.data,
          });
        });
    }
  }, 3000);
}
