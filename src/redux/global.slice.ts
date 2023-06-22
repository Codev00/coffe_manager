import { createSlice } from "@reduxjs/toolkit";

interface GlobalState {
   openModal: boolean;
}
const initialState: GlobalState = {
   openModal: false,
};

const globalSlice = createSlice({
   name: "global",
   initialState,
   reducers: {},
   extraReducers: {},
});

export const {} = globalSlice.actions;
const globalReducer = globalSlice.reducer;
export default globalReducer;
