// remove odd number on array

/*const isOdd = x => x & 1 === 1

const removeOdds = ([x,...xs]) => {
  if (x === undefined)
    return []
  else if (isOdd(x))
    return removeOdds(xs)
  else
    return [x, ...removeOdds(xs)]
}

let data = [1,2,3,4,5,6]
console.log(removeOdds(data)) // [2,4,6]
console.log(data)             // [1,2,3,4,5,6]*/

let odds = [1,2,3,4,5,6];

myArray = odds.filter(e => e % 2 === 0)

console.log(myArray);