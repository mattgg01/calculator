const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



reader.question("What would you like to calculate?", function(input){
	tokens = input.split(' ');

	num1 = Number(tokens[0]);
	mathSymbol = tokens[1];
	num2 = Number(tokens[2]);



	//if the input calls for addition
	if (mathSymbol === "+"){
		console.log(num1 + num2);
	}



	//if the input calls for subtractopn
	if (mathSymbol === "-"){
		console.log(num1 - num2);	

	}
//if the input calls for multiplication
	if (mathSymbol === "*"){
		console.log(num1 * num2);	

	}


//if the input calls for division
	if (mathSymbol === "/"){
		console.log(num1 / num2);

	}


	//if the input calls for square root
	if (mathSymbol === "sqrt"){
		console.log(Math.sqrt(num1));		
	}

	reader.close()

});