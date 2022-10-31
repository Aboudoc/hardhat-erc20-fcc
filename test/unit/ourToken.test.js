const { getNamedAccounts, deployments, ethers } = require("hardhat")
const { assert } = require("chai")
const { INITAL_SUPPLY } = require("../../helper-hardhat-config")

describe("OurToken", function () {
    let deployer, ourToken
    beforeEach(async function () {
        deployer = getNamedAccounts().deployer
        await deployments.fixture("all")
        ourToken = await ethers.getContract("OurToken", deployer)
    })
    it("was deployed", async function () {
        assert(ourToken.address)
    })

    describe("contructor", function () {
        it("set the initial supply correctly", async function () {
            const totalSupply = await ourToken.totalSupply()
            assert.equal(totalSupply.toString(), INITAL_SUPPLY)
        })
        it("sets the name of token", async function () {
            const nameToken = (await ourToken.name()).toString()
            assert.equal(nameToken, "OurToken")
        })
        it("set the symbol of token", async function () {
            const symbolToken = (await ourToken.symbol()).toString()
            assert.equal(symbolToken, "OT")
        })
    })
})
