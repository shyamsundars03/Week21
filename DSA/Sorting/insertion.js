function insert(arr){

for(let i=1;i<arr.length;i++){
    let n = arr[i]
    let s = i-1

    while(s>=0 && arr[s] > n){
        arr[s+1] = arr[s]
        s=s-1
    }
    arr[s+1] = n
}

return arr

}
console.log("BUBLE SORT : ",insert([2,45234,234,145,6,5,3435,32]))

// CHANGE < TO MAKE IT DECENDING