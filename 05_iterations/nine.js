const myNums = [1, 2, 3]

// const myTotal = myNums.reduce (function (acc, curr) {
//     return acc + curr
// }, 0 )
 
const myTotal =  myNums.reduce ( (acc, curr) => acc + curr, 0)
console.log(myTotal); 