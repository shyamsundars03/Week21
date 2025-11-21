import {createSlice} from "@reduxjs/toolkit"

const counterSlice = createSlice({

name:"counter",
initialState: {value : 0},
reducers :{
    incre : state => {state.value++},
    decre : state => {state.value --}
}


})

export const  {incre, decre} = counterSlice.actions

export default counterSlice.reducer
