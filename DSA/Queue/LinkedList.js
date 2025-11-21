class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LL{
    constructor(){
        this.head = null
        this.tail = null
        this.size = 0
    }
    push(value){
        let node = new Node(value)
        
        if(!this.head){
            this.head = this.tail = node
        }else{
            this.tail.next = node
            this.tail = node
        }
        this.size++
        
    }
    pop(){
        let removed 
        if(!this.head){
            return null
        }else{
            removed = this.head.value
            this.head = this.head.next
        }
        this.size--
        return removed
        
    }
    print(){
        console.log(this.head)
    }
  
}

let res = new LL

res.push(10)
res.push(20)
res.push(30)
console.log(res.pop())
res.print()

