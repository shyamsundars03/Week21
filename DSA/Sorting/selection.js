function select(arr){

for(let i=0;i<arr.length;i++){
    let ind = i
    for(let j= ind+1;j<arr.length;j++){
        if(arr[j] < arr[ind]){
            ind = j
        }
    }
    if(ind!=i){
        let temp = arr[i]
        arr[i]= arr[ind]
        arr[ind] = temp
    }
}

return arr


}
console.log("SELECTION SORT:",select([2,45234,234,145,6,5,3435,32]))