class Hash{
    constructor(size){
        this.table  = new Array(size)
        this.size = size
    }

    hash(key){
        let tot =0
        for(let i=0;i<key.length;i++){
            tot+=key.charCodeAt(i)
        }
        return tot% this.size
    }

    set(key , value){

        let ind = this.hash(key)

        let bucket= this.table[ind]

        if(!bucket){
            this.table[ind] = [[key, value]]
        }else{
            let same = bucket.find((i)=>i[0]==key)

            if(same){
                same[1] = value
            }else{
                bucket.push([key,value])
            }
        }
    }

    get(key){
        let ind = this.hash(key)
        let bucket = this.table[ind]
        if(bucket){
            let same = bucket.find((i)=>i[0]== key)
            if(same){
                return same[1]
            }
            return undefined
        }

    }


    remove(key){

        let ind = this.hash(key)
        let bucket = this.table[ind]

        if(bucket){
            let same = bucket.find((i)=> i[0]== key)

            if(same){
                bucket.splice(bucket.indexOf(same),1)
            }

        }

        return "cant"

    }


}

let res = Hash(5)


