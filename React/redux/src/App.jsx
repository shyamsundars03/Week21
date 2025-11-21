import React from 'react'
import {Provider, useSelector , useDispatch} from "react-redux"

import {store} from "./store/store"
import { incre, decre } from './slice/slice'


const Counter = ()=>{

const count = useSelector((s)=> s.counter.value)
const dispatch =  useDispatch()

return(
<>
{count}
<button onClick={()=>dispatch(incre())}   >++</button>
<button onClick={()=>dispatch(decre())}   >--</button>


</>


)




}





const App = () => {
  return (
<Provider store={store}>

<Counter/>

</Provider>
  )
}

export default App
