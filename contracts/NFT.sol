// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "../node_modules/@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "../node_modules/@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "../node_modules/@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "../node_modules/@openzeppelin/contracts/utils/Counters.sol";

contract MolpecNFT is ERC721, ERC721Enumerable, ERC721URIStorage {
    
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIdCounter;    

    uint256 MAX_SUPPLY = 10;

    uint8 MAX_Mints = 2;

    mapping(address => uint8) TokensMinted;
  
    constructor() ERC721("Molpec", "MPC") {}

    function safeMint(address to, string memory uri)
        public
    {   
        require(_tokenIdCounter.current() <= MAX_SUPPLY, "Hardcap reached. No more mints!");
        require(TokensMinted[to] < MAX_Mints, "Max tokens minted to this address.");
        TokensMinted[to] += 1;
        uint256 tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri);
    }

    // The following functions are overrides required by Solidity.

    function _beforeTokenTransfer(address from, address to, uint256 tokenId)
        internal
        override(ERC721, ERC721Enumerable)
    {
        super._beforeTokenTransfer(from, to, tokenId);
    }

    function _burn(uint256 tokenId) internal override(ERC721, ERC721URIStorage) {
        super._burn(tokenId);
    }

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, ERC721Enumerable)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}