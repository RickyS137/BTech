import React from 'react';
import classes from "./css/modal.module.css"
import {Link} from "react-router-dom";

const MyModal = () => {
    return (
        <div className={classes.modalInfo}>
            <div className={classes.modalLeft_info}>
                <ul>
                    <li><Link to="/smartphones">Телефоны и гаджеты</Link></li>
                    <li><Link to="/smartphones">Аудио, видео</Link></li>
                    <li><Link to="/smartphones">Техника для дома</Link></li>
                    <li><Link to="/smartphones">Для кухни</Link></li>
                    <li><Link to="/smartphones">Ноутбуки и компьютеры</Link></li>
                    <li><Link to="/smartphones">Красота и здоровье</Link></li>
                    <li><Link to="/smartphones">Строительство и ремонт</Link></li>
                    <li><Link to="/smartphones">Игры и развлечения</Link></li>
                    <li><Link to="/smartphones">Спорт и увлечения</Link></li>
                    <li><Link to="/smartphones">Детское</Link></li>
                </ul>
            </div>
            <div className={classes.modalRight_info}>
                <div className={classes.category}>
                    <ul>
                        <h3>Смартфоны и мобильные телефоны</h3>
                        <li><Link to="/smartphones">Xiaomi</Link></li>
                        <li><Link to="/smartphones">Samsung</Link></li>
                        <li><Link to="/smartphones">Apple</Link></li>
                        <li><Link to="/smartphones">Huawei</Link></li>
                        <li><Link to="/smartphones">Honor</Link></li>
                        <li><Link to="/smartphones">Домашние телефоны</Link></li>
                        <li><Link to="/smartphones">Кнопочные телефоны</Link></li>
                    </ul>
                    <ul>
                        <h3>Аксессуары для смартфонов</h3>
                        <li><Link to="/smartphones">Наушники</Link></li>
                        <li><Link to="/smartphones">Портативные наушники</Link></li>
                        <li><Link to="/smartphones">Внешние аккумуляторы</Link></li>
                        <li><Link to="/smartphones">Зарядные устройства</Link></li>
                        <li><Link to="/smartphones">Кабели</Link></li>
                        <li><Link to="/smartphones">Чехлы</Link></li>
                        <li><Link to="/smartphones">Стекла и пленки</Link></li>
                        <li><Link to="/smartphones">Карты памяти</Link></li>
                    </ul>
                    <ul>
                        <h3>Планшеты и электронные книги</h3>
                        <li><Link to="/smartphones">Все бренды</Link></li>
                        <li><Link to="/smartphones">Apple ipad</Link></li>
                        <li><Link to="/smartphones">Samsung Galaxy Tab</Link></li>
                        <li><Link to="/smartphones">Huawei Matepad</Link></li>
                        <li><Link to="/smartphones">Планшеты Xiaomi</Link></li>
                        <li><Link to="/smartphones">Электронные книги</Link></li>
                        <li><Link to="/smartphones">Аксессуары для планшетов</Link></li>
                    </ul>
                    <ul>
                        <h3>Гаджеты</h3>
                        <li><Link to="/smartphones">Смарт-часы</Link></li>
                        <li><Link to="/smartphones">Фитнес-браслеты</Link></li>
                        <li><Link to="/smartphones">Спортивные часы</Link></li>
                        <li><Link to="/smartphones">Детские часы</Link></li>
                        <li><Link to="/smartphones">Умные колонки и портативная акустика</Link></li>
                        <li><Link to="/smartphones">Умный дом</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default MyModal;