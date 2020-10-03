var inquirer = require("inquirer");

inquirer
    .prompt([
        {
            type: "input",
            message: "What is your name?",
            name: "username"
        },
        {
            type: "input",
            message: "What languages do you know?",
            name: "language"
        },
        {
            type: "input",
            message: "What is your preferred method of communciation?",
            name: "preferred"
        }
    ])
    .then(function (response) {

        if (response.language === response.preferred) {
            console.log("Success!");
        }
        else {
            console.log("Please enter a language?!");
        }
    });