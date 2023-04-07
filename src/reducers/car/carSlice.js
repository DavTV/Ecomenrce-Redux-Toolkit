import { createSlice } from '@reduxjs/toolkit'

const initialData ={
    count:0,
    data:[]
} 
// console.log(state)
export const carSlice = createSlice({
    name: 'car',
    initialState: initialData,
    reducers: {
        addProduct:(state,action)=>{
            state.data = [...state.data, action.payload]
            state.count=state.count+1;
        }
    }
})

// Action creators are generated for each case reducer function
export const { addProduct } = carSlice.actions

export default carSlice.reducer