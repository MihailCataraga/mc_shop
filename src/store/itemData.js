import { createSlice } from "@reduxjs/toolkit";

// initialState by = with product from localStorage if exist else is = null
const storedProduct = localStorage.getItem('product');
const initialState = storedProduct ? JSON.parse(storedProduct) : null;


const itemData = createSlice({
    name: 'item',
    initialState,
    reducers: {
        setItemData: (state, action) => {
            return action.payload
        }
    }
})

export const { setItemData } = itemData.actions;
export default itemData.reducer;
