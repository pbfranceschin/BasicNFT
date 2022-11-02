const { ethers } = require("ethers");
const fs = require("fs");
require("dotenv").config();

const nftJson = JSON.parse(fs.readFileSync('./artifacts/contracts/NFT.sol/MolpecNFT.json'));



const network = "goerli";
const tokenURI = "ipfs://QmVoC7H9JdTFb1hfJqusS4QgGUtEW7P6pzrd6weFvc5Ysg";

async function main() {

    //setting the provider
    const provider = ethers.getDefaultProvider(network, { 
        alchemy: process.env.ALCHEMY_API_KEY
    });

    //creating a signer
    const signer = new ethers.Wallet(
        process.env.GOERLI_PRIVATE_KEY,
        provider
        );

    //creating the contact instance
    const contract = new ethers.Contract(
        process.env.CONTRACT_ADDRESS, 
        nftJson.abi, 
        signer
        );

    //issuing tx that calls safeMint method
    const tx = await contract.safeMint(
        process.env.ETH_ACCOUNT ,
        tokenURI
        );
    const txReceipt = await tx.wait();
    console.log(
        `NFT minted to ${txReceipt.to} in tx ${txReceipt.transactionHash} at block ${txReceipt.blockNumber}`
        );

}

main();

