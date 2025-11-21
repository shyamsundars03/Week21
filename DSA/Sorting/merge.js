function merge(arr){
if(arr.length <2) return arr

let mid = Math.floor(arr.length/2)
let l = arr.slice(0,mid)
let r = arr.slice(mid)

return ms(merge(l),merge(r))


}

function ms(l,r){

let sort = []
while(l.length && r.length){
    if(l[0]< r[0]){
        sort.push(l.shift())
    }else{
        sort.push(r.shift())
    }
}

return [...sort,...l,...r]

}

console.log("MERGE SORT : ",merge([2,45234,234,145,6,5,3435,32]))
