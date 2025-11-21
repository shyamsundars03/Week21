import { configureStore } from "@reduxjs/toolkit";
import CounterSlice  from "../slice/slice"

export const store = configureStore({

reducer:{
    counter : CounterSlice
}


})


