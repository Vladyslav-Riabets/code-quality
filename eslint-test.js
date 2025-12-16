// Bad code before ESLint run

// const test=()=> {
// console.log('Hello world')
// switch(1){
// case 1:
// console.log("Bad indent")
// break
// }
// }


// Fixed code with ESLint

const test = ( ) => {
  console.log("Hello world")
  switch(1){
    case 1:
      console.log("Bad indent")
      break
  }
}



