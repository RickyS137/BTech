import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
// import axios from "axios";

export const getCode = createAsyncThunk("getCode", async (code, {dispatch}) => {
    dispatch(setCode(code))
    alert(code)
    // await axios.post("https://jsonplaceholder.typicode.com/users", {code:code})
})
export const getLink = createAsyncThunk("getLink", async (link, {dispatch}) => {
    dispatch(setLink(link))
})

const codeReducer = createSlice({
    name:"code",
    initialState: {
        code: "",
        link: "/login"
    },
    reducers: {
        setCode(state, action){
            state.code = action.payload;
        },
        setLink(state, action){
            state.link = action.payload;
        },
    },
});

export default codeReducer.reducer;
export const {setCode, setLink} = codeReducer.actions;