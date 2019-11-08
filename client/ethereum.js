const ethers = require('ethers');
const utils = ethers.utils;
const newMessage = "update message"

let privateKey = "0x3141592653589793238462643383279502884197169399375105820974944592"
let wallet = new ethers.Wallet(privateKey)

console.log(wallet.address)

let transaction = {
    nonce: 1000,
    gasLimit: 21000,
    gasPrice: utils.bigNumberify("20000000000"),
    to: "0x88a5C2d9919e46F883EB62F7b8Dd9d0CC45bc290",
    value: utils.parseEther("1.0"),
    data: "0x",
    chainId: ethers.utils.getNetwork('homestead').chainId
}

console.log(transaction)

let signPromise = wallet.sign(transaction)
console.log("success" + signPromise)

signPromise.then((rawTransaction) => {

    console.log(rawTransaction);

    let tx = ethers.utils.parseTransaction(rawTransaction);

    console.log(tx)

})