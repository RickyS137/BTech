import React from "react";
import classes from "./css/mainPage.module.css";
import Slider from "../../components/mainPage/slider/Slider";
import MiniSliderMainPage from "../../components/miniSliderMainPage/miniSliderMainPage.js";
import style from "../bestsellersPage/css/bestsellerspage.module.css";
import { useSelector } from "react-redux";
import {
    ProductsSelect,
} from "../../redux/slice/productsSlice";
import { useState } from "react";
import BestsellersCard from "../../components/bestsellers/bestsellersCard/BestsellersCard";
import { NavLink } from "react-router-dom";
import arrow from '../../media/mainPage/Arrow right.svg'
const MainPage = () => {
    const products = useSelector(ProductsSelect);
    const [page, setPage] = useState(1);

    return (
        <div className={classes.mainPage}>
            <Slider />
            <div className='container'>
                <div className={classes.btnsMainPage}>
                    <button className={classes.btnMainPage}>
                        Новогодние скидки
                    </button>
                    <button className={classes.btnMainPage}>Топ новинки</button>
                    <button className={classes.btnMainPage}>Товары дня</button>
                    <button className={classes.btnMainPage}>
                        Рекомендуемое вам
                    </button>
                </div>
                <div className={classes.popularTovars}>
                    <h2>Популярные категории</h2>
                    <MiniSliderMainPage />
                </div>
                <div className={classes.bestsellers}>
                    <h2 className={classes.bestH2}>Хиты продаж</h2>
                    <ul className={style.products}>
                        {products
                            .slice(page * 20 - 20, page * 20)
                            .map((item, i) => (
                                <li key={i}>
                                    <BestsellersCard item={item} />
                                </li>
                            ))}
                    </ul>
                    <NavLink
                        style={{ textDecoration: "none", color: "#0B1124", display: "flex", alignItems: "center", justifyContent: "right", marginTop: "25px", fontSize: "18px", fontWeight: "600" }}
                        to={"/bestsellers"}
                    >
                        Показать все <span><img src={arrow} alt="" /></span>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default MainPage;
