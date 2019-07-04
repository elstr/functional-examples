const pipe = (...fns) => initialStr => fns.reduce((str, fn) => fn(str), initialStr)

const scream = str => str.toUpperCase()
const exclamation = str => `${str}!`
const repeat = str => `${str} ${str}`

console.log(pipe(scream, exclamation, repeat)("mind blowing"))

// could use an array of fns 
// const pipe = fns => initialStr => fns.reduce((str, fn) => fn(str), initialStr)
// console.log(pipe([scream, exclamation, repeat])("mind blowing"))
// BUT spread already returns an array !!
// const pipe = (...fns) => ...etc...