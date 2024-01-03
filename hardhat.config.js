
/* global ethers task */
require('@nomiclabs/hardhat-waffle')
require("hardhat-gas-reporter");
require("@nomiclabs/hardhat-etherscan");


// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task('accounts', 'Prints the list of accounts', async () => {
  const accounts = await ethers.getSigners()

  for (const account of accounts) {
    console.log(account.address)
  }
})

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: '0.8.17',
  settings: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  },
  networks: {
    goerli: {
        url: `https://goerli.infura.io/v3/c0a66f38237d4553af849a40e689f792`,
        accounts: ["9c53baa607e8f8f31085411f6477e2d4760c36f7b7b182b271467a68c8e70da5"],
    },
    mumbai: {
      url: `https://polygon-mumbai.g.alchemy.com/v2/p01gkte8zAeU2RLRG64Yy1PNOEeTxgWt`,
      accounts: ['9c53baa607e8f8f31085411f6477e2d4760c36f7b7b182b271467a68c8e70da5'],
    }
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: {
      goerli: "YX9FBQ3J3KFW3PCJKAPJQXI78B28HB5QTH",
      polygonMumbai: "94KUUN4CT26178QDZRQBR5W79ADC667IWI",
    },
  },
  gasReporter: {
    enabled: true
  }
}
