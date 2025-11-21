import React from 'react'
import Parent from './parent'
import Parent2 from './parent2'
import A from './a'

const App = () => {

  return (
    <div>
      <Parent/>
      <Parent2/>
      <A text= "passing a prop to make  prop drilling"   />
    </div>
  )
}

export default App
