import React, {useEffect} from 'react';
import AliceCarousel from 'react-alice-carousel';
import './css/slider.css';
import classes from './css/slider.module.css';
import {useDispatch, useSelector} from "react-redux";
import {getProducts, LoadSelect, ProductsSelect} from "../../../redux/slice/productsSlice";
import {CircularProgress} from "@mui/material";
import {NavLink} from "react-router-dom";
import slide1 from '../../../media/slide1.svg';
import slide2 from '../../../media/slide2.svg';
import slide3 from '../../../media/slide3.svg';

const Slider = () => {
    const dispatch = useDispatch();
    const products = useSelector(ProductsSelect);
    const load = useSelector(LoadSelect);
    const responsive = {
        0: { items: 0 },
        568: { items: 0 },
        1024: { items: 1 },
    };

    useEffect(()=> {
        dispatch(getProducts(9))
    },[])
    const items = [
        <div className={classes.block+" item"} style={{ height: 500, background: "#6DE9F4"}}>
            {
                !load ?
                <div className={classes.container}>
                    <div className={classes.left}>
                        <h2>{products[6].name}</h2>
                        <p>Умные часы теперь во всех магазинах страны!</p>
                        <NavLink to={`/smartphones/${products[6].name}/`}><button className="btn">Посмотреть товар</button></NavLink>
                    </div>
                    <div className={classes.right} style={{backgroundImage: `url("${slide1}")`}}>
                        <img src={products[6].image} alt=""/>
                    </div>
                </div> :
                    <CircularProgress/>
            }
        </div>,
        <div className={classes.block+" item"} style={{ height: 500, background: "#62A9FC"}}>
            {
                !load ?
                    <div className={classes.container}>
                        <div className={classes.left}>
                            <h2>{products[7].name}</h2>
                            <p>Новое поступление во всех магазинах города</p>
                            <NavLink to={`/smartphones/${products[7].name}/`}><button className="btn">Посмотреть товар</button></NavLink>
                        </div>
                        <div className={classes.right} style={{backgroundImage: `url("${slide2}")`}}>
                            <img src={products[7].image} alt=""/>
                        </div>
                    </div> :
                    <CircularProgress/>
            }
        </div>,
        <div className={classes.block+" item"} style={{ height: 500, background: "#FF6BC9"}}>
            {
                !load ?
                    <div className={classes.container}>
                        <div className={classes.left}>
                            <h2>{products[8].name}</h2>
                            <p>Погрузись в атмосферу HD вместе с LG!</p>
                            <NavLink to={`/smartphones/${products[8].name}/`}><button className="btn">Посмотреть товар</button></NavLink>
                        </div>
                        <div className={classes.right} style={{backgroundImage: `url("${slide3}")`}}>
                            <img src={products[8].image} alt=""/>
                        </div>
                    </div> :
                    <CircularProgress/>
            }
        </div>
    ];

    return (
        <div style={{marginTop: 122}}>
            <AliceCarousel
                mouseTracking
                items={items}
                autoPlayInterval={3000}
                autoPlay={true}
                infinite={true}
                responsive={responsive}
                controlsStrategy="alternate"
            />
        </div>
    );
};

export default Slider;