class trieNode{

constructor(){
this.child = {}
this.isEnd = false
}

} 

class Trie{

constructor(){
this.root = new trieNode()

}
/////////////////////////////////////////////////
insert(value){

let node = this.root


for (let val of value){
if(!node.child[val]){
node.child[val] = new trieNode()
}
node = node.child[val]
}

this.isEnd = true

}
/////////////////////////////////////////////
search(value){

let node = this.root

for(let val of value){
if(!node.child[val]) return false
node = node.child[val]
}

return node.isEnd


}
//////////////////////////////////////
startsWith(value){

let node = this.root


for(let val of value){
if(!node.child[val]) return false
node = node.child[val]
}

return true

}

/////////////////////////////////////


autoC(value){

let node = this.root

for(let val of value){
if(!node.child[val]) return false
node = node.child[val]
}

let suggest =[]

let dfs = (curr, path)=>{

if(cuur.isEnd) suggest.push(path)
for(let val in curr.child){
dfs(curr.child[val], path+val)
}

}
dfs(node, value)
return suggest

}
////////////////////////////////////

commonP(){

let node = this.root

let pre =""


while(true){

let key = Object.keys(node.child)

if(key.length==1 && !node.isEnd){
pre+=key[0]
node =node.child[key[0]]
}else{
break
}

}

return pre

}


///////////////////////////////////

 longestprefix(word){
        let curr = this.root
        let prefix = ''
        for(let char of word){
            if(curr.children[char]){
                prefix += char
                curr = curr.children[char]
            }else break
        }return prefix
    }


////////////////////////////////////

delete(value){

let node = this.root
let path=[]


for(let val of value){
if(!node.child) return false
	path.push([node, val])
  	node = node.child[val]
}

if(!node.isEnd) return false
node.isEnd = false


for(let i=value.length-1;i>=0;i--){

let [parent , val] = path[i]

if(Object.keys(node.child).length > 0 || node.isEnd){
break

}

delete parent.child[val]

node= parent

}


}

///////////////////////////////////////////////////////




}


let res = new Trie()



























