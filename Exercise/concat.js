function concat(arr) {
    let lastWord = arr.pop()
    return arr.join(" , ") +`, and ${lastWord}`

}

console.log(concat(['apple','banana','cherry','date']))


let student1 = 'Budi'
let student2 = 'Andi'

console.log(`${student1} ${student2}`)