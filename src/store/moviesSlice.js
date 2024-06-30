import { createSlice } from "@reduxjs/toolkit";
 const initialState = {
    bannerData:[],
    imageURL: ""
 }

 export const moviesSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        setBannerData: (state, action) => {
            state.bannerData = action.payload;
        },
        setImageUrl: (state, action) => {
            state.imageURL = action.payload;
        }
    }
 })

 export const {setBannerData,setImageUrl} = moviesSlice.actions

 export default moviesSlice.reducer;