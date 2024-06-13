// import testing libraries: https://www.chaijs.com/guide/styles/
const { expect, assert } = require("chai");
const hre = require("hardhat");

// the `describe` scope encapsulates an entire test called `TestModifyVariable`
// the `it` says the behavior that should be expected from the test
describe("TestModifyVariable", function () {
  it("should change x to 1337", async function () {
    // this line creates an ethers ContractFactory abstraction: https://docs.ethers.org/v5/api/contract/contract-factory/
    const ModifyVariable = await hre.ethers.getContractFactory(
      "ModifyVariable"
    );

    // we then use the ContractFactory object to deploy an instance of the contract
    const contract = await ModifyVariable.deploy(10);

    // modify x from 10 to 1337 via this function!
    await contract.modifyToLeet();
    // getter for state variable x
    const newX = await contract.x();
    assert.equal(newX, 1337);

    let message = await contract.message();
    assert.equal(message, "");
    const inputMessage = "Hello World!";
    await contract.setMessage(inputMessage);
    message = await contract.message();
    assert.equal(message, inputMessage);
  });
});
