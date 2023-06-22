import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./redux/login.slice";
import { useDispatch } from "react-redux";

export const store = configureStore({
   reducer: { user: loginReducer },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
