function calculate(arr1,arr2) {
    let res = []

    for (let i = 0; i<arr1.length; i++){
        res.push(arr1[i]+arr2[i])
    }

    return res
}

console.log(calculate([1,2,3], [3,2,1]))