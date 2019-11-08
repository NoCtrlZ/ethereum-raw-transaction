const TxRelay = artifacts.require("TxRelay");

module.exports = function(deployer) {
  deployer.deploy(TxRelay);
};
