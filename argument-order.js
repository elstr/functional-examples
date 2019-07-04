// ***********************************************************************
// First approach: locking data - the only thing we can change is the cb
// ***********************************************************************
const map = arr => cb => arr.map(cb)

const arr = [1,2,3,4]
const double = n => n*2

// the cb changes but the data is always the same 
// we've locked it :(
const withArr = map(arr)
console.log(withArr(double))
console.log(withArr(n => n * 3))

// ***********************************************************************
// Second approach: free the data - change the args order
// From most specific fn to least specific fn and finally the data
// ***********************************************************************

// cb = most specific / arr = data
const map2 = cb => arr => arr.map(cb)

const withDouble = map2(double)

console.log(withDouble(arr))
console.log(withDouble([2,4,6,8]))


