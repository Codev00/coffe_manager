import { createSlice } from "@reduxjs/toolkit";
import { User } from "../types/user.type";

interface LoginState {
   User: User[];
}

const initialState: LoginState = {
   User: [],
};

const loginSlice = createSlice({
   name: "login",
   initialState,
   reducers: {},
   extraReducers(builder) {},
});

export const {} = loginSlice.actions;
const loginReducer = loginSlice.reducer;
export default loginReducer;
