function pure(a,b){
    let aa = a*2
    let bb = b*2

    return aa +bb
}

console.log(pure(5,5))

function impure(a){

return function(){
    a++
    console.log(a)
}

}
let impureres = impure(5)
impureres()
impureres()
impureres()

//A pure function must satisfy two conditions:
//It always returns the same output for the same inputs.
//It has no side effects (does not modify external state, log to console, read/write files, etc.).