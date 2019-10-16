// // //STRING REVERSE

// function reverseString(str) {
//   const stringArray = str.split("");
//   const reversedArray = stringArray.reverse();
//   const reversedString = reversedArray.join("");
//   console.log(reversedString);
// }
// reverseString("Jeff");

// // //PALINDROME CHECK

// function isPalindrome(str) {
//   const stringArray = str.split("");
//   const reversedArray = stringArray.reverse();
//   const reversedString = reversedArray.join("");
//   const bool = reversedString === str;
//   console.log(`${str} is a palindrome? that is ${bool}`);
// }
// isPalindrome("Jeff");

// // // CHALLENGE 3: REVERSE AN INTEGER

// function reverseInt(int) {
//   const reversedInt = parseInt(
//     int
//       .toString()
//       .split("")
//       .reverse()
//       .join("")
//   );
//   signInt = reversedInt * Math.sign(int);
//   console.log(signInt);
// }
// reverseInt(-223303);

// // //ALLCAPS

// function capitalizeLetters(str) {
//   const uppercased = str.toUpperCase();
//   console.log(uppercased);
// }

// capitalizeLetters("jeeeefffff");

// // // CHALLENGE 5: MAX CHARACTER

// function maxCharacter(str) {
//   const charMap = {};
//   let maxNum = 0;
//   let maxChar = "";
//   str.split("").forEach(char => {
//     if (charMap[char]) {
//       console.log(charMap[char]);
//       charMap[char]++;
//       if (charMap[char] > maxNum) {
//         maxChar = char;
//       }
//     } else {
//       charMap[char] = 1;
//     }
//   });
//   return maxChar;
// }

// const ans = maxCharacter("Velocirpator");
// console.log(ans);

// // CHALLENGE 6: FIZZBUZZ
// function fizzBuzz() {
//   for (i = 1; i <= 99; i++) {
//     if (i % 15 === 0) {
//       console.log("FizzBuzz");
//     }
//     if (i % 5 === 0) {
//       console.log("Buzz");
//     }
//     if (i % 3 === 0) {
//       console.log("Fizz");
//     } else {
//       console.log(i);
//     }
//   }
// }
// fizzBuzz();

// CHALLENGE 1: LONGEST WORD
// Return the longest word of a string
// ex. longestWord('Hi there, my name is Brad') === 'there,'

// function longestWord(sen) {
//   // SOLUTION 1 - Return a single longest word
//   // SOLUTION 2 - Return an array and include multiple words if they have the same length
//   // SOLUTION 3 - Only return an array if multiple words, otherwise return a string
//   //split sentence into array, loop through array,
//   let longestWord;
//   let lengthArray = [];
//   const splitArray = sen.split(" ");
//   for (i = 0; i < splitArray.length; i++) {
//     console.log(splitArray[i].length);
//     lengthArray.splice(splitArray[i].length, 1, splitArray[i]);
//     console.log(lengthArray);
//   }
// }
// const output = longestWord(
//   "All I wanted was em jordans with the blue suede on em"
// );
// console.log(output);
// CHALLENGE 2: ARRAY CHUNKING
// Split an array into chunked arrays of a specific length
// ex.chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3], [4, 5, 6], [7]];
// ex.chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2], [3, 4], [5, 6], [7]];
function chunkArray(arr, len) {
  console.log(arr);
  console.log(len);
  console.log(arr.length);
  let arrayLen = arr.length;
  let chunkedArray = [];
  for (i = 0; i < arrayLen; i++) {
    console.log(arr.length);
    if (arr.length > 0) {
      let spliced = arr.splice(0, len);
      chunkedArray.push(spliced);
    }
  }
  return chunkedArray;
}

console.log(chunkArray([1, 2, 3, 4, 5, 6, 7], 1));

// //CHALLENGE 3

// function flattenArray(arrays) {
//   return (flatArray = [].concat.apply([], arrays));
// }
// const answer = flattenArray([[1, 2], [3, 4], [3, 2, 3, 56]]);
// console.log(answer);

// // CHALLENGE 4: ANAGRAM

// function isAnagram(str1, str2) {
//   let bool = true;
//   for (i = 0; i < str1.length; i++) {
//     if (str2.includes(str1[i])) {
//       bool = true;
//     } else {
//       return false;
//     }
//   }
//   console.log(bool);
// }
// const anagram = isAnagram("elbow", "below");
// console.log(anagram);

// // CHALLENGE 5: LETTER CHANGES

// function letterChanges(str) {
//   let array = str.split("");
//   let newArray = [];
//   let lastArray = [];
//   let letter;
//   for (i = 0; i < array.length; i++) {
//     if (array[i] === " ") {
//       newArray.push(" ");
//     } else {
//       newArray.push(array[i].charCodeAt(0) - 97);
//     }
//   }
//   for (i = 0; i < newArray.length; i++) {
//     if (newArray[i] === " ") {
//       letter = String.fromCharCode(newArray[i]);
//       lastArray.push(letter);
//     } else {
//       letter = String.fromCharCode(newArray[i] + 98);
//       if (
//         letter === "i" ||
//         letter === "u" ||
//         letter === "e" ||
//         letter === "u" ||
//         letter === "a"
//       ) {
//         lastArray.push(letter.toUpperCase());
//       } else {
//         lastArray.push(letter);
//       }
//     }
//   }
//   return lastArray.join("");
// }

// console.log(letterChanges("hello there"));
