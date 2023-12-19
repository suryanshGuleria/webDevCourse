// console.log('hello ! there')

// fn take string and gives its length

// function strLen(str){
//    return str.length;
// }

// console.log(strLen('abcd'));


// Write a program that takes two numbers and displays their sum, difference, product, and quotient.

// function mathEasy(num1, num2){
//     let sum = num1+num2;
//     let diff = num1-num2;
//     let product = num1*num2;
//     let quotient = num1/num2;

//     console.log(`Sum = ${sum}, Diff = ${diff}, Product = ${product}, Quotient = ${quotient}`);
    
// }

// mathEasy(2, 3)


// Write a program that displays a string in reverse order.

// function strRev(str){
//    return str.split('').reverse().join('');
// }

// console.log(strRev('abcd'));


// 9. **Write a program that takes a string and prints out the number of vowels in the string.**

// function vowelCount(str){
  
//   let ans = str.split('').filter((c)=>{
//     if(c === 'a' || c==='e' || c==='i' || c==='o' || c==='u') return true;
//     }).length;
//    return ans;
// }

// console.log(vowelCount('aei'));



 // Write a function called 'countLetters' that takes a string parameter and returns 
// an object that contains a count of each letter in the string.


// function calculateChars(theString){
//     let returnObj = {};
    // theString.split('').forEach((el, ind)=>{
    //      if(ind === 0){
    //         returnObj[el] = 1;
    //      }
    //      if(!returnObj.hasOwnProperty(el)){
    //          returnObj[el] = 1;
    //      }
    //      else{
    //          returnObj[el] += 1;
    //      }
    // });
//     let workingArray = theString.split('');
//     for(let i = 0 ; i < workingArray.length; i++){
//         if(i === 0){
//             returnObj[workingArray[i]] = 1;
//             continue;
//          }
//          if(!returnObj.hasOwnProperty(workingArray[i])){
//              returnObj[workingArray[i]] = 1;
//              continue;
//          }
//          else{
//              returnObj[workingArray[i]] += 1;
//              continue;
//          }
//     }
//     return returnObj;
// }

// console.log(calculateChars('WebDevelopment'));



// // 4. **Write a function called 'createCounter' that returns a function. 
// The returned function should increment a counter variable each time it is called and return the current count.**


// function createCounter(){
//     let count = 0;
//     function counter(){
//          count++;
//          return count;
//     }
//     return counter;
// }

// let callCounter = createCounter();

// console.log(callCounter());


// 5. **Write a function called 'sumEvenNumbers' that takes an array of numbers as a parameter and returns the sum of all even numbers in the array.**

// function sumEvenNumbers(arr){
//     let sum = 0;
//     for(let value of arr){
//         if(value%2 === 0){
//             sum += value;
//         }
//     }
//     return sum;
// }

// let arr = [1,2,3,4,5,6];
// console.log(sumEvenNumbers(arr));


// 7. **Write a function that takes an array of strings as an argument and returns a new array with only the strings that have a length greater than 5.**


// function stringLengthFinder(arr){
//     let ansArr = [];
//     for(let value of arr){
//         if(value.length > 5){
//            ansArr.push(value);
//         }
//     }
//     return ansArr;
// }

// let arr = ['hey', 'how', 'are', 'suryansh', 'married', 'ayushi'];
// console.log(stringLengthFinder(arr));

