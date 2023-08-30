// const names: string[] = [];
// names.push("Dylan");
// console.log(names)
// const array: readonly string[] = ['name', "age", "location"]
// array.push("marks")
// console.log(array)
var names = ["Dylan"];
names.push("Jack"); // Error: Property 'push' does not exist on type 'readonly string[]'.
console.log(names);
