import React from "react";
import item1 from "../../media/mainPage/Group 16.svg";
import item2 from "../../media/mainPage/Group 16 (1).svg";
import item3 from "../../media/mainPage/Group 16 (2).svg";
import item4 from "../../media/mainPage/Group 16 (3).svg";
import item5 from "../../media/mainPage/Group 16 (4).svg";
import item6 from "../../media/mainPage/Group 16 (5).svg";
import item7 from "../../media/mainPage/Group 16 (6).svg";
import item8 from "../../media/mainPage/Group 16 (7).svg";
import item9 from "../../media/mainPage/Group 16 (8).svg";
import classes from "./miniSlider.module.css";
import AliceCarousel from "react-alice-carousel";
import { NavLink } from "react-router-dom";

const handleDragStart = (e) => e.preventDefault();
const responsive = {
    slidesToShow: 9,
    0: {
        items: 1,
    },
    568: {
        items: 0,
    },
    1024: {
        items: 1,
    },
};
const items = [
    <div className={classes.slideMini} style={{display: 'flex', justifyContent: 'center'}}>
        <div className={classes.hh}>
            <img
                src={item1}
                onDragStart={handleDragStart}
                role='presentation'
            />
            <NavLink
                style={{ textDecoration: "none", color: "#0B1124" }}
                to={"/category"}
            >
                <h3>Смартфоны</h3>
            </NavLink>
        </div>
        <div className={classes.hh}>
            <img
                src={item2}
                onDragStart={handleDragStart}
                role='presentation'
            />
            <NavLink
                style={{ textDecoration: "none", color: "#0B1124" }}
                to={"/category"}
            >
                <h3>Наушники</h3>
            </NavLink>
        </div>
        <div className={classes.hh}>
            <img
                src={item3}
                onDragStart={handleDragStart}
                role='presentation'
            />
            <NavLink
                style={{ textDecoration: "none", color: "#0B1124" }}
                to={"/category"}
            >
                <h3>Ноутбуки</h3>
            </NavLink>
        </div>
        <div className={classes.hh}>
            <img
                src={item4}
                onDragStart={handleDragStart}
                role='presentation'
            />
            <NavLink
                style={{ textDecoration: "none", color: "#0B1124" }}
                to={"/category"}
            >
                <h3>Телевизоры</h3>
            </NavLink>
        </div>
        <div className={classes.hh}>
            <img
                src={item5}
                onDragStart={handleDragStart}
                role='presentation'
            />
            <NavLink
                style={{ textDecoration: "none", color: "#0B1124" }}
                to={"/category"}
            >
                <h3>Смарт-часы</h3>
            </NavLink>
        </div>
        <div className={classes.hh}>
            <img
                src={item6}
                onDragStart={handleDragStart}
                role='presentation'
            />
            <NavLink
                style={{ textDecoration: "none", color: "#0B1124" }}
                to={"/category"}
            >
                <h3>
                    Стиральные <br /> машины
                </h3>
            </NavLink>
        </div>
        <div className={classes.hh}>
            <img
                src={item7}
                onDragStart={handleDragStart}
                role='presentation'
            />
            <NavLink
                style={{ textDecoration: "none", color: "#0B1124" }}
                to={"/category"}
            >
                <h3>
                    Холодильники <br /> и морозилки
                </h3>
            </NavLink>
        </div>
    </div>,
];

const miniSliderMainPage = () => {
    return (
        <AliceCarousel
            infinite={true}
            mouseTracking
            items={items}
            responsive={responsive}
            controlsStrategy='alternate'
            disableDotsControls
            keyboardNavigation={true}
            slidesToShow={responsive}
        />
    );
};

export default miniSliderMainPage;
