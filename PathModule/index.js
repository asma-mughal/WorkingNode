const path = require('path')
console.log(path.dirname('/Users/Yaseen/Desktop/Asma-React/AsmaCode/PathModule/index.js'))
console.log(path.extname('/Users/Yaseen/Desktop/Asma-React/AsmaCode/PathModule/index.js'))
//To find out the fileName

console.log(path.basename('/Users/Yaseen/Desktop/Asma-React/AsmaCode/PathModule/index.js'))
const filName = (path.parse('/Users/Yaseen/Desktop/Asma-React/AsmaCode/PathModule/index.js'))
console.log(filName.name)