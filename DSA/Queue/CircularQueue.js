
/* CIRCULAR QUEUE BASED ON OBJECT */

class Queue{
   constructor(size){
       this.item = new Array(size)
       this.size = size
       this.r = -1
       this.f = -1
   }
   
   enqueue(val){
       if(this.full()){
           return console.log("it is full")
       } 
       if(this.empty()){
           this.f =0
       } 
       
       this.r = (this.r+1)% this.size
       this.item[this.r]= val

       
   }
   dequeue(){
       if(empty()) console.log("it is empty")
       
       let value = this.item[this.f]
       
       if(this.r ==  this.f){
           this.r = this.f = -1
       }else{
           this.f = (this.f+1)% this.size
       }
       
return value
       
       
   }
   full(){
       return (this.r +1)% this.size == this.f
   }
   empty(){
       return this.f==-1
   }
   
   print(){
       console.log(this.item)
       
   }
    
    
    
}

let res = new Queue(5)

console.log(res.full())
console.log(res.empty())
res.enqueue(10)
res.enqueue(20)
console.log(res.empty())
res.dequeue()
console.log(res.empty())

res.print()

/* CIRCULAR QUEUE BASED ON OBJECT */

class QueueO{
    constructor(size){

        this.item = {}
        this.size = size
        this.r =-1
        this.f =-1

    }

    enqueue(val){
    if(this.full()){
        console.log("it is full")
    }

    if(this.empty()){
    this.f =0
    }

    this.r = (this.r+1) % this.size
    this.item[this.r] = val


    }

    dequeue(){


    if(this.empty()){
    console.log("it is empty")
    }


    let value = this.item[this.f]

    delete this.item[this.f]

    if(this.r === this.f){
        this.r= this.f = -1
    }else{
    this.f =  (this.f +1)% this.size

    }
    return value


    }

    full(){

    return (this.r+1)% this.size == this.f 

    }

    empty(){
    return this.f == -1
    }

    print(){

    if(this.empty()) console.log("it is empty")
        
        let i = this.f
        let arr =[]
        
        while(true){
            arr.push(this.item[i])
            if(i== this.r) break
            i = (i+1) % this.size
            
        }
        return console.log(arr)
    }



}


let res2 = new QueueO(5)


res2.empty()
res2.full()
res2.enqueue()
res2.dequeue()
res2.print()







