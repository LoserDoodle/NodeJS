// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

const sayHi = require('./5-utils')
const names = require('./4-names')
const datas = require('./6-data')
require('./7-mind-granade')
sayHi(names.name1)
sayHi(names.name2)
console.log(datas)