/*
    1. Write a JavaScript program to check two numbers and 
    return true if one of the numbers is 100 or if the sum 
    of the two numbers is 100 
*/

const oneHundred = (a, b) => a === 100 || b === 100 || a + b === 100

console.log(oneHundred(50, 50)) // true
console.log(oneHundred(23, 100)) // true
console.log(oneHundred(123, 2)) // false
console.log(oneHundred(50, 2)) // false

/*
    2. Write a JavaScript program to get the extension of a filename
*/

const getFileExtension = str => str.slice(str.lastIndexOf('.'))

console.log(getFileExtension('index.html')) // .html
console.log(getFileExtension('img.png')) // .png
console.log(getFileExtension('nav.jsx')) // .jsx
console.log(getFileExtension('webpack.config.js')) // .js

/*
    3. Write a JavaScript program to replace every character in a given
    string with the character following it in the alphabet
*/

const moveCharsForward = str =>
  str
    .split('')
    .map(char => String.fromCharCode(char.charCodeAt(0) + 1))
    .join('')

console.log(moveCharsForward('abcd')) // dcbe
console.log(moveCharsForward('y')) // z
console.log(moveCharsForward('123')) // 234
console.log(moveCharsForward('a1b2')) // b2c3

/* 
    4. Write a JavaScript program to get the current date.
    expected: mm-dd-yyy, mm/dd/yyy or dd-mm-yyy, dd/mm/yyy
*/

const formatDate = (date = new Date()) => {
  const days = date.getDate() + 1
  const months = date.getMonth() + 1
  const years = date.getFullYear()

  return `${months}/${days}/${years}`
}

console.log(formatDate()) // 1/14/2020

/* 
    5. Write a JavaScript program to create a new string
    adding 'New!' in front of a given string. If the
    given string begins with 'New!' already, then return
    the original string
*/

const addNew = str => (str.lastIndexOf('New!') === 0 ? str : `New! ${str}`)

console.log(addNew('Offers!')) // New! Offers!
console.log(addNew('New! Offers!')) // New! Offers!
