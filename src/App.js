import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import RegisterComponent from "./pages/loginAndRegistrationPage/LoginAndRegistration";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import MainPage from "./pages/mainPage/MainPage";
import BestsellersPage from "./pages/bestsellersPage/BestsellersPage";
import Shipping from "./pages/shippingAndPaymentPage/ShippingAndPaymentPage";
import ProductPage from "./pages/productPage/ProductPage";
import CategoriesPage from "./pages/favoritesPage/CategoriesPage";
import MapBinding from "./pages/mapBindingPage/MapBindingPage";

function App() {
    return (
        <div className='app'>
            <Header />
            <Routes>
                <Route path='/' element={<MainPage />} />
                <Route path='/bestsellers' element={<BestsellersPage />} />
                <Route path='/shipping' element={<Shipping />} />
                <Route path='/binding' element={<MapBinding />} />
                <Route path='/login' element={<RegisterComponent />} />
                <Route path='/:category/:name' element={<ProductPage />} />
                <Route path='/:category' element={<FavoritesPage />} />
                <Route path='/:category' element={<CategoriesPage />} />
                <Route path='/binding' element={<MapBinding />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
