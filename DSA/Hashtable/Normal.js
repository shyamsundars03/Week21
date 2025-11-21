
class Hash{
constructor(size){
this.table = new Array(size)
this.size = size

}

hash(key){

let total =0
for(let i=0;i<key.length;i++){
total+= key.charCodeAt(i)
}

return total % this.size

}

set(key, value){

const ind = this.hash(key)
this.table[ind]= value

}

get(key){

const ind = this.has(key)
return this.table[ind]

}

remove(key){

const ind = this.hash(key)
this.table[ind]= undefined

}

print(){
for(let i=0;i<this.table.length;i++){

if(this.table[i]){

console.log(`${i}: ${this.table[i]}`)


}

}

}


}

let res = new Hash(10)

res.set("name", "shyam")
res.get("name")
res.remove("name")
res.print()



