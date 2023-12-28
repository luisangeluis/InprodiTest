import { createSlice } from "@reduxjs/toolkit";

export interface UserState{
    name:string
}

const initialState:UserState[]=[];

export const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        addUser:(state,action)=>[...state, action.payload]
    }
})

export const {addUser} = userSlice.actions;
export default userSlice.reducer;