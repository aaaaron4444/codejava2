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

//console.log(reverseWord("madam"))
//console.log(reverseWord("indonesia"))
//console.log(reverseWord("hello world"))

function multiply(a,b = 1){
    return a * b
}

//console.log(multiply(10)) //jika seperti ini tidak bisa karena hanya ada 1 const, harus ada 2; kecuali di atas, b = 1

//console.log(multiply(10,9))

//rest parameter

function myFunc(a,b, ...etc){
    console.log(a)
    console.log(b)
    console.log(etc)
}

myFunc("One","Two","Three","Four","Five")


//nested function -> function di dalam function

function getMessage(firstName) { 
    function sayHello() {
        return `Hello ${firstName}. `
    }
    
    function welcomeMessage() {
        return `Welcome to Purwadhika !`
    }

    return sayHello() + welcomeMessage()
}

console.log(getMessage("Aaron"))