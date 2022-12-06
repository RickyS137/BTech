import {configureStore} from "@reduxjs/toolkit";
import usersReducer from "../redux/slice/registerSlice";
import code from "../redux/slice/codeSlice";
import citySlice from "./slice/citySlice";
import ProductsSlice from "./slice/productsSlice";

export const store = configureStore({
    reducer: {
        usersProfile: usersReducer,
        codeMail: code,
        city: citySlice,
        products: ProductsSlice,
    }
});