const { ecc, utils } = require('../src')

const configKey = ecc.newKeys()
console.log('configKey: ', configKey)
const pub = ecc.toPublicKey(configKey.privateKey)
console.log(pub)
console.log(ecc.toAddress(pub))

// console.log(ecc.newKeyPair())
// console.log(ecc.newKeyPairWithAddress())

ecc.validateAddress('ylgr0ku7vpl3xv38yf59w7hdc2u8rd2ttw04kyen2g8')

console.log(utils.newAccount())
