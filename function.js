// the `: number` here specifies that this function returns a number
// function getTime(): number {
//     return new Date().getTime();
//   }
// console.log(getTime())
// in this function, the parameter `value` automatically gets assigned the type `number` from the type `Negate`
var negateFunction = function (value) { return value * -1; };
console.log(negateFunction(20));
