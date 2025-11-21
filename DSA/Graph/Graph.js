class Graph{

constructor(){
this.adjList= {}
}
/////////////////////////////////////
addV(v){
if(this.adjList[v]){
this.adjList[v] = new Set()
}
}

/////////////////////////////////////
addE(v1,v2){

if(!this.adjList[v1]){
this.addV(v1)
}
if(!this.adjList[v1]){
this.addV(v1)
}

this.adjList[v1].add(v2)
this.adjList[v2].add(v1)

}
/////////////////////////////////////

display(){

for(let val in this.adjList){

console.log(val + "=>"+ [...this.adjList[val]] )

}

}

/////////////////////////////////////

hasE(v1,v2){

return (

this.adjList[v1].has(v2) &&
this.adjList[v2].has(v1)
)

}
/////////////////////////////////////
removeE(v1,v2){

this.adjList[v1].delete(v2)
this.adjList[v2].delete(v1)

}

/////////////////////////////////////

remove(v){

if(!this.adjList[v]){
return
}

for(let val of this.adjList[v]){
this.removeE(v,val)
}
delete this.adjList[v]
}


/////////////////////////////////////


dfs(start){

let visited = new Set()

let dfshelper = (vertex)=>{

            if(!vertex)return
            visited.add(vertex)
            console.log(vertex)

for(let neighbor of this.adjacencylist[vertex]){

if(!visited.has(neighbor)){
     dfshelper(neighbor)
}
            
}
}
dfshelper(start)
return visited

    }



/////////////////////////////////////



bfs(start){

let visited = new Set()
let queue = [start]
visited.add(start)



while(queue.length){
  let vertex = queue.shift()
  console.log(vertex)

for(let neighbor of this.adjacencylist[vertex]){

if(!visited.has(neighbor)){
  visited.add(neighbor)
  queue.push(neighbor)
}
           
 }
       
 }return visited
    }


///////////////////////////////////////////
reverse() {
const reversedGraph = new Graph();

for (let vertex in this.adjacencylist) {
   for (let neighbor of this.adjacencylist[vertex]) {
                reversedGraph.addEdge(neighbor, vertex); 

}
   }

        

return reversedGraph;
    
}

////////////////////////////////////////


hasCycle() {
    const visited = new Set();

    const dfs = (vertex, parent) => {
        visited.add(vertex);

        for (let neighbor of this.adjacencylist[vertex]) {
            if (!visited.has(neighbor)) {
                if (dfs(neighbor, vertex)) {
                    return true;
                }
            } else if (neighbor !== parent) {
                return true; // Found a back-edge (cycle)
            }
        }

        return false;
    };

    for (let vertex in this.adjacencylist) {
        if (!visited.has(vertex)) {
            if (dfs(vertex, null)) {
                return true; // Found a cycle
            }
        }
    }

    return false; // No cycles
}



///////////////

   bfs(start){
        const queue = [start]
        const visited = new Set()
        const result = []

        visited.add(start)

        while(queue.length){
            const vertex = queue.shift()
            result.push(vertex)

            this.adjacencyList[vertex].forEach(neighbour => {
                if(!visited.has(neighbour)){
                    visited.add(neighbour)
                    queue.push(neighbour)
                }
            })
        }
        console.log(result)
    }

    
    dfs(start){
        const stack = [start]
        const visited = new Set()
        const result = []

        visited.add(start)

        while(stack.length){
            const vertex = stack.pop()
            result.push(vertex)
        

        this.adjacencyList[vertex].forEach(neighbour => {
            if(!visited.has(neighbour)){
                visited.add(neighbour)
                stack.push(neighbour)
            }
        })
      }
      console.log(result)
    }




















///////////////////////////////////////////////
}
let res = new Graph()

res.addV("A")
res.addV("B")
res.addV("C")

res.addE("A","B")
res.addE("B","C")
res.display()
console.log(res.hasE("A","C"))
res.removeV("C")
res.display()

