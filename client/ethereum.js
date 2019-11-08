const axios = require('axios')
const ethers = require('ethers');
require('dotenv').config()
const utils = ethers.utils;
const newMessage = "update message"

let privateKey = process.env.USER_PRIVATEKEY
let wallet = new ethers.Wallet(privateKey)

console.log(wallet.address)

let transaction = {
    to: process.env.CONTRACT_ADDRESS,
    value: 0,
    nonce: 1000, // nonce must match the one at TxRelay contract
    gas: 2000000,
    gasPrice: 2000000,
    gasLimit: 2000000
}

let signPromise = wallet.sign(transaction)

signPromise.then((rawTransaction) => {

    console.log(rawTransaction);

    let tx = ethers.utils.parseTransaction(rawTransaction);

    console.log(tx)

})

axios.post('http://localhost:3000/meta', {
    txdata: "txdata",
    from: "account_x",
    to: "account_y",
    msg: "message",
    signature: "signature"
})