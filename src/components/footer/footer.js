import React from 'react';
import classes from "./css/footer.module.css"
import Map from "../../pages/map/map";
import logo from "../../media/white-logoBTech.svg"
import {Link} from "react-router-dom";
import {Instagram, Twitter, YouTube} from "@mui/icons-material";
import facebook from "../../media/facebook.svg"

const Footer = () => {
    return (
        <footer className={classes.footer}>
            <div className={classes.footer_container}>
                <div className={classes.BTechLogo}>
                    <Link to="/"><img src={logo} alt=""/></Link>
                </div>
                <div className={classes.links}>
                    <div className={classes.linksLeft}>
                        <span>
                            <h3>Покупателям</h3>
                            <ul>
                                <li><Link to="/">Каталог</Link></li>
                                <li><Link to="/">FAQ Акции</Link></li>
                                <li><Link to="/">Доставка</Link></li>
                                <li><Link to="/">Обмен и возврат</Link></li>
                                <li><Link to="/">Гарантия</Link></li>
                                <li><Link to="/">Рассрочка</Link></li>
                                <li><Link to="/"></Link></li>
                            </ul>
                        </span>
                        <span>
                            <h3>Бизнес-партнерам</h3>
                            <ul>
                                <li><Link to="/">Условия сотрудничества</Link></li>
                                <li><Link to="/">Техника для бизнеса</Link></li>
                                <li><Link to="/">Поставщикам</Link></li>
                                <li><Link to="/">Аренда</Link></li>
                            </ul>
                        </span>
                        <span>
                            <h3>О нас</h3>
                            <ul>
                                <li><Link to="/">О BTech</Link></li>
                                <li><Link to="/">Вакансии</Link></li>
                                <li><Link to="/">Отзывы</Link></li>
                                <li><Link to="/">Партнерам</Link></li>
                                <li><Link to="/">Инвесторам</Link></li>
                                <li><Link to="/">Политика магазина</Link></li>
                            </ul>
                        </span>
                        <span>
                            <h3>Обратная связь</h3>
                            <ul>
                                <li><Link to="/">Контакты</Link></li>
                                <li><Link to="/">WhatsApp</Link></li>
                                <li><Link to="/">Telegram</Link></li>
                                <li><Link to="/">Оставить отзыв<br/> о качестве товара</Link></li>
                                <li><Link to="/">Канал в Telegram</Link></li>
                            </ul>
                        </span>
                    </div>
                    <Map/>
                </div>
                <div className={classes.socLinks}>
                    <span>
                        <h2>Мы в соц сетях</h2>
                        <div className={classes.socs}>
                            <span><a href="https://www.instagram.com/nalmatov6/"><Instagram/></a></span>
                            <span><a href="https://twitter.com"><Twitter/></a></span>
                            <span><a href="https://ru-ru.facebook.com"><img src={facebook} alt=""/></a></span>
                            <span><a href="https://youtube.com"><YouTube/></a></span>
                        </div>
                    </span>
                </div>
                <div className={classes.docs}>
                    <span>Copyright Btech 2018-2021</span>
                    <span>Политика конфиденциальности</span>
                    <span>Публичная оферта</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;