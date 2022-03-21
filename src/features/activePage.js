import { createSlice } from '@reduxjs/toolkit';

export const activePageSlice = createSlice({
    name:"activePage",
    initialState: { value: "all" },
    reducers: {
        changePage: (state,action) => {
            state.value = action.payload
        }
    }
})

export const { changePage } = activePageSlice.actions;
export default activePageSlice.reducer;