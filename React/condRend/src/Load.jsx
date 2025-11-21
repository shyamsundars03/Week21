import React, { useEffect, useState } from 'react'

const Load = () => {

const [text,setText] = useState("helloo")


// useEffect(()=>{

//     setText("loading....")
// setTimeout(() => {
//     setText("loaded content!1..")
// },7000);


// },[])

const handleLoad = () =>{

setText("cliked to fetch!!.. wait")
setTimeout(()=>{
setText("fetcched")
},4000)
}


  return (
    <div>
      {text}
      <button onClick={handleLoad}  >clike to fetch data</button>
    </div>
  )
}

export default Load
