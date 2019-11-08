const MessageBox = artifacts.require("MessageBox");

module.exports = function(deployer) {
  deployer.deploy(MessageBox);
};
