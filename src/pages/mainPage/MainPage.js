import React from 'react';
import classes from "./css/mainPage.module.css"
import Slider from "../../components/mainPage/slider/Slider";

const MainPage = () => {
    return (
        <div className={classes.mainPage}>
            <Slider/>
        </div>
    );
};

export default MainPage;