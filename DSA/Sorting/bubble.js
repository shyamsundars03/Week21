function buble(arr){

let s 
do{
    s= false
    for(let i=0;i<arr.length;i++){
        if(arr[i] >arr[i+1]){  //
            let temp = arr[i]
            arr[i] = arr[i+1]
            arr[i+1]= temp
            s= true
        }
    }

}while(s)

return arr

}
console.log("BUBLE SORT : ",buble([2,45234,234,145,6,5,3435,32]))

// CHANGE < FOR DECENDING ORDER
