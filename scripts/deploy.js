const hre = require("hardhat");

async function main() {
  console.log("Deploying a contract....");
  const HelloWorld = await hre.ethers.getContractFactory("HelloWorld");
  const helloWorld = await HelloWorld.deploy();
  console.log(
    "The contract has been deployed successfully!",
    await helloWorld.getAddress()
  );
}

main().catch((error) => {
  console.log(error);
  process.exitCode = 1;
});
