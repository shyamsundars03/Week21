class WeightedGraph {
    constructor(){
        this.adjList = {}
    }


    addV(v){
        if(!this.adjList[v]) this.adjList[v] = new Map()
    }



    addE(v1, v2, weight){
        this.addV(v1)
        this.addV(v2)
        this.adjList[v1].set(v2, weight)
        this.adjList[v2].set(v1, weight) 
    }




display(){
        for(let v in this.adjList){
            console.log(v + " => ", Array.from(this.adjList[v]))
        }
    }





}
