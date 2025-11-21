function callback1(callback2){
    let a = 110
    return callback2(a)
}

function callback2(a){
    return a+a
}

console.log(callback1(callback2))

//A function that is passed as an argument to another function, and then executed inside that function.


