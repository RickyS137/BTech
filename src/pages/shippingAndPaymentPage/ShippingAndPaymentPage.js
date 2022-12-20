import React from "react";
import classes from "./css/shippingAndPaymentPage.module.css";
import "../../App.css";
import ShippingCard from "../../components/shipping/shipping.js";
import nal1 from "../../media/fa-solid_coins.svg";
import nal2 from "../../media/Group.svg";
import nal3 from "../../media/mastercard-2 1.svg";
import nal4 from "../../media/logo-Elsom-RGB-72 1.svg";
import nal5 from "../../media/logo.c9e36ab1 1.svg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ups from "../../media/983046 1.svg";
import { Modal } from "@mui/material";
import smile from "../../media/2341821 1.svg";
import close from "../../media/Cross.svg";
import { useState } from "react";
import classes1 from "../mapBindingPage/mapBinding.module.css";
import ActiveLastBreadcrumb from "../../components/breadCrumbs/breadCrumbs";
const Shipping = () => {
    const binded = JSON.parse(localStorage.getItem("credit"));
    const [modal, setModal] = useState(false);
    const credit = useSelector((state) => state.credit.credit);

    return (
        <div className={classes.shipping}>
            <div className='container'>
                <ActiveLastBreadcrumb />
                <div
                    className={classes.blockInput}
                    style={{ marginTop: "22px" }}
                >
                    <div>
                        <h2 className={classes.blockH2}>Доставка и оплата</h2>
                        <div>
                            <h3 className={classes.blockH3}>Способ доставки</h3>
                            <form className={classes.blockInputs}>
                                <label>
                                    <input type='radio' name='age' />
                                    <p className={classes.blockP}>Самовывоз</p>
                                </label>
                                <label>
                                    <input type='radio' name='age' />
                                    <p className={classes.blockP}>
                                        Доставка курьером
                                    </p>
                                </label>
                            </form>
                            <form className={classes.forma}>
                                <h3 className={classes.blockH3}>
                                    Личные данные
                                </h3>
                                <div className={classes.formInput}>
                                    <div>
                                        <label>Имя*</label>
                                        <input
                                            type='text'
                                            placeholder='Имя'
                                            className={classes.formaInput}
                                        />
                                    </div>
                                    <div>
                                        <label>Фамилия*</label>
                                        <input
                                            type='text'
                                            placeholder='Фамилия'
                                            className={classes.formaInput}
                                        />
                                    </div>
                                </div>
                                <div className={classes.formaDiv}>
                                    <label>Контактный телефон*</label>
                                    <input
                                        autoComplete='tel'
                                        type='tel'
                                        placeholder='+996'
                                        className={classes.formaInput}
                                    />
                                </div>
                                <div className={classes.formaDiv}>
                                    <label>Электронная почта</label>
                                    <input
                                        type='email'
                                        placeholder='example@mail.com'
                                        className={classes.formaInputs}
                                    />
                                </div>
                                <div className={classes.formaDiv}>
                                    <label>Адрес доставки</label>
                                    <input
                                        autoComplete='address'
                                        type='email'
                                        placeholder='Улица, номер дома, номер квартиры'
                                        className={classes.formaInputs}
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className={classes.block2}></div>
                </div>
                <div className={classes.block3}>
                    <h3 className={classes.blockH3}>Способ оплаты</h3>
                    <div className={classes.block3Display}>
                        <ShippingCard
                            props={{
                                image: nal1,
                                title: "Наличными",
                            }}
                        />
                        <ShippingCard
                            props={{
                                image: nal2,
                                title: "Картой VISA",
                            }}
                        />
                        <ShippingCard
                            props={{
                                image: nal3,
                                title: "Mastercard",
                            }}
                        />
                        <ShippingCard
                            props={{
                                image: nal4,
                                title: "Элсом",
                            }}
                        />
                        <ShippingCard
                            props={{
                                image: nal5,
                                title: "Balance KG",
                            }}
                        />
                    </div>
                    <div className={classes.block3Btns}>
                        <button
                            className={classes.block3Btn}
                            onClick={() => setModal(true)}
                        >
                            <Link
                                to={
                                    credit !== "Наличными" &&
                                    !binded &&
                                    "/binding"
                                }
                            >
                                {credit === "Наличными"
                                    ? "Заказать"
                                    : "Оплатить"}
                            </Link>
                        </button>
                        <Modal
                            open={modal}
                            onClose={() => {
                                setModal(false);
                            }}
                        >
                            <div className={classes1.modal1}>
                                <img
                                    src={close}
                                    alt=''
                                    className={classes1.modalImgClose}
                                    onClick={() => {
                                        setModal(false);
                                    }}
                                />
                                <img src={smile} alt='' />
                                <h2>Отлично!</h2>
                                <p>
                                    {credit === "Наличными"
                                        ? "Ваш заказ принят. Ожидайте курьера"
                                        : "Оплата прошла успешно!"}
                                </p>
                                <Link to={"/"}>
                                    <button className='btn'>Продолжить</button>
                                </Link>
                            </div>
                        </Modal>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Shipping;
