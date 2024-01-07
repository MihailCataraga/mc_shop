import { createSlice } from "@reduxjs/toolkit";

const itemData = createSlice({
    name: 'item',
    initialState: {},
    reducers: {
        setItemData: (state, action) => {
            return action.payload
        }
    }
})

export const { setItemData } = itemData.actions;
export default itemData.reducer;
