/*
    1. Write a JavasScript program to create a new string 
    from a given string taking the first 3 characters and
    the last 3 characters of a string and adding them 
    together. The string length must be 3 or more, if not,
    the original string is returned
*/

const makeNewString = str =>
  str.length < 3 ? str : str.slice(0, 3) + str.slice(-3)

console.log(makeNewString('abc')) // abcabc
console.log(makeNewString('abcdef')) // abcdef
console.log(makeNewString('abc123abc123')) // abc123
console.log(makeNewString('ab')) // ab

/*
    2. Write a JavaScript program to extract the first half
    of a string of even length
*/

const firstHalf = str =>
  str.length % 2 === 0 ? str.slice(0, str.length / 2) : false

console.log(firstHalf('1234')) // 12
console.log(firstHalf('temple')) // tem
console.log(firstHalf('temples')) // false

/*
    3. Write a JavaScript program to concatenate two strings
    except their first character.
*/

const twoStrings = (a, b) => a.slice(1) + b.slice(1)

console.log(twoStrings('asdf', 'bsdf')) // sdfsdf
console.log(twoStrings('pineapple', 'mango')) // ineappleango
console.log(twoStrings('cake', 'bake')) // akeake

/*
    4. Given two values, write a JavaScript program to find 
    out which one is nearest to 100
*/

const nearestTo100 = (a, b) => (100 - a < 100 - b ? a : b)

console.log(nearestTo100(99, 1)) // 99
console.log(nearestTo100(23, 60)) // 60
console.log(nearestTo100(29, 123)) // 123

/*
    5. Write a JavaScript program to check if a given string
    container 2 to 4 occurrences of a specified character
*/

const countChars = (str, char) => str.split('').filter(ch => ch === char).length

const contains2To4 = (str, char) =>
  countChars(str, char) >= 2 && countChars(str, char) <= 4

console.log(contains2To4('oh!', 'o'))
console.log(contains2To4('ooh!', 'o'))
console.log(contains2To4('oooooh!', 'o'))
console.log(contains2To4('ooooh!', 'o'))
