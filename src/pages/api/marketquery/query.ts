const query = `query ShowNFTs {
  TokenBalances(
    input: {filter: {owner: {_in: ["vitalik.eth"]}, tokenType: {_in: ["ERC1155", "ERC721"]}}, blockchain: "ethereum", limit: 10}
  ) {
    TokenBalance {
      owner {
        addresses
      }
      tokenNfts {
        address
        tokenId
        blockchain
        contentValue {
          image {
            original
          }
        }
      }
    }
  }
}
`;

const airstack_response = {
    "data": {
      "TokenBalances": {
        "TokenBalance": [
          {
            "owner": {
              "addresses": [
                "0xd8da6bf26964af9d7eed9e03e53415d37aa96045"
              ]
            },
            "tokenNfts": {
              "address": "0xd4416b13d2b3a9abae7acd5d6c2bbdbe25686401",
              "tokenId": "108244028008414188192241270896046519467701436351604907466305987368923837264097",
              "blockchain": "ethereum",
              "contentValue": {
                "image": null
              }
            }
          },
          {
            "owner": {
              "addresses": [
                "0xd8da6bf26964af9d7eed9e03e53415d37aa96045"
              ]
            },
            "tokenNfts": {
              "address": "0xd4416b13d2b3a9abae7acd5d6c2bbdbe25686401",
              "tokenId": "89094620888827421098946748339754680842046301495335958078882298107230095395851",
              "blockchain": "ethereum",
              "contentValue": {
                "image": {
                  "original": "https://assets.airstack.xyz/image/nft/1/0xd4416b13d2b3a9abae7acd5d6c2bbdbe25686401/89094620888827421098946748339754680842046301495335958078882298107230095395851/original_image.svg"
                }
              }
            }
          },
          {
            "owner": {
              "addresses": [
                "0xd8da6bf26964af9d7eed9e03e53415d37aa96045"
              ]
            },
            "tokenNfts": {
              "address": "0xb9d5551a31ceeb95e58180583262164012728c16",
              "tokenId": "142",
              "blockchain": "ethereum",
              "contentValue": {
                "image": {
                  "original": "https://assets.airstack.xyz/image/nft/1/0xb9d5551a31ceeb95e58180583262164012728c16/142/original_image.png"
                }
              }
            }
          },
          {
            "owner": {
              "addresses": [
                "0xd8da6bf26964af9d7eed9e03e53415d37aa96045"
              ]
            },
            "tokenNfts": {
              "address": "0xb9d5551a31ceeb95e58180583262164012728c16",
              "tokenId": "143",
              "blockchain": "ethereum",
              "contentValue": {
                "image": {
                  "original": "https://assets.airstack.xyz/image/nft/1/0xb9d5551a31ceeb95e58180583262164012728c16/143/original_image.png"
                }
              }
            }
          },
          {
            "owner": {
              "addresses": [
                "0xd8da6bf26964af9d7eed9e03e53415d37aa96045"
              ]
            },
            "tokenNfts": {
              "address": "0xb9d5551a31ceeb95e58180583262164012728c16",
              "tokenId": "144",
              "blockchain": "ethereum",
              "contentValue": {
                "image": {
                  "original": "https://assets.airstack.xyz/image/nft/1/0xb9d5551a31ceeb95e58180583262164012728c16/144/original_image.png"
                }
              }
            }
          },
          {
            "owner": {
              "addresses": [
                "0xd8da6bf26964af9d7eed9e03e53415d37aa96045"
              ]
            },
            "tokenNfts": {
              "address": "0xc84ac7bf8b4cec60d82fb93dfb61b03d5e4acd39",
              "tokenId": "1953",
              "blockchain": "ethereum",
              "contentValue": {
                "image": {
                  "original": "https://assets.airstack.xyz/image/nft/1/0xc84ac7bf8b4cec60d82fb93dfb61b03d5e4acd39/1953/original_image.png"
                }
              }
            }
          },
          {
            "owner": {
              "addresses": [
                "0xd8da6bf26964af9d7eed9e03e53415d37aa96045"
              ]
            },
            "tokenNfts": {
              "address": "0x4b59cc984b5ad15515d19d65aa39bd3e1dc98d59",
              "tokenId": "7",
              "blockchain": "ethereum",
              "contentValue": {
                "image": {
                  "original": "https://assets.airstack.xyz/image/nft/1/0x4b59cc984b5ad15515d19d65aa39bd3e1dc98d59/7/original_image.png"
                }
              }
            }
          },
          {
            "owner": {
              "addresses": [
                "0xd8da6bf26964af9d7eed9e03e53415d37aa96045"
              ]
            },
            "tokenNfts": {
              "address": "0x495f947276749ce646f68ac8c248420045cb7b5e",
              "tokenId": "48688518591513811856886075119908772777411620164594097433474354441700220338177",
              "blockchain": "ethereum",
              "contentValue": {
                "image": {
                  "original": "https://assets.airstack.xyz/image/nft/1/0x495f947276749ce646f68ac8c248420045cb7b5e/48688518591513811856886075119908772777411620164594097433474354441700220338177/original_image.png"
                }
              }
            }
          },
          {
            "owner": {
              "addresses": [
                "0xd8da6bf26964af9d7eed9e03e53415d37aa96045"
              ]
            },
            "tokenNfts": {
              "address": "0x7f6e03d0c56a51bbee3e45201db6e7b496da4ea6",
              "tokenId": "1",
              "blockchain": "ethereum",
              "contentValue": {
                "image": {
                  "original": "https://assets.airstack.xyz/image/nft/1/0x7f6e03d0c56a51bbee3e45201db6e7b496da4ea6/1/original_image.png"
                }
              }
            }
          },
          {
            "owner": {
              "addresses": [
                "0xd8da6bf26964af9d7eed9e03e53415d37aa96045"
              ]
            },
            "tokenNfts": {
              "address": "0xd4416b13d2b3a9abae7acd5d6c2bbdbe25686401",
              "tokenId": "113962339922605038952398542560295103658755529774171739254669443553427356386098",
              "blockchain": "ethereum",
              "contentValue": {
                "image": null
              }
            }
          }
        ]
      }
    }
  }

  const graph_query1 = `{
    projects(first: 5) {
      id
      ipfsHash
      name
      description
    }
    categories(first: 5) {
      id
      description
      imageHash
      imageUrl
    }
  }`

  const graph_response = `{
    "data": {
      "projects": [
        {
          "id": "0x001bef8a4b2e04bebf7ebeadadca81334f00ba45",
          "ipfsHash": "Qmd3HKscKBKQ7h9vDjzCgNLLfZDvGHtT31LoNgm6YPPS7J",
          "name": "Bankroll Network",
          "description": "The Bankroll Network is a decentralized blockchain economy that is sustainable, permissionless, and provides high rates of return with low risk."
        },
        {
          "id": "0x0025653cfa7e37b06d395f91b941bae9b0b7e15b",
          "ipfsHash": "QmbEPHe4XMS74KjKSLL63XNpMHxrxzUMn8WrayUkyzaL4k",
          "name": "glassnode",
          "description": "Glassnode is a blockchain data and intelligence provider that generates innovative on-chain metrics and tools for digital asset stakeholders."
        },
        {
          "id": "0x004562dccac3cb8461a6973d418e391ea199b36d",
          "ipfsHash": "QmWaeDb5Nrntx9sAX42dkBnsveYXgQSKzijAyeekCgwyFg",
          "name": "Metal Pay",
          "description": "Make money better by using crypto."
        },
        {
          "id": "0x004e8277551ebea4f22ed278269d153ba48d08f5",
          "ipfsHash": "QmNrsXf9au1BfyGfAVvZZDWvoA7Jg4zLuxG3GvVMGM2UfH",
          "name": "Educoin",
          "description": "The EduCoin Platform is designed to be a blockchain-based decentralized global education service platform which facilitates the distribution of education contents and completion of education service transactions through its native digital cryptocurrency named EDU."
        },
        {
          "id": "0x009bc18d0eff1bcc1018ec877dc9772d48cc01db",
          "ipfsHash": "QmcpV2zEtgJjSEfnFmAbDKLSoZZEfK66iFxZFyypxukWHN",
          "name": "Quant network",
          "description": "Quant is the Blockchain operating system for the future.\nQuant network mission is to interconnect the world’s networks to blockchain and make this technology accessible to all."
        }
      ],
      "categories": [
        {
          "id": "0x00b02151c6c591309ba75beca3975f144774219e",
          "description": "Web and mobile browsers providing access to Web3.",
          "imageHash": "QmREHNxCycZzrYE84KqbsSbjpEQBCP79qJHUGgniBGvRPN",
          "imageUrl": "https://api.thegraph.com/ipfs/api/v0/cat?arg=QmREHNxCycZzrYE84KqbsSbjpEQBCP79qJHUGgniBGvRPN"
        },
        {
          "id": "0x0708e6d866ac9e0a226dc62cfaf105ef6c5c74e2",
          "description": "Lending and borrowing cryptocurrencies, tokens and stablecoins, as well as debt markets, collateral tokenization, margin calls, leverage and more.",
          "imageHash": "QmS7eHcH7Zf6icxw4hmZBwu3mZ7fnr2bMrkyBo2quy9v2e",
          "imageUrl": "https://api.thegraph.com/ipfs/api/v0/cat?arg=QmS7eHcH7Zf6icxw4hmZBwu3mZ7fnr2bMrkyBo2quy9v2e"
        },
        {
          "id": "0x0abfde6070020295c852acfc669aac63bf45250e",
          "description": "Centralized and decentralized exchanges, and liquidity networks that facilitate trading and selling digital assets.",
          "imageHash": "Qmad71iyZdhusZiEqdH6DHhLyLU3cMAJDox98bJpdnH74P",
          "imageUrl": "https://api.thegraph.com/ipfs/api/v0/cat?arg=Qmad71iyZdhusZiEqdH6DHhLyLU3cMAJDox98bJpdnH74P"
        },
        {
          "id": "0x0f660ae40d2769a13ab7f32560cd624e060d056b",
          "description": "Sports applications related to sporting games, activities, events and services including betting, statistics, and fantasy sports.",
          "imageHash": "QmcyK2ZsozM6TV9g4eeYkrqSFSYbtVs47oJPbpxx9D7hm3",
          "imageUrl": "https://api.thegraph.com/ipfs/api/v0/cat?arg=QmcyK2ZsozM6TV9g4eeYkrqSFSYbtVs47oJPbpxx9D7hm3"
        },
        {
          "id": "0x1589ade9587c05b428294132451e6ce80bcd42a8",
          "description": "Projects focused on Other sectors or services that are not listed.",
          "imageHash": "QmRVLrqR2dyvJbBGpzDP3Dz2eysDhnXZo9GQv7eb9e6SNM",
          "imageUrl": "https://api.thegraph.com/ipfs/api/v0/cat?arg=QmRVLrqR2dyvJbBGpzDP3Dz2eysDhnXZo9GQv7eb9e6SNM"
        }
      ]
    }
  }`