var fs = require("fs");

//fs.writeFile("name of new file.txt", "data that will be written into file from console[at the index of]", (error) => {

// })
fs.writeFile("log.txt", process.argv[3], function(err) {

  if (err) {
    return console.log(err);
  }

  console.log("Success!");

});
