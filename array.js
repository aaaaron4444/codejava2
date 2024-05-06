let arr = ['A', 'B', 'C', 'D', 'E', 'F']

console.log(arr[0])

let score = [ 10, 20, 30, 40, 50]

console.log(score[4])

console.log(arr)
//console.log(arr.toString()) // ubah array ke string(pemisah nya comma)
//console.log(arr.join("-"))
let deletedValue = arr.pop() //menghapus dari belakang
console.log(deletedValue)
arr.pop()
console.log(arr)
arr.push("G")
console.log(arr)
arr.unshift("Z") //menambah dari depan
console.log(arr)

console.log(arr.length) //panjang array

console.log(arr.indexOf("A"))

//score.sort((a, b) => a - b) // ascending order
score.sort((a, b) => b - a) //descending

console.log(score)

arr.reverse() //hanya ada di array, tidak ada di string
console.log(arr)


const sum = score.reduce((a, b) => a +b)
console.log(sum)