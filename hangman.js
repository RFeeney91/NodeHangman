var inquirer = require('inquirer');

/*  Need an array that has the words that will be guess by the user*/

//constructor that creates out word objects

function Words(name) {
	this.name = name;
}

// creates the printInfo method and applies it to all programmer objects

Words.name.prototype.printInfo = function() {
	console.log("Name:" + this.name);
};

inquirer.prompt([/* Pass your questions in here */
	{
		name: "Guess",
		message: "Guess a Letter."
	}, {
		name: "Guess Again"
		message: "Guess Again"
	} ]).then(function (answers) {
    // Use user feedback for... whatever!!
    var newWord = new Words(answers.name);

    newWord.printInfo();
});