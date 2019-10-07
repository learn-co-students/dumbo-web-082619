let arrayOfNums = [1,2,3,4,5,6,7,8,9,10]

let changedArray = arrayOfNums.map(addOneToNumber)
// arrayOfNums.map(function (number){
//   return number + 1
// })

console.log(changedArray);


function addOneToNumber(number){
  let answer = number + 1
  // console.log(number);
  return answer
}

let addTwoToNumber = function(num){
  let ans = num + 2
  return ans
}

// Function Definition
// console.log(addOneToNumber)

// Function invocation
// console.log(addOneToNumber()) // -> Will execute, but return NaN
// console.log(addOneToNumber(2)) // -> Return 3




















//
