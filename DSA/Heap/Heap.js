class Heap{
    constructor(){
        this.heap = []
    }
    getP(i){
        return Math.floor((i-1)/2)
    } 
    getL(i){
        return 2*i+1
    } 
    getR(i){
        return 2*i+2
    }
    hasP(i){
    return this.getP(i) >=0
    }    
    
    hasL(i){
        return this.getL(i) < this.heap.length
    }
    
    hasR(i){
        return this.getR(i) < this.heap.length
    }
    
    getPv(i){
        return this.heap[this.getP(i)]
        
    }
    getLv(i){
        return this.heap[this.getL(i)]
        
    }
    getRv(i){
        return this.heap[this.getR(i)]
        
    }
    swap(i1,i2){
        [this.heap[i1],this.heap[i2]]=[this.heap[i2],this.heap[i1]]
    }
    insert(value){
        this.heap.push(value)
        this.heapify()
    }
    heapify(){
        let curr = this.heap.length-1
        
        while(curr > 0){
            let p = this.getP(curr)
            
            if(this.heap[curr] < this.heap[p]){
                this.swap(curr,p)
                curr = p
            }else{
                break
            }
        }
        
    }
    heapifyD(i){
        let a = i
        let l = this.getL(i)
        let r = this.getR(i)
        
        if(l<this.heap.length && this.heap[l]< this.heap[a]){
            a= l
        }
        if(r < this.heap.length && this.heap[r] < this.heap[a]){
            a =r
        }
        if(a!=i){
            this.swap(a,i)
            this.heapifyD(a)
        }
    }
    
    remove(){
        if(this.heap.length == 0) return null
        if(this.heap.length == 1){
            return  this.heap.pop()
        } 
        let min = this.heap[0]
        
        this.heap[0] = this.heap.pop()
        this.heapifyD(0)
        return min
        
    }
    peek(){
        return this.heap.length >0 ? this.heap[0] : null
    }
    fromArr(arr){
        this.heap = [...arr]
        for(let i= (Math.floor(this.heap.length)/2)-1;i>=0;i--){
            this.heapifyDown(i)
        }
    }
    
    kthsmallest(k){

        if(k> this.heap.length) return null
        
        let kHeap = new Heap()
        
        for(let val of this.heap){
            kHeap.insert(val)
        }
        for(let i=0;i<k-1;i++){
            kHeap.remove()
        }
        return kHeap.heap[0]
    }
    
    
    print(){
        return this.heap
    }
    
    
}

let res = new Heap()

res.insert(34)
res.insert(3)
res.insert(34214)
res.insert(343)
res.insert(1)
console.log(res.print())
console.log("min:",res.remove())
console.log(res.print())
console.log(res.kthsmallest(2))


function heapS(arr){
    let heap = new Heap()
    
    for(let val of arr){
        heap.insert(val)
    }
    
    let sorted = []
    
    while(heap.heap.length){
        sorted.push(heap.remove())
    }
    
    return sorted
}
console.log(heapS([54,2,33,55,7,6]))



/*
Every inserted element first goes to the next available index (end of array),
THEN heapify-up decides whether it needs to move.

Heap insertion always places the new value at the last available position in the complete tree (end of array).

Then it performs heapify-up, moving the value upward ONLY if it violates the min-heap rule.



*/

