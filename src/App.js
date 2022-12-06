import React from "react";
import "./App.css"
import { Routes, Route} from "react-router-dom";
import RegisterComponent from "./pages/loginAndRegistrationPage/LoginAndRegistration";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import MainPage from "./pages/mainPage/MainPage";
import BestsellersPage from "./pages/bestsellersPage/BestsellersPage";
import Shipping from './pages/shippingAndPaymentPage/ShippingAndPaymentPage'
import ProductPage from "./pages/productPage/ProductPage";

function App() {
    return (
    <div className="app">
        <Header/>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/:name" element={<ProductPage/>}/>
                <Route path="/bestsellers" element={<BestsellersPage/>}/>
                <Route path="/shipping" element={<Shipping/>}/>
                <Route path="/login" element={<RegisterComponent/>}/>
                <Route path="/:category/:name" element={<ProductPage/>}/>
            </Routes>
        <Footer/>
    </div>
    );
}

export default App;
