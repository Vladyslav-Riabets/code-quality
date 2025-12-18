// Bad code before ESLint run

// const getMessage=(value)=> {
// switch(value){
// case 1:
// console.log('Value is one')
// break
// default:
// console.log("Unknown value")
// }
// }
// getMessage(1)

// Fixed code with ESLint

const getMessage = (value) => {
	switch (value) {
		case 1:
			console.log('Value is one');
			break;
		default:
			console.log('Unknown value');
	}
};
getMessage(1);
