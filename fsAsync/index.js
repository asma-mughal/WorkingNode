const fs = require('fs')
//fs.writeFile('read.txt', "Today is Sleepy day")
//whenever you are using async calls you must use callback. cb stands for - callback
//i
fs.writeFile("read.txt", "A random day with errors", function(err) {
    if (err) {
        console.error(err);
    } else {
        console.log("File written successfully");
    }

});
fs.appendFile("read.txt", "exsistensial Crises I am having",  (err) => {
    if (err) {
        console.log(err)
    }
    else {
        console.log("Appended successfully")
    }
})
fs.readFile("read.txt", "UTF-8",  (err, data) => {
    if (err) {
        console.log(err)
    }
    else {
        console.log(data)
    }
})