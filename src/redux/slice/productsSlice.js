import axios from 'axios';
import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

export const getProducts = createAsyncThunk("products/getProducts", async (limit) => {
    const {data} = await axios.get("https://pokeapi.co/api/v2/pokemon/?limit="+limit);
    const products = [];
    for (let i = 0; i < data.results.length; i++) {
        const response = await axios.get(data.results[i].url);
        products.push({
            name: data.results[i].name,
            image: response.data.sprites.other.dream_world.front_default,
            price: 45000
        });
    }
    return products;
});

const initialState = {
    products: [],
    load: true
};

const ProductsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getProducts.pending, (state)=>{
                state.load = true;
            })
            .addCase(getProducts.fulfilled, (state, action)=>{
                state.products = action.payload;
                state.load = false;
            });
    }
});

export default ProductsSlice.reducer;
export const ProductsSelect = state => state.products.products
export const LoadSelect = state => state.products.load
