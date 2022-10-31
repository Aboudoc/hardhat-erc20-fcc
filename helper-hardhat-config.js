const networkConfig = {
    5: {
        name: "goerli",
    },
    31337: {
        name: "hardhat",
    },
}

const developmentChains = ["hardhat", "localhost"]
const INITAL_SUPPLY = "1000000000000000000000000"

module.exports = { networkConfig, developmentChains, INITAL_SUPPLY }
