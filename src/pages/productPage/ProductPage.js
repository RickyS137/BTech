import React, {useEffect, useState} from 'react';
import classes from './css/product.module.css';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getProduct, ProductSelect} from "../../redux/slice/productSlice";
import {ArrowForward} from "@mui/icons-material";

const ProductPage = () => {
    const [info, setInfo] = useState({height: 236});
    const dispatch = useDispatch();
    const product = useSelector(ProductSelect);
    const params = useParams();

    useEffect(()=>{
        window.scrollTo({top: 0})
        dispatch(getProduct(params.name));
    },[]);
    return (
        <div className={classes.product+" container"}>
            <h1>{product.name}</h1>
            <div className={classes.product__inner}>
                <div className={classes.left}>
                    <img src={product.image} alt=""/>
                </div>
                <div className={classes.right}>
                    <h2>{product.price} сом</h2>
                    <div className={classes.character}>
                        <h4>Характеристики</h4>
                        <div className={classes.char}>
                            <span><label>Процессор</label><p>Qualcomm SM7225 Snapdragon 750G 5G (8 nm)</p></span>
                            <span><label>Основная камера</label><p>64 MP, Четверная камера</p></span>
                            <span><label>Фронтальная камера</label><p>32 MP, Одна камера</p></span>
                            <span><label>Встроенная память</label><p>128 GB / 256 GB</p></span>
                            <span><label>Оперативная память</label><p>6 GB / 8 GB</p></span>
                            <span><label>Наличие NFC</label><p>Да (market/зависит от региона)</p></span>
                        </div>
                    </div>
                    <span>Все характеристики <ArrowForward/></span>
                    <button className="btn">Добавить в корзину</button>
                </div>
            </div>
            <div className={classes.info}>
                <h2>О товаре</h2>
                <div>
                    <p style={info}>Смартфон Samsung Galaxy A52 с новым дизайном задаёт тренд! Его выступающий блок камер окрашен в цвет корпуса, что создаёт ощущение целостности и гармонии. Стеклопластиковая задняя панель долго остаётся гладкой и приятной на ощупь. Устройство соответствует классу IP67 – оно продолжает работать на глубине до метра под водой.
                        <br/><br/>ОБНОВЛЁННАЯ КАМЕРА<br/><br/>
                        64-мегапиксельная матрица, светосильный объектив и оптическая стабилизация творят чудеса – вы получаете чёткие детализированные кадры при ярком солнечном свете и в полной темноте. Смартфон также умеет делать портреты с эффектом боке, широкоугольные панорамы и макрофотографии. А ещё он может снимать видео на уровне экшн-камеры, передавая естественные движения в динамичных сценах....<br/>Смартфон Samsung Galaxy A52 с новым дизайном задаёт тренд! Его выступающий блок камер окрашен в цвет корпуса, что создаёт ощущение целостности и гармонии. Стеклопластиковая задняя панель долго остаётся гладкой и приятной на ощупь. Устройство соответствует классу IP67 – оно продолжает работать на глубине до метра под водой.
                        <br/><br/>ОБНОВЛЁННАЯ КАМЕРА<br/><br/>
                        64-мегапиксельная матрица, светосильный объектив и оптическая стабилизация творят чудеса – вы получаете чёткие детализированные кадры при ярком солнечном свете и в полной темноте. Смартфон также умеет делать портреты с эффектом боке, широкоугольные панорамы и макрофотографии. А ещё он может снимать видео на уровне экшн-камеры, передавая естественные движения в динамичных сценах....<br/></p>
                </div>
                <span onClick={()=>setInfo({height: 500})}>{info.height <= 236 && "Читать полностью"}</span>
            </div>

export default ProductPage;