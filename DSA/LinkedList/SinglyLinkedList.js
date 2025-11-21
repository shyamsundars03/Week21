class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class SinglyLinkedList{

constructor(){
    this.head = null
    this.size=0
}

isEmpty(){
    return this.head == null 
}


prepend(value){

let node = new Node(value)
if(this.size == 0){
    this.head = node
}else{
    node.next = this.head
    this.head = node
}
this.size++

}

append(value){
    let node = new Node(value)

if(this.isEmpty()){
    this.head = node
}else{
    let curr = this.head
    while(curr.next){
        curr = curr.next
    }
    curr.next = node
}
this.size++

}


search(value){

if(!this.head){
    return `List is empty!!`
}else{

    let curr =  this.head
    while(curr){
        if(curr.value == value){
            return `value found !!`
        }
        curr = curr.next
    }

}
return `value not found`

}

insertAt(value , ind){

let node  = new Node(value)

if(ind <0 || ind >= this.size) return "you cant insert!!"


if(ind == 0){

    node.next = this.head
    this.head  = node
}else{
    let curr = this.head

    for(let i=0;i<ind-1;i++){
        curr = curr.next
    }
    node.next = curr.next
    curr.next = node

}
this.size++

}

replace(value, ind){

    if(ind <0 || ind>= this.size){
        return "you cant replace"
    }else{
        let curr = this.head
        for(let i=0;i<ind;i++){
            curr = curr.next
        }
        curr.value = value 
    }

}

removeBy(value){

if(this.isEmpty()) return "you can remove!!"
let removed
if(this.head.value == value){
    removed = this.head.value
    this.head = this.head.next
    this.size--
    return `removed value is : ${removed}`
}else{
    let curr = this.head
    while(curr.next && curr.next.value !== value){
        curr= curr.next
    }
    if(curr.next && curr.next.value ==  value){
        removed = curr.next.value
        curr.next = curr.next.next
        this.size--
    return `removed value is : ${removed}`
    }
}
    return `value not found`

}

findMiddle(){
    let s = this.head
    let f = this.head

    while(f && f.next){
        s =s.next
        f = f.next.next
    }
    return `Middle value is :${s.value}`
}

isCycle(){

let s = this.head 
let f = this.head

while(f && f.next){

    s= s.next
    f= f.next.next

    if(s==f){
        return true
    }

}
return `List is not a cycle `

}


reverse(){

let curr = this.head
let prev = null

while(curr){
    let next = curr.next
    curr.next  = prev
    prev = curr
    curr = next
}
this.head = prev

return this.head

}

arrayToLL(arr){

for(let val of arr){
    this.append(val)
}

}
 
toArray(){
    let arr = []

    let curr = this.head

    while(curr){
        arr.push(curr.value)
        curr = curr.next
    }
    return arr
}


countNode(){

let count = 0
let curr = this.head
while(curr){
    count++
    curr = curr.next
}
return count

}

evenSum(){

let sum = 0
let curr = this.head

while(curr){
    if(curr.value%2==0){
        sum+=curr.value
    }
    curr= curr.next
}

return sum

}

removeEven(){
let removed = []

if(this.isEmpty()) return removed

if(this.head && this.head.value%2 == 0){
    removed.push(this.head.value)
    this.head = this.head.next
    this.size--
    
}

    let curr = this.head

    while(curr.next){
        if(curr.next.value%2==0){
                removed.push(curr.next.value)
                curr.next = curr.next.next
                this.size--
        }else{
            curr = curr.next
        }
    }
return `removed are : ${[removed]}`

}


minAndMax(){
let min =  this.mini()
let max =  this.maxi()
return `minimum is :  ${min} and max is : ${max}`
}

mini(){
let min = Infinity
let curr = this.head

while(curr){
    if(curr.value < min){
        min =  curr.value
    }
    curr = curr.next
}
return min
}

maxi(){
let max = -Infinity
let curr = this.head

while(curr){
    if(curr.value > max){
        max =  curr.value
    }
    curr = curr.next
}
return max
}

avgOfLL(){

let sum = this.sumOfAll()
return `avg of ll is ${sum / this.size}`
}

sumOfAll(){

let sum = 0
let curr = this.head
while(curr){
    sum+=curr.value
    curr = curr.next
}
return sum
}

insertionSort() {
    if (!this.head || !this.head.next) return;

    let dummy = new Node(-Infinity);
    let curr = this.head;

    while (curr) {
        let prev = dummy;

        // find correct position
        while (prev.next && prev.next.value < curr.value) {
            prev = prev.next;
        }

        let nextNode = curr.next;
        curr.next = prev.next;
        prev.next = curr;

        curr = nextNode;
    }

    this.head = dummy.next;
}


removeDup(){

if(this.isEmpty()) return

let seen = new Set
let curr = this.head
seen.add(curr.value)

while(curr.next){
    if(seen.has(curr.next.value)){
        curr.next = curr.next.next
        this.size--
    }else{
        seen.add(curr.next.value)
        curr = curr.next
    }
    
}

}

split(){

if(!this.head) return "you cant"
let s = this.head
let f = this.head

while(f && f.next){
s= s.next
f= f.next.next
}

let mid = s
s = null
return {first : this.head , second : mid}

}

palidrome(){

let s = this.head
let f = this.head

while(f && f.next){
    s= s.next
    f= f.next.next
}
//found middle value
console.log("middle value is :",s.value)

let prev = null
let curr = s

while(curr){
    let next = curr.next
    curr.next = prev
    prev = curr
    curr = next
}
// reversed
console.log("reversed :",prev)

let first = this.head
let second = prev

while(second){
    if(first.value != second.value){
        return `Not a palidrome`
    }
    first = first.next
    second = second.next

}
return `It is a plaindrome`
}



print(){
     let arr = []
     let curr = this.head
     while(curr){
        arr.push(curr.value)
        curr = curr.next
     }
     console.log(arr)

}


}
let res = new SinglyLinkedList()

