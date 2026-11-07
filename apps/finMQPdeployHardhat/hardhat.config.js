require("dotenv").config()  // Load environment variables from .env file at the start

require("@nomicfoundation/hardhat-toolbox");


/** @type import('hardhat/config').HardhatUserConfig */

//const INFURA_API_KEY = process.env.INFURA_API_KEY;
//const PRIVATE_KEY = process.env.PRIVATE_KEY;
//const infuraUrl = `https://goerli.infura.io/v3/${process.env.INFURA_API_KEY}`;
//const url = `https://goerli.infura.io/v3/${INFURA_API_KEY}`;
const {INFURA_API_KEY, PRIVATE_KEY } = process.env;


module.exports = {
  solidity: "0.8.19",
  defaultNetwork: "Goerli",
  networks: {
    hardhat: {},
    Goerli: {
      url: `https://goerli.infura.io/v3/${INFURA_API_KEY}`, // Corrected syntax here
      //accounts: PRIVATE_KEY ? [PRIVATE_KEY] : [],
      accounts: [PRIVATE_KEY],
      chainId: 5,
    },
  },
};






