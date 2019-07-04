// Higher Order Function

// 1. Accepts a fn as an arg
// 2. Returns a new fn

const withCount = fn => {
  let count = 0;
  return (...params) => {
    console.log(`Call count: ${count++}`);
    console.log(...params);
    fn(...params);
  };
  //   return function(...params) {
  //     console.log(`Call count: ${count++}`);
  //     console.log(...params);
  //     fn(...params);
  //   };
};

const add = (x, y) => {
  console.log(x + y);
};
// const countedAdd = withCount(add)(1, 2);
// console.log(countedAdd);
const countedAdd = withCount(add)
console.log(countedAdd(2,2))
console.log(countedAdd(3,2))
