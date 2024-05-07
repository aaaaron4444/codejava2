//Closure

function greeting(name) {
    const defaultmessage = "Hello "

    return function () {
        return defaultmessage + name
    }
}

//const greetingdavid = greeting("David")
//console.log(greetingdavid())

function multiplier(factor){ //currying
    return function (number){
        return factor * number
    }
}

const mul3 = multiplier(3)
const mul5 = multiplier(5)

console.log(mul3(5))
console.log(mul5(15))