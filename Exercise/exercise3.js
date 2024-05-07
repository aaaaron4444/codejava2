function removeOdd(arr){
    for(var i = arr.length - 1; i >= 0; i--){
      if (arr[i] % 2 !== 0) 
        arr.splice(i, 1);
    }
  }

var arr = [1, 2, 3, 4, 5, 6];
removeOdd(arr);
console.log(arr); // Output will be [2, 4, 6]


function even(arr) {
    return arr.filter((item) => item % 2 === 0) //filter dalam kodingan disamping adalah untuk memfilter bilangan genap
}

console.log(even([1,2,3,4,5,6,7,8,9,10]))

/*function fizzbuzz(n){
    let result = []

    for (let i = 1; i<= n; i++){
        if 
        result.push("FizzBuzz")
    } else if (i %)
}*/