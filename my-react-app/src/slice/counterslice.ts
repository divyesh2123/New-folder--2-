import { createSlice } from '@reduxjs/toolkit'

const initialState = {
     myNumber: 0
}

const counterslice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
        increment: (state) => {
            state.myNumber += 1
        },
        decrement: (state) => {
            state.myNumber -= 1
        }
    
  }
});

export const { increment, decrement } = counterslice.actions

export default counterslice.reducer