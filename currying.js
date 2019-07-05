// Currying
// The act of refactoring a fn that receives many args into a single fn  
// that receives a single arg and returns a series of fns each accepting only one arg


// 1. Fns only receive 1 arg
// 2. Evaluates only when we receive our final arg

function add(x, y){
    return x + y
}

function curryAdd(x){
    return function(y) {
        return x + y
    }
    // return (y) => x + y
}

const es6Add = x => y => x + y
console.log(es6Add(2)(2))
