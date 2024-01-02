import { createSlice } from "@reduxjs/toolkit";

export interface User{
    id:number
    name:string
    lat:number
    lon:number
}

const initialState=[
    {
        id:1,
        name:"Pedro Ramirez",
        lat:20.6667,
        lon:-103.3333
    },
    {
        id:2,
        name:"Juan Perez",
        lat:41.3888,
        lon:2.159
    },
    {
        id:3,
        name:"Luis Vera",
        lat:40.7143,
        lon:-74.006
    },
    {
        id:4,
        name:"Maria Velazquez",
        lat:-34.6132,
        lon:-58.3772
    },
    {
        id:5,
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
        resetUsers:()=>[...initialState],
        updateUser:(state,action)=>{
            const {index,newData} = action.payload;
            
            state[index] = {...state[index],...newData}
        },
        deleteUser:(state,action)=>{
            const index = action.payload;
            state.splice(index, 1);
        }
    
    }
})

export const {addUser,eraseUsers,resetUsers,updateUser,deleteUser} = userSlice.actions;
export default userSlice.reducer;