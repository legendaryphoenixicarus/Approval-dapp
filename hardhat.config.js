require("@nomiclabs/hardhat-waffle");
require("hardhat-typechain");
require("@nomiclabs/hardhat-web3");
require('dotenv').config();

const privateKey = process.env.PRIVATE_KEY;
const infuraId = process.env.INFURA_ID;

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337,
    },
    ropsten: {
      url: `https://ropsten.infura.io/v3/${infuraId}`,
      accounts: [process.env.privateKey]
    },
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${infuraId}`,
      accounts: [process.env.privateKey]
    },
    kovan: {
      url: `https://kovan.infura.io/v3/${infuraId}`,
      accounts: [process.env.privateKey]
    }
  },
  solidity: "0.8.3",
};

