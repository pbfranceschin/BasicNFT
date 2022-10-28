const { ethers } = require("hardhat");
const { expect } = require("chai");

describe("Testing MolpecNFT contract", function () {

    let contractFactory;
    let contract;
    let owner;
    let alice;
    let ownerAddress;
    let aliceAddress;

    const tokenUri = "https://protocol.ai/";

    beforeEach(async () => {
        [owner, alice, bob] = await ethers.getSigners();
        ownerAddress = await owner.getAddress();
        aliceAddress = await alice.getAddress();
        bobAddress = await bob.getAddress();
        contractFactory = await ethers.getContractFactory("MolpecNFT");
        contract = await contractFactory.deploy();
    });
    

    it("Test the name", async function () {
        expect(await contract.name()).to.equal("Molpec");
      });

    it("test mint basic", async function () {
        await contract.connect(alice).safeMint(aliceAddress, tokenUri);
        expect(await contract.ownerOf(0)).to.equal(aliceAddress);
        expect(await contract.tokenURI(0)).to.equal(tokenUri);
    });
    
    it("test limit on mints", async function () {
        await contract.connect(alice).safeMint(aliceAddress, tokenUri);
        await contract.connect(alice).safeMint(aliceAddress, tokenUri);
        await expect(contract.connect(alice).safeMint(aliceAddress, tokenUri)).to.be.revertedWith("Max tokens minted to this address.");
    });


})