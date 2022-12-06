import axios from 'axios';
import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

export const getProduct = createAsyncThunk("product/getProduct", async (product) => {
    const {data} = await axios.get(`https://pokeapi.co/api/v2/pokemon/${product}/`);
    return {
        name: data.name,
        image: data.sprites.other.dream_world.front_default,
        price: 45000
    };
});

const initialState = {
    product: {},
    load: true
};

const ProductSlice = createSlice({
    name: "product",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getProduct.pending, (state)=>{
                state.load = true;
            })
            .addCase(getProduct.fulfilled, (state, action)=>{
                state.product = action.payload;
                state.load = false;
            });
    }
});

export default ProductSlice.reducer;
export const ProductSelect = state => state.product.product
export const LoadProductSelect = state => state.product.load