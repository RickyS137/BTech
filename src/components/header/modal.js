import React from 'react';
import classes from "./css/modal.module.css"
import {Link} from "react-router-dom";

const MyModal = () => {
    return (
        <div className={classes.modalInfo}>
            <div className={classes.modalLeft_info}>
                <ul>
                    <li><Link to="/">Телефоны и гаджеты</Link></li>
                    <li><Link to="/">Аудио, видео</Link></li>
                    <li><Link to="/">Техника для дома</Link></li>
                    <li><Link to="/">Для кухни</Link></li>
                    <li><Link to="/">Ноутбуки и компьютеры</Link></li>
                    <li><Link to="/">Красота и здоровье</Link></li>
                    <li><Link to="/">Строительство и ремонт</Link></li>
                    <li><Link to="/">Игры и развлечения</Link></li>
                    <li><Link to="/">Спорт и увлечения</Link></li>
                    <li><Link to="/">Детское</Link></li>
                </ul>
            </div>
            <div className={classes.modalRight_info}>
                <div className={classes.category}>
                    <ul>
                        <h3>Смартфоны и мобильные телефоны</h3>
                        <li><Link to="/">Xiaomi</Link></li>
                        <li><Link to="/">Samsung</Link></li>
                        <li><Link to="/">Apple</Link></li>
                        <li><Link to="/">Huawei</Link></li>
                        <li><Link to="/">Honor</Link></li>
                        <li><Link to="/">Домашние телефоны</Link></li>
                        <li><Link to="/">Кнопочные телефоны</Link></li>
                    </ul>
                    <ul>
                        <h3>Аксессуары для смартфонов</h3>
                        <li><Link to="/">Наушники</Link></li>
                        <li><Link to="/">Портативные наушники</Link></li>
                        <li><Link to="/">Внешние аккумуляторы</Link></li>
                        <li><Link to="/">Зарядные устройства</Link></li>
                        <li><Link to="/">Кабели</Link></li>
                        <li><Link to="/">Чехлы</Link></li>
                        <li><Link to="/">Стекла и пленки</Link></li>
                        <li><Link to="/">Карты памяти</Link></li>
                    </ul>
                    <ul>
                        <h3>Планшеты и электронные книги</h3>
                        <li><Link to="/">Все бренды</Link></li>
                        <li><Link to="/">Apple ipad</Link></li>
                        <li><Link to="/">Samsung Galaxy Tab</Link></li>
                        <li><Link to="/">Huawei Matepad</Link></li>
                        <li><Link to="/">Планшеты Xiaomi</Link></li>
                        <li><Link to="/">Электронные книги</Link></li>
                        <li><Link to="/">Аксессуары для планшетов</Link></li>
                    </ul>
                    <ul>
                        <h3>Гаджеты</h3>
                        <li><Link to="/">Смарт-часы</Link></li>
                        <li><Link to="/">Фитнес-браслеты</Link></li>
                        <li><Link to="/">Спортивные часы</Link></li>
                        <li><Link to="/">Детские часы</Link></li>
                        <li><Link to="/">Умные колонки и портативная акустика</Link></li>
                        <li><Link to="/">Умный дом</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default MyModal;