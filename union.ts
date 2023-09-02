const func: (value: number | string ) => void = (value: number | string): number | string => {
    if(typeof value === "number"){
        return value * 2;
    }else{
        return value.toUpperCase();
    }
}
console.log(func(30))
console.log(func("30"))

// let data: number | string = "Tarun"

// function printStatusCode(code: string | number) {
//     console.log(`My status code is ${code}.`)
//   }
//   printStatusCode(404);
//   printStatusCode('404');