/* QUEUE BASED ON ARRAY */

class Queue{
    constructor(){
    this.items =[]
    }
    enqueue(val){
    this.items.push(val)
    console.log(this.items)
    }

    dequeue(){
    return this.items.shift()
    }

    peek(){
    if(!this.items.length==0){
    return console.log(this.items[0])
    }
    return onsole.log("emptyyy")
    }

    size(){
    return console.log(this.items.length)

    }

    print(){

    return console.log(this.items)
    }


}

let res = new Queue()

res.size()

/* QUEUE BASED ON OBJECT */


class QueueO{

    constructor(){
        this.items ={}
        this.rear = 0
        this.front = 0

    }

    enqueue(val){

        this.items[this.rear]=val
        this.rear++
    }

    dequeue(){
        let removed = this.items[this.front]
        delete this.items[this.front]
        this.front++
        return console.log(removed)

    }
    peek(){

    return console.log(this.items[this.front])

    }
    size(){
        return console.log(this.rear - this.front )

    }
    print(){
        return console.log(this.items)

    }

}

let res2 = QueueO()













