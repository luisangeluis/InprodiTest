import { createSlice } from "@reduxjs/toolkit";

const userFormSlice = createSlice({
  name:"userForm",
  initialState:{
    openForm:false,
    id:0,
    name:"",
    lat:-91,
    lon:-181
  },
  reducers:{
    setUserForm:(state,action)=>{
      return{
        ...state,
        ...action.payload
      }
    }
  }
})

export const {setUserForm} = userFormSlice.actions;
export default userFormSlice.reducer;