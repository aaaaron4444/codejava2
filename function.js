function sumNumber(num1, num2) {
    let result = num1 + num2
    return result
}

let x = sumNumber(20,30)

console.log(x)
console.log(sumNumber(10, 5))


function reverseWord(word){
    let result = ""

    for (let i = word.length - 1; i >= 0; i--){
        result += word.charAt(i)
    }

    return result
}

console.log(reverseWord("madam"))
console.log(reverseWord("indonesia"))
console.log(reverseWord("hello world"))