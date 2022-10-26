import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const newLocate = createAsyncThunk("newLocate", async ([city,latitude,longitude, zoom], {dispatch})=>{
    await dispatch(setCity(city))
    await dispatch(setZoom(zoom))
    await dispatch(setLatitude(latitude)) && dispatch(setlongitude(longitude))
})

const cityReducer = createSlice({
    name:"city",
    initialState: {
        city: "Бишкек",
        coordinate: {
            latitude: 74.610116,
            longitude: 42.869677,
            zoom: 14.4
        }
    },
    reducers: {
        setCity(state, action){
            state.city = action.payload;
        },
        setLatitude(state, action){
            state.coordinate.latitude = action.payload;
        },
        setlongitude(state, action){
            state.coordinate.longitude = action.payload;
        },
        setZoom(state, action){
            state.coordinate.zoom = action.payload;
        },
    },
})

export default cityReducer.reducer;
export const {setCity, setLatitude, setlongitude, setZoom} = cityReducer.actions;