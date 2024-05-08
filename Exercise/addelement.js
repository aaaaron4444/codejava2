function addElement(newElement) {
    let arr = [1,2,3,4]

    if (arr.includes(newElement) == false) {
        arr.push(newElement)
    }

    return arr
}

console.log(addElement(7))