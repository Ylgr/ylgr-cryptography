const { ecc, utils } = require('../src')

const configKey = ecc.newKeys()
console.log('configKey: ', configKey)
const pub = ecc.toPublicKey(configKey.privateKey)
console.log(pub)
console.log(ecc.toAddress(pub))

// console.log(ecc.newKeyPair())
// console.log(ecc.newKeyPairWithAddress())

ecc.validateAddress('teat0kqzhu4q70u9fwqz8fakqple0lskj4kqkg5yvus')

console.log(utils.newAccount())
