import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import http from "../axios/http";

interface LoginState {
   username: string | null;
   MaCty: number | null;
   admin: boolean;
}

const initialState: LoginState = {
   username: null,
   MaCty: null,
   admin: false,
};

export const login = createAsyncThunk(
   "user/login",
   async (body: any, thunkAPI) => {
      const res = await http.post("user/login", body, {
         signal: thunkAPI.signal,
      });

      return res.data;
   }
);

const loginSlice = createSlice({
   name: "login",
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder.addCase(login.fulfilled, (state, action) => {
         state.username = action.payload.username;
         state.MaCty = action.payload.MaCty;
         state.admin = action.payload.admin;
      });
   },
});

export const {} = loginSlice.actions;
const loginReducer = loginSlice.reducer;
export default loginReducer;