console.log(res.isEmpty())

res.prepend(10)
res.prepend(20)
res.prepend(30)
res.append(40)
res.append(50)
console.log(res.search(50))
res.insertAt(22,1)
res.replace(21,2)
res.replace(41,4)
console.log(res.removeBy(21))
console.log(res.isCycle())
console.log(res.findMiddle())
console.log(res.reverse())
res.print()
console.log(res.toArray())
console.log(res.countNode())
console.log(res.evenSum())
// console.log(res.removeEven())
res.print()
console.log(res.minAndMax())
console.log(res.sumOfAll())
console.log(res.avgOfLL())
console.log(res.palidrome())
res.prepend(10)
res.prepend(20)
res.prepend(30)
res.append(40)
res.append(50)
res.print()
res.removeDup()
console.log(res.split())
res.print()
console.log(res.insertionSort())
res.print()
/* MAKE CYCLE NODES

let a = new Node(3)
let b = new Node(33)
let c = new Node(333)
let d = new Node(3333)



a.next =b
b.next= c
c.next= d
d.next =a


console.log(a)


*/



/*

QUESTIONS:

0. remove middle value
1. ARRAY TO LL
2. LL TO ARR
3. PALINDROME CHECK
4. Count nodes in the list
5. Find sum of all even numbers
6. Remove all even numbers
7. Find maximum & minimum value
8. Calculate average of linked list
9. Check if a value exists (improved search)
10. Reverse a linked list in-place
11. Remove duplicates (unsorted)
12. Sort the linked list
13. Return nth node from the end
14. Split linked list into two halves
15. Remove nodes having a greater value on the right
16. Merge two sorted linked lists
17. Rotate the linked list by k positions

Example:
List: 10 → 20 → 30 → 40 → 50
Rotate by k=2 → 40 → 50 → 10 → 20 → 30

18. Flatten a multilevel linked list

*/

/*

LEETCODE : [21,83,141,160,203,206,234,876,

2,24,24,61,82,92,142,143,147,148,1721

23,25,138,146,430,1171 ] 

 */









