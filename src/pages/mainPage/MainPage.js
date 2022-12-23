<<<<<<< HEAD
import React from "react";
import classes from "./css/mainPage.module.css";

const MainPage = () => {
    return <div className={classes.mainPage}></div>;
=======
import React from 'react';
import classes from "./css/mainPage.module.css"
import Slider from "../../components/mainPage/slider/Slider";

const MainPage = () => {
    return (
        <div className={classes.mainPage}>
            <Slider/>
        </div>
    );
>>>>>>> 6f5571ab5471041ecead51af5235d4f486d94e7d
};

export default MainPage;
