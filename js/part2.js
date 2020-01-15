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

// const firstHalf = str => (str.length % 2 === 0 ? true : false)
