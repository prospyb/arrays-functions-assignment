// Question 1.

// Mutating array methods are those that modify the original array. When you use a mutating array method, the original array is changed, and a new array is not created.
// // Example:     PUSH
//                 POP
//                 SPLICE
//                 SORT
//                 REVERSE

// Non-mutating array methods are those that do not modify the original array. Instead, they return a new array that contains the result of the operation. This means that the original array is left unchanged.
// // Example:     CONCAT
//                 SLICE
//                 FILTER
//                 MAP
//                 REDUCE

// QUESTION 2.

// 1.
// let languages = ['C#', 'JavaScript', 'Ruby', 'PHP', 'Python'];
// languages.push('Kotlin');
// console.log(languages);

// 2.
// let languages = ['C#', 'JavaScript', 'Ruby', 'PHP', 'Python'];
// languages.splice(3, 0, 'Java');
// console.log(languages);

// 3.
// let languages = ['C#', 'JavaScript', 'Ruby', 'PHP', 'Python'];
// languages.splice(0, 1,);
// console.log(languages);
// 4.
// let languages = ['C#', 'JavaScript', 'Ruby', 'PHP', 'Python'];
// languages.unshift('Scala', 'Swift');
// console.log(languages);

// 5.
// let languages = ['C#', 'JavaScript', 'Ruby', 'PHP', 'Python'];
// languages.splice(3, 1, 'Go', 'Rust');
// console.log(languages);

// Question 3

let fruit = ['apple', 'mango', 'banana'];

function changeFruit( fruit ) {
    fruit[2] = "orange";
    return fruit;
}

let result = changeFruit(fruit)
console.log(result);

// Question 4

let arr = [4, 5, 50, -2]

const maxNum = (num) => {
   let result = 'maximum value is ' + Math.max(...arr);
   return result;
}

console.log(maxNum(arr));

// Question 5

// let numbers = [1, 2, 3];

// function valTimesIndex(multiply) {
//     multiply = numbers * numbers.indexOf();
//     return multiply;
// }

// let final = valTimesIndex(numbers);
// console.log(final);


let valTimesIndex = [1, 2, 3].map((numbers) =>{
let output = numbers;
return output
})

console.log(valTimesIndex);

let idx = valTimesIndex.map((_, i) => i)
console.log(idx)

function valTimes(arr) {
    return arr.map((valTimesIndex, idx) => valTimesIndex * idx);
  }
console.log(valTimes(arr));