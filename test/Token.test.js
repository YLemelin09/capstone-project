const Token = artifacts.require("./Token")

require("chai")
    .use(require("chai-as-promised"))
    .should()

contract("Token", ([deployer, receiver]) => {
    const name = 'Revok token'
    const symbol = 'RVK'
    const decimals = "18"
    const supply = "1000000000000000000000000"
    let token
  
    beforeEach(async () => {
      token = await Token.new()
    })

    describe("deployment", () => {
        it("tracks the name", async () => {
           const result = await token.name()
           result.should.equal(name)
        })

        it("tracks the symbol", async () => {
            const result = await token.symbol()
            result.should.equal(symbol) 
         })

         it("tracks the decimals", async () => {
            const result = await token.decimals()
            result.toString().should.equal(decimals)
         })

         it("tracks the total supply", async () => {
            const result = await token.totalSupply()
            result.toString().should.equal(supply)
         })

         it('assigns the total supply to the deployer', async ()  => {
            const result = await token.balanceOf(deployer)
            result.toString().should.equal(supply)
          })

          it('assigns the total supply to the deployer', async ()  => {
            const result = await token.balanceOf(deployer)
            result.toString().should.equal(supply)
          })
    })

    describe('Sending tokens', () => {
       it('transfers token balance', async () => {
         let balanceOf
         balanceOf =  await token.balanceOf(deployer)
         console.log('deployer balance before transfer', balanceOf)
         balanceOf = await token.balanceOf(receiver);
         console.log('receiver balance before transfer', balanceOf.toString())

         await token.transfer(receiver, '100000000000000000000', {from: deployer})
         balanceOf =  await token.balanceOf(deployer)
         console.log('deployer balance after transfer', balanceOf)
         balanceOf = await token.balanceOf(receiver);
         console.log('receiver balance after transfer', balanceOf.toString())
       })
    })
})