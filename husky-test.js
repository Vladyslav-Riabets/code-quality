// Bad code for Husky test

// const sum=(a,b)=>{
//   const unused = 123
//   if(a == b){
//     return a + b
//   }
//   return a - b
// }

// console.log("Result is: " + sum(10,"10"))

// Fixed

const sum = (a, b) => {
	const unused = 123;
	if (a === b) {
		return a + b;
	}
	return a - b;
};

console.log('Result is: ' + sum(10, '10'));
