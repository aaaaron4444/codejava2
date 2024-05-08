function minMax (arr) { 
   let  arrSort = arr.sort((a,b) => a-b); // sort by ascending

    let lowest = arr[0]
    let highest = arr[arr.length - 1]
    let average = arr.reduce((a,b)=>a+b) / arr.length

    return {lowest, highest, average}
}


console.log(minMax([12,5,23,18,4,45,32]))