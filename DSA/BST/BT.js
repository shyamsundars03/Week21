///////////////////////////////////BST


class Node{
constructor(value){
this.value = value
this.l = null
this.r = null
}

}
//////////////////////////////////////

class Bt{
constructor(){
this.root = null
}

insert(value){
    let node = new Node(value)
    if(!this.root){
    this.root = node
    return 
}


let queue = [this.root]

while(queue.length){
let curr = queue.shift()

if(!curr.l){
curr.l = node
return
}else{
queue.push(curr.l)
}


if(!curr.r){
curr.r = node
return
}else{
queue.push(curr.r)
}

}



}



}
