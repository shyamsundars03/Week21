class Node{
constructor(value){
    this.value = value
    this.l = null
    this.r = null
}

}


class BST{

constructor(){
    this.root = null
}

isEmpty(){
    return this.root = null
}

insert(value){

let node = new Node(value)

    if(this.isEmpty()){
        this.root = node
    }else{
        this.insNode(this.root, node)
    }

}

insNode(root,node){


    if(node.value < root.value){

        if(root.l == null){
            root.l = node
        }else{
            this.insNode(root.l,node)
        }
    }else{

        if(root.r == null){
            root.r = node
        }else{
            this.insNode(root.r, node)
        }


    }


}


search(root =  this.root,value){

    if(!root){
        return false
    }else{

    if(root.value == value){
        return true
    }else if(value < root.value){
        return this.search(root.l, value)
    }else{
        return this.search(root.r, value)
    }

    }

}

preOrder(root = this.root){
    if(root){
        console.log(root.value)
        this.preOrder(root.l)
        this.preOrder(root.r)
    }
}

inOrder(root = this.root){
    if(root){
        this.inOrder(root.l)
         console.log(root.value)
        this.inOrder(root.l)
    }
}

postOrder(root = this.root){
    if(root){
        this.postOrder(root.l)
        this.postOrder(root.r)
        console.log(root.value)
    }
}


levelOrder(root = this.root){

    let queue = []
    queue.push(root)

    while(queue.length){
        let curr = queue.shift()
        console.log(curr.value)

        if(curr.l)queue.push(curr.l)
        if(curr.r)queue.push(curr.r)
    }
}


min(root = this.root){
    if(!root.l){
        root.value
    }else{
        return this.min(root.l)
    }
}

max(root = this.root){
    if(!root.r){
        return root.value
    }else{
        return this.max(root.r)
    }
}

delete(value){
    this.root = this.delNode(this.root, value)
}


delNode(root , value){

    if(root == null) return root
    if(value < root.value){
        root.l = this.delNode(root.l,value)
    }else if (value > root.value ){
        root.r = this.delNode(root.r,value)
    }else{


    if(!root.l && !root.r){
        return null
    }

    if(!root.l) return root.r
    if(!root.r) return root.l


    root.value = this.min(root.r)
    root.r = this.delNode(this.r, this.value)

    }

return root
}


bfs(){
let res =[]
let queue =[]


if(this.root){
queue.push(this.root)
}


while(queue.length){

let curr = queue.shift()
res.push(curr.value)



if(cuur.l) queue.push(curr.l)
if(cuur.r) queue.push(curr.r)

}

return res


}


dfs(){
let res =[]
let stack =[]


if(this.root){
stack.push(this.root)
}


while(stack.length){

let curr = stack.pop()
res.push(curr.value)


if(cuur.r) stack.push(curr.r)
if(cuur.l) stack.push(curr.l)


}

return res


}


countLeftSub(root = this.root.l){
if(!root) return 0

let count =1

count+= this.countAll(root.l)
count+= this.countAll(root.r)
return count

}

countRightSub(root = ths.root.r){

if(!root) return 0

let count= 1

count+= this.countRightSub(root.r)
count+= this.countRightSub(root.l)
return count

}


countAll(root = this.root){

if(!root) return 0

return 1 + this.countAll(root.l)+
this.countAll(root.r)


}

sum(root = this.root){

if(!root) return 0

return root.value + this.sum(root.l) + 
this.sum(root.r)

}


isBst(root, min = -Infinity, max = Infinity){

if(!root) return true


if(root.value <= min  || root.value >= max) return false


return this.idBst(root.l,min, root.value) && 
this.isBst(root.r , root.value, max)

}

//FROM HERE THEY ARE JUST PASTED

areMirror(node1, node2){
    if(node1 === null && node2 === null){
        return true
    }

    if(node1 === null || node2 === null){
        return false
    }

    return (node1.value === node2.value &&
        areMirror(node1.left, node2.right) &&
        areMirror(node1.right, node2.left)
    )
}

isBalanced(root = this.root) {
    const check = (node) => {
        if (!node) return 0;  

        const left = check(node.l);
        if (left === -1) return -1;  

        const right = check(node.r);
        if (right === -1) return -1; 

        if (Math.abs(left - right) > 1) return -1;  

        return 1 + Math.max(left, right);  

    };

    return check(root) 

}


 largest(k){
        let count = 0
        let result = null
        function reverse(node){
            if(!node || count >=k)return
            reverse(node.right)
            count++
            if(count === k){
                result = node.value
                return
            }
            reverse(node.left)
        }
        reverse(this.root)
        return result
    }


    smallest(k){
        let count = 0
        let result = null
        function reverse(node){
            if(!node || count >=k){
                return 
            }
            reverse(node.left)
            count++
            if(count === k){
                result = node.value
                return
            }
            reverse(node.right)
        }
        reverse(this.root)
        return result
    }



removeAllEven() {
    function traverse(node, bst) {
        if (!node) return;

        traverse(node.l, bst);

        traverse(node.r, bst);

        if (node.value % 2 === 0) {
            BST.delNode(node.value);
        }
    }

    traverse(this.root, this);
}













}
let res = new BST()


/* MIRROR


class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

function areMirror(node1, node2){
    if(node1 === null && node2 === null){
        return true
    }

    if(node1 === null || node2 === null){
        return false
    }

    return (node1.value === node2.value &&
        areMirror(node1.left, node2.right) &&
        areMirror(node1.right, node2.left)
    )
}

// Tree - 1
const root1 = new Node(1)
root1.left = new Node(2)
root1.right = new Node(3)
root1.left.left = new Node(4)
root1.right.right = new Node(5)

// Tree - 2
const root2 = new Node(1)
root2.left = new Node(3)
root2.right = new Node(2)
root2.left.left = new Node(50)
root2.right.right = new Node(4)

console.log(areMirror(root1, root2))












*/












