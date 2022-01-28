import{createSlice} from '@reduxjs/toolkit'
export const userSlice=createSlice({
    name:'user',
    initialState:{
        user:null,
        isloggedIn:false,
        loading:true,
    },
    reducers:{
        login:(state,action)=>{
             state.user=action.payload;// dispatch login payload is gonna be  the user information, id user name etc
             state.isloggedIn=true;
             state.loading=false;
        },
        logout:(state)=>{
            state.user=null;
            state.isloggedIn=false;
            state.loading=false;
       },
    },
})
export const {login, logout}= userSlice.actions

export const selectUser=(state)=>state.user.user
export const selectIsloggedIn=(state)=>state.user.isloggedIn
export const selectIsLoading=(state)=>state.user.loading

export default userSlice.reducer
