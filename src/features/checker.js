import { createSlice } from "@reduxjs/toolkit";

export const checkerSlice = createSlice({
    name:"checker",
    initialState: { value: false },
    reducers: {
        check: (state) => {
            state.value = !state.value
        }
    }
})

export const { check } = checkerSlice.actions;

export default checkerSlice.reducer;