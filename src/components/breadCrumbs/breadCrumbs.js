import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link, useLocation } from "react-router-dom";
import { render } from "@testing-library/react";

export default function ActiveLastBreadcrumb() {
    const location = useLocation();
    const breads = [
        <Breadcrumbs aria-label='breadcrumb'>
            <Link style={{ textDecoration: "none", color: "#605D74" }} to={"/"}>
                Главная
            </Link>
            <p style={{ color: "black" }}>Смартфоны</p>
        </Breadcrumbs>,
        <Breadcrumbs aria-label='breadcrumb'>
            <Link style={{ textDecoration: "none", color: "#605D74" }} to={"/"}>
                Главная
            </Link>
            <Link
                style={{ textDecoration: "none", color: "#605D74" }}
                to={"/:category"}
            >
                Смартфоны
            </Link>
            <p style={{ color: "black" }}>Samsung A50</p>
        </Breadcrumbs>,
        <Breadcrumbs aria-label='breadcrumb'>
            <Link style={{ textDecoration: "none", color: "#605D74" }} to={"/"}>
                Главная
            </Link>
            <p style={{ color: "black" }}>Хиты продаж</p>
        </Breadcrumbs>,
        <Breadcrumbs aria-label='breadcrumb'>
            <Link style={{ textDecoration: "none", color: "#605D74" }} to={"/"}>
                Главная
            </Link>
            <p style={{ color: "black" }}>Избранное</p>
        </Breadcrumbs>,
        <Breadcrumbs aria-label='breadcrumb'>
            <Link style={{ textDecoration: "none", color: "#605D74" }} to={"/"}>
                Главная
            </Link>
            <Link
                style={{ textDecoration: "none", color: "#605D74" }}
                to={"/:category"}
            >
                Смартфоны
            </Link>
            <Link
                style={{ textDecoration: "none", color: "#605D74" }}
                to={"/:category/:name"}
            >
                Samsung A50
            </Link>
            <p style={{ color: "black" }}>Корзина</p>
        </Breadcrumbs>,
    ];
    if (location.pathname === "/:category") {
        return breads[0];
    } else if (location.pathname === "/:category/:name") {
        return breads[1];
    } else if (location.pathname === "/bestsellers") {
        return breads[2];
    } else if (location.pathname === "/shipping") {
        return breads[4];
    } else if (location.pathname === "/favourite") {
        return breads[3];
    }
}
