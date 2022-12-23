import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";

import "./css/header.css";
import classes from "./css/header.module.css";

import { ReactComponent as Logo } from "../../media/logoBTech.svg";
import { ReactComponent as Catalog } from "../../media/catalog.svg";
import { ReactComponent as Locate } from "../../media/locate.svg";
import { newLocate } from "../../redux/slice/citySlice";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import {
    Search,
    FavoriteBorderOutlined,
    ShoppingBagOutlined,
    PlayArrow,
} from "@mui/icons-material";
import { Badge, Box, Modal } from "@mui/material";

import MyModal from "./modal";
import axios from "axios";

const Header = () => {
    const dispatch = useDispatch();
    const city = useSelector((state) => state.city.city);
    const user = JSON.parse(localStorage.getItem("user"))
        ? JSON.parse(localStorage.getItem("user"))
        : false;

    const [profile, setProfile] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [openLocate, setOpenLocate] = useState(false);
    const [search, setSearch] = useState([]);
    const [busketCount, setBusketCount] = useState(0) 

    const handleClick = (e) => {
        e.target.tagName !== "UL" &&
            dispatch(
                newLocate([
                    e.target.textContent,
                    Number(e.target.dataset.latitude),
                    Number(e.target.dataset.longitude),
                    Number(e.target.dataset.zoom),
                ])
            );
        localStorage.setItem(
            "locate",
            JSON.stringify([
                e.target.textContent,
                Number(e.target.dataset.latitude),
                Number(e.target.dataset.longitude),
                Number(e.target.dataset.zoom),
            ])
        );
        window.scrollTo({
            top: document.body.clientHeight,
            behavior: "smooth",
        });
    };
    const handleLocate = () => setOpenLocate(!openLocate);

    const searching = async (e) => {
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon/");
        const filter =
            (await e.value.length) > 0
                ? response.data.results.filter((p) => p.name.includes(e.value))
                : [];
        setSearch(filter);
    };
    const selectSearch = (e) => {
        const input =
            e.target.parentNode.parentNode.parentNode.childNodes[0]
                .childNodes[0];
        input.value = e.target.textContent;
        searching(input);
    };
    const openProfile = () => {
        if (user) {
            setProfile(true);
        }
    };
    const exitUser = () => {
        localStorage.setItem("user", JSON.stringify(false));
        setProfile(false);
    };
    useEffect(() => {
        dispatch(newLocate(JSON.parse(localStorage.getItem("locate"))));
        const busket = localStorage.getItem('busket')
        busket !== null && setBusketCount(JSON.parse(busket).length)
    }, []);
    return (
        <header className={classes.btech_navbar}>
            <div className={classes.btech_navbar_top}>
                <div className={classes.navbar_top_container}>
                    <div className={classes.navbar_left_container}>
                        <span
                            onClick={handleLocate}
                            style={{ position: "relative" }}
                        >
                            <Locate style={{ marginRight: "12px" }} />
                            {city}
                            <Modal
                                sx={{ position: "absolute" }}
                                BackdropProps={{ style: { opacity: 0 } }}
                                disableScrollLock
                                open={openLocate}
                                onClose={handleLocate}
                            >
                                <Box className={classes.select}>
                                    <PlayArrow className={classes.arrow} />
                                    <ul
                                        style={{ cursor: "pointer" }}
                                        onClick={handleClick}
                                    >
                                        <li
                                            data-latitude={74.610116}
                                            data-longitude={42.869677}
                                            data-zoom={14.4}
                                        >
                                            Бишкек
                                        </li>
                                        <li
                                            data-latitude={75.309459}
                                            data-longitude={42.834946}
                                            data-zoom={12}
                                        >
                                            Токмок
                                        </li>
                                        <li
                                            data-latitude={72.805605}
                                            data-longitude={40.517536}
                                            data-zoom={11}
                                        >
                                            Ош
                                        </li>
                                        <li
                                            data-latitude={78.391957}
                                            data-longitude={42.486943}
                                            data-zoom={11}
                                        >
                                            Каракол
                                        </li>
                                        <li
                                            data-latitude={73.849914}
                                            data-longitude={42.811603}
                                            data-zoom={13}
                                        >
                                            Кара-Балта
                                        </li>
                                        <li
                                            data-latitude={71.392639}
                                            data-longitude={42.89956}
                                            data-zoom={10}
                                        >
                                            Талас
                                        </li>
                                        <li
                                            data-latitude={72.455383}
                                            data-longitude={41.515617}
                                            data-zoom={8.45}
                                        >
                                            Жалал-Абад
                                        </li>
                                        <li
                                            data-latitude={75.810197}
                                            data-longitude={41.37626}
                                            data-zoom={8.32}
                                        >
                                            Нарын
                                        </li>
                                    </ul>
                                </Box>
                            </Modal>
                        </span>
                        <span>
                            <Link to='/'>Магазины</Link>
                        </span>
                        <span>
                            <Link to='/shipping'>Доставка</Link>
                        </span>
                    </div>
                    <div className={classes.navbar_right_container}>
                        <span>
                            <Link to='/'>Рассрочка</Link>
                        </span>
                        <span
                            onClick={(e) => {
                                navigator.clipboard.writeText(
                                    e.target.textContent
                                );
                                alert("Номер скоппирован!");
                            }}
                        >
                            +996 550 00 55 00
                        </span>
                    </div>
                </div>
            </div>
            <div className={classes.btech_navbar_bottom}>
                <div className={classes.navbar_bottom_container}>
                    <div className={classes.catalog_navbar}>
                        <span style={{ cursor: "pointer" }}>
                            <Link to='/'>
                                <Logo alt='BTech' />
                            </Link>
                        </span>
                        <span>
                            <button
                                className={classes.navCatalog + " btn"}
                                onClick={() => setOpenModal(true)}
                            >
                                <Catalog />
                                <span>Каталог</span>
                            </button>
                            <Modal
                                BackdropProps={{ style: { opacity: 0.4 } }}
                                open={openModal}
                                onClose={() => setOpenModal(false)}
                            >
                                <Box
                                    onClick={() => setOpenModal(false)}
                                    className={classes.modal}
                                >
                                    <MyModal />
                                </Box>
                            </Modal>
                        </span>
                    </div>
                    <div className={classes.search_navbar}>
                        <span className={classes.search}>
                            <input
                                onChange={(e) => searching(e.target)}
                                type='search'
                                placeholder='Поиск'
                            />
                            <button className='btn'>
                                <Search />
                            </button>
                        </span>
                        <div className={classes.filter}>
                            <ul onClick={selectSearch}>
                                {search.map((s, key) => (
                                    <li key={key}><NavLink to={`/smartphones/${s.name}/`}>{s.name}</NavLink></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className={classes.links_navbar}>
                        <Link
                            onClick={openProfile}
                            className={classes.link}
                            to={user === true ? "" : "/login"}
                        >
                            <AccountCircleOutlinedIcon
                                style={{ marginRight: "8px" }}
                            />
                            <span>{user === true ? "Профиль" : "Войти"}</span>
                        </Link>
                        <Modal open={profile} onClose={() => setProfile(false)}>
                            <Box className={classes.profile}>
                                <div className={classes.profile_container}>
                                    <button onClick={exitUser} className='btn'>
                                        выйти
                                    </button>
                                </div>
                            </Box>
                        </Modal>
                        <Link className={classes.link} to='/favourites'>
                            <FavoriteBorderOutlined
                                style={{ marginRight: "8px" }}
                            />
                            <span>Избранное</span>
                        </Link>
                        <Link className={classes.link} to='/shipping'>
                            <Badge badgeContent={busketCount} color='error'>
                                <ShoppingBagOutlined
                                    sx={{ color: "#0B1124" }}
                                />
                            </Badge>
                            <span style={{ marginLeft: "8px" }}>Корзина</span>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
