function outer(){
    let count= 0
    return function(){
        count++
        console.log(count)
    }
}

let res = outer()
res()
res()
res()

//A closure in JavaScript occurs when
//an inner function remembers and accesses variables
//from its outer function’s scope,
// even after the outer function has finished executing.
