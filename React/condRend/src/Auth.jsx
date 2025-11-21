import React, { useEffect } from 'react'
import { useState } from 'react'

const Auth = () => {

const [auth,setAuth] = useState(false)
const [text , setText]= useState("")

const handleAuth = () =>{
setAuth((c)=>!c)


}

useEffect(()=>{

if(auth == true){
setText("authenticated")
}else{
  setText("not authenticated")
}

},[auth])





  return (
    <div>
        <h1>user is has authentication ? : {text}</h1>
      <button onClick={handleAuth}   >{auth ? "logout" : "login "}</button>
    </div>
  )
}

export default Auth
