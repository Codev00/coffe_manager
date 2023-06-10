import { createReducer } from "@reduxjs/toolkit";
import { User } from "../types/user.type";

interface LoginState {
   User: User[];
}

const initialState: LoginState = {
   User: [],
};

const loginReducer = createReducer(initialState, (builder) => {});

export default loginReducer;
