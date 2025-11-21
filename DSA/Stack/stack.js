/* STACK BY ARRAY VALUES */

class StackA{
    constructor(){
        this.item = []
    }
    empty(){
        return console.log(this.item.length==0)
    }
    size(){
        return console.log(this.item.length)
    }
    push(val){
        this.item.push(val)
        
    }
    pop(){
        if(this.empty()) return console.log("wempty")
        let val = this.item[this.item.length-1]
        this.item.pop()
         return console.log("removed:", val) 
        
    }
    peek(){
        return console.log(this.item[this.item.length-1])
    }
    print(){
        console.log(this.item)
        
    }
    
    
}
let res = new StackA()

res.empty()
res.size()
res.push(10)
res.push(20)
res.push(30)
res.peek()
res.pop()
res.peek()
res.print()
res.size()


console.log("==============")

/* STACK BY OBJECT VALUES */


class StackO{
    constructor(){
        this.item = {}
        this.t =0
    }
    empty(){
        return console.log(this.t==0)
    }
    size(){
        if(this.t <0) return "empty"
        return this.t
    }
    push(val){
        this.item[this.t]=val
        this.t++
        
    }
    pop(){
        if(this.empty()) return null
        if(this.t < 0) return "you cant pop on empty"
        this.t--
        let val = this.item[this.t]

        delete this.item[this.t]
        
         return val 
        
    }
    peek(){
        return console.log(this.item[this.t-1])
    }
    print(){
        console.log(this.item)
        
    }
    
    
}
let res2 = new StackO()

res2.empty()
console.log(res2.size())
res2.push(10)
res2.push(20)
res2.push(30)
res2.peek()
console.log(res2.pop())
res2.peek()
res2.print()
console.log(res2.pop())
console.log(res2.pop())
console.log(res2.pop())

console.log(res2.size())












