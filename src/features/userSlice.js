import{createSlice} from '@reduxjs/toolkit'
export const userSlice=createSlice({
    name:'user',
    initialState:{
        user:null,
    },
    reducers:{
        login:(state,action)=>{
             state.user=action.payload;// dispatch login payload is gonna be  the user information, id user name etc
        },
        logout:(state)=>{
            state.user=null
       },
    },
})
export const {login, logout}= userSlice.actions

export const selectUser=(state)=>state.user.user

export default userSlice.reducer
