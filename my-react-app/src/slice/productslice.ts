import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    data: [],
    error: {},
    isLoading: false
}

const productslice = createSlice({
  name: 'product',
  initialState,
  reducers: {

    requestProducts: (state) => {
        state.isLoading = true;
    },
    requestProductsSuccess: (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
    },
    requestProductsFailure: (state, action) => {    
        state.isLoading = false;
        state.error = action.payload;
    }


  }
});

export const {requestProducts,requestProductsSuccess, requestProductsFailure} = productslice.actions

export default productslice.reducer