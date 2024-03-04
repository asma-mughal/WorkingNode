const fs = require('fs')
const bioData = {
    name: 'Acb',
    age: 12,
    channel:"Nothing"
}
console.log(bioData)
const jsonData = JSON.stringify(bioData)
console.log(jsonData)
fs.writeFile("../fsAsync/read.txt",jsonData, function (err) {
    if (err)
    {console.log('error')
        
    }
    else {
        console.log("File has written successfully")
    }
})

fs.readFile("../fsAsync/read.txt",  "UTF-8",(err, data) => {
    if (err) {
        console.log(err)
    }
    else {
        console.log(data)
    }
})