class Heap{
    
    constructor(){
        this.heap =[]
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
    [this.heap[i1],this.heap[i2]] =[this.heap[i2],this.heap[i1]]
}

insert(key){
    this.heap[this.heap.length] = key
    this.heapify()
}

heapify(){
    
    let curr = this.heap.length-1
    while(curr >0 && this.heap[curr] < this.heap[this.getP(curr)]){
        this.swap(curr, this.getP(curr))
        curr = this.getP(curr)
    }
    
}

remove(){
    
if(this.heap.length==0) return null

let min = this.heap[0]
    
  if(this.heap.length==1){
    this.heap.pop()
}else{
    this.heap[0] = this.heap.pop()
    this.heapifyDown(0)
}  
    return `min:${min}`
 
}
 
heapifyDown(i){
    
    let lar= i
    let l = this.getL(i)
    let R = this.getR(i)
    
    if(l < this.heap.length && this.heap[l] < this.heap[lar]){
        lar = l
    }
    
    if(R < this.heap.length && this.heap[R] < this.heap[lar]){
        lar = R
    }
    
    if(lar!= i){
        this.swap(i,lar)
        this.heapifyDown(lar)
    }

}    
    
    peek(){
        return this.heap.length >0 ? this.heap[0] : null
    }
    
    fromArr(arr){
        this.heap = arr
        for(let i= (Math.floor(this.heap.length)/2)-1;i>=0;i--){
            this.heapifyDown(i)
        }
    }

    print(){
        console.log(this.heap)
    }
    display(){
        for(let i of this.heap){
            console.log(i)
        }
    }
    
    kthsmallest(k){

        if(k>this.heap.length){
            return null
        }else{
            let min = new Heap()
            
            for(let val of this.heap){
                min.insert(val)
            }
            
            for(let i=0;i<k-1;i++){
                min.remove()
            }
            return min.heap[0]
            
        }
        
        

    }
    
 
}


let heap = new Heap()
heap.insert(82)
heap.insert(19)
heap.insert(90)
heap.insert(10)
heap.insert(47)
heap.insert(45)
heap.insert(43)
heap.insert(41)
heap.print()
console.log(heap.hasP(2))
console.log(heap.hasL(2))
console.log(heap.getLv(2))
console.log(heap.remove())
heap.print()
heap.display()
let arr = [4, 1, 3, 9, 7, 2];
heap.fromArr(arr);
console.log("Heap built:", heap.heap);


function sort(arr){
    
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
console.log(sort([54,2,33,55,7,6]))
console.log(heap.kthsmallest(2))