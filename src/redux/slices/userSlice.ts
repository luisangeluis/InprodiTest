import { createSlice } from "@reduxjs/toolkit";

export interface User{
    name:string
    lat:number,
    lon:number
}

const initialState=[
    {
        name:"Pedro Ramirez",
        lat:20.6667,
        lon:-103.3333
    },
    {
        name:"Juan Perez",
        lat:41.3888,
        lon:2.159
    },
    {
        name:"Luis Vera",
        lat:40.7143,
        lon:-74.006
    },
    {
        name:"Maria Velazquez",
        lat:-34.6132,
        lon:-58.3772
    },
    {
        name:"Ericka Sanchez",
        lat:45.4112,
        lon:-75.6981
    }
];

export const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        addUser:(state,action)=>[...state, action.payload],
        eraseUsers:()=>[],
        resetUsers:()=>[...initialState]
    }
})

export const {addUser,eraseUsers,resetUsers} = userSlice.actions;
export default userSlice.reducer;