// the `: number` here specifies that this function returns a number
// function getTime(): number {
//     return new Date().getTime();
//   }
// console.log(getTime())

// const func = (): void => {
//   console.log("hello world")
// }
// func()

// function multiply(a:number, b:number):number {
//   return a * b;
// }
// console.log(multiply(4, 5))

//optional parameter
// function add(a:number, b:number, c?:number){
//   if(c){
//     return a + b + c;
//   }
//   else{
//     return a + b;
//   }
// }
// console.log(add(20,30))
// console.log(add(20,30,40))

//default parameter
// function add(a:number, b:number, c:number=10){
//   if(c){
//     return a + b + c;
//   }
//   else{
//     return a + b;
//   }
// }
// console.log(add(20,30))
// console.log(add(20,30,40))

//named parameter
// function divide({ dividend, divisor }: { dividend: number, divisor: number }) {
//   return dividend / divisor;
// }
// console.log(divide({dividend:10, divisor:2}))

type Negate = (value: number) => number;

// in this function, the parameter `value` automatically gets assigned the type `number` from the type `Negate`
const negateFunction: Negate = (value) => value * -1;
console.log(negateFunction(20))