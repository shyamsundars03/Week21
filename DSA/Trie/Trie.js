class Trienode{
    constructor(){
        this.child ={}
        this.isend =  false
    }
}

class Trie{
    constructor(){
        this.root = new Trienode()
    }
    insert(value){
        let node = this.root
        
        for(let val of value){
            if(!node.child[val]){
                node.child[val] = new Trienode()
            }
            node = node.child[val]
        }
        
        node.isend = true
    }
    print(node = this.root, pre = ""){
        
        for(let val in node.child){
            let child = node.child[val]
            let end = child.isend ? "*" : ""
            console.log(pre + val + end)
            this.print(child, pre+" ")
        }
        
        
    }
    search(value){
        let node = this.root
        
        for(let val of value){
            if(!node.child[val]) return false
            node = node.child[val]
        }
        return node.isend
    }
    startsWith(value){
        let node = this.root
        for(let val of value){
            if(!node.child[val]) return false
            node = node.child[val]
        }
        return true
    }
    autoC(value){
        let node = this.root
        let arr = []
        
        for(let val of value){
            if(!node.child[val]) return []
            node=  node.child[val]
        }
        
        
        let dfs = (curr,path)=>{
            if(curr.isend) arr.push(path)
            
            for(let val in curr.child){
                dfs(curr.child[val], path+val)
            }
            
        }
        dfs(node,value)
        return arr
    }
    common(){
        let node = this.root
        let pre =""
        while(true){
            let key = Object.keys(node.child)
            
            if(key.length==1 && !node.isend){
                pre+=key[0]
                node = node.child[key[0]]
            }else{
                break
            }
            
        }
        return pre
        
    }
    longest(value){
        
        let node = this.root
        
        let pre = ""
        
        for(let val of value){
            if(node.child[val]){
                pre+= val
                node=  node.child[val]
            }else{
                break
            }
        }
        return pre
        
        
    }
    
delete(value) {
    let node = this.root;
    const path = []; 

    // Step 1: Traverse
    for (let ch of value) {
        if (!node.child[ch]) return false;
        path.push([node, ch]);
        node = node.child[ch];
    }

    // Step 2: Check correct property
    if (!node.isend) return false;

    // Step 3: Unmark word end
    node.isend = false;

    // Step 4: Prune
    for (let i = value.length - 1; i >= 0; i--) {
        const [parent, ch] = path[i];

        if (Object.keys(node.child).length > 0 || node.isend) break;

        delete parent.child[ch];
        node = parent;
    }

    return true;
}


}
let res = new Trie()

res.insert("cat")
res.insert("car")
res.insert("care")
res.print()
console.log(res.search("ca"))
console.log(res.startsWith("ca"))
console.log(res.autoC("c"))
console.log(res.common())
console.log(res.longest("carbon"))
console.log(res.delete("car"))
res.print()