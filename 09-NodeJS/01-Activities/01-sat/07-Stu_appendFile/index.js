var fs = require("fs");

//fs.appendFile("name of new file.txt", "data that will be written into file from console[at the index of]", (error) => {

// })
let data = "don't repeat yourself!";
let obj = {
    
}

    for(i = 0; i < 1000; i++) {
        try {
            fs.appendFile("readme.md", data, "utf8", (err) => {
                if (err) throw err
            })
        }
        catch(err) {
            console.log("no one will ever see this!")
        }    
    }

// fs.appendFile("log.txt", process.argv[2] + '\n', function (err) {

//     if (err) {
//         return console.log(err);
//     }

//     console.log("Success!");

// });
