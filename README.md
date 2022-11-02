# Basic NFT Contract

This Repo uses a basic NFT contract to test and deploy using hardhat.

Here are some basic features of the contract:
- Supply cap of 10 units
- Publicly mintable
- Maximum of 2 mints per address
- ERC721Enumerable and ERC721URIStorage

## Deployment

The contract was deployed to Goerli testnet and can be viewed [here](https://goerli.etherscan.io/address/0x684705f4a1c7cf696ad45e62ea9e28e37a94b530). 

The deployment script can be seen at `scripts/deploy.js`.

## Mint

A script that mints an NFT can be seen at `scripts/mint.js`.

The tx that minted the 1st NFT minted can be seen [here](https://goerli.etherscan.io/tx/0xcbac9bb5c6dbc9cd0516c19e2cf871649cd38b50082ee869ce01edc231e5f284) and the NFT can be viewed at Opensea in this [link](https://testnets.opensea.io/assets/goerli/0x684705f4a1c7cf696ad45e62ea9e28e37a94b530/0).
