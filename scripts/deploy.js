// We require the Hardhat Runtime Environment explicitly here. This is optional 
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");
const fs = require('fs');

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  console.log(
    "Deploying contracts with the account:",
    deployer.address
  );
  
  const ConsensusRugPull = await hre.ethers.getContractFactory("ConsensusRugPull");
  const consensusRugPull = await ConsensusRugPull.deploy();
  await consensusRugPull.deployed();

  console.log("ConsensusRugPull deployed to:", consensusRugPull.address);

  let config = `
  export const consensusRugPull = "${consensusRugPull.address}"
  `;

  let data = JSON.stringify(config);
  fs.writeFileSync('./src/config.js', JSON.parse(data));

  // const abiDir = __dirname + "./src/constants/abi";

  // if (!fs.existsSync(abiDir)) {
  //   fs.mkdirSync(abiDir);
  // }

  // const artifact = JSON.stringify(consensusRugPull.readArtifactSync(ConsensusRugPull).abi);

  // fs.writeFileSync(
  //   abiDir + "/" + consensusRugPull + ".json",
  //   artifact
  // );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
