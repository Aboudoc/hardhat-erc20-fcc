const { network } = require("hardhat")
const { developmentChains, INITAL_SUPPLY } = require("../helper-hardhat-config")
const { verify } = require("../utils/verify")

module.exports = async function ({ getNamedAccounts, deployments }) {
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()

    log("Deploying...")

    const ourToken = await deploy("OurToken", {
        from: deployer,
        args: [INITAL_SUPPLY],
        log: true,
        waitConfirmations: network.config.blockConfirmations || 1,
    })
    log("Deployed!")

    if (!developmentChains.includes(network.name) && process.env.ETHERSCAN_API_KEY) {
        log("Verifying...")
        await verify(ourToken.address, [INITAL_SUPPLY])
    }
    log("--------------------------------------")
}
module.exports.tags = ["all", "token"]
