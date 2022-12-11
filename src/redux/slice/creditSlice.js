import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getCredit = createAsyncThunk("credit/getCredit", (title, {dispatch})=> {
    dispatch(setCredit(title));
});

const initialState = {
    credit: ""
};

const CreditSlice = createSlice({
    name: "credit",
    initialState,
    reducers: {
        setCredit(state, action){
            state.credit = action.payload;
        }
    }
});

export default CreditSlice.reducer;
export const {setCredit} = CreditSlice.actions;