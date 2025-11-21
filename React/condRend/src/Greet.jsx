import React from 'react'

const Greet = () => {

let hours = 12
let greeting = ""

if(hours < 12){
    greeting = "morning"
}else if (hours <18){
    greeting = "afternoon"
}else{
    greeting = "evening"
}

  return (
    <div>
      <h3>this is {greeting}</h3>
    </div>
  )
}

export default Greet
