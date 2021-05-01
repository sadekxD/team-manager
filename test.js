var globalVar = "abc";

(function outerFunction(outerArg) {
	// begin of scope outerFunction
	// Variable declared in outerFunction function scope
	var outerFuncVar = "x";
	// Closure self-invoking function
	(function innerFunction(innerArg) {
		// begin of scope innerFunction
		// variable declared in innerFunction function scope
		var innerFuncVar = "y";
		console.log(
			"outerArg = " +
				outerArg +
				"\n" +
				"outerFuncVar = " +
				outerFuncVar +
				"\n" +
				"innerArg = " +
				innerArg +
				"\n" +
				"innerFuncVar = " +
				innerFuncVar +
				"\n" +
				"globalVar = " +
				globalVar
		);
	});
});
// end of scope innerFunction)(5); // Pass 5 as parameter

const mul = (x) => (y) => (z) => x + y + z;

const arr = [1, 2, 34, 4, 56];
arr.length = 0;

const Employee = {
	company: "babar dorbar",
};

const empl = Object.create(Employee);
// delete empl.__proto__.company;
console.log(empl.company);
