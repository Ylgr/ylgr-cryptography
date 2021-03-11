const { ecc, utils, codec } = require('../src')

const bankAccount = utils.newBankAccount()

// console.log('bankAccount: ', bankAccount)
// console.log('privateKey: ', codec.toKeyString(bankAccount.privateKey))

console.log(ecc.validateAddress(bankAccount.address))

const regularAccount = utils.newRegularAccount()

// console.log('regularAccount: ', regularAccount)
// console.log('privateKey: ', codec.toKeyString(regularAccount.privateKey))

console.log(ecc.validateAddress(regularAccount.address))
