function quick(arr){

    if(arr.length< 2) return arr
    let l=[]
    let r =[]
    let p = arr[ arr.length-1]
    for(let i=0;i<arr.length-1;i++){
        if(arr[i] < p){ // 
            l.push(arr[i])
        }else{
            r.push(arr[i])
        }
    }

return [...quick(l),p,...quick(r)]
}
console.log("QUICK SORT : ",quick([2,45234,234,145,6,5,3435,32]))

//CHANGE > TO MAKE DECENDING



