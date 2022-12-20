import React, { useState } from "react";
import classes from "./mapBinding.module.css";
import visa from "../../media/visa.svg";
import { Modal } from "@mui/material";
import carta from "../../media/Group 190.svg";
import close from "../../media/Cross.svg";
import { Link } from "react-router-dom";
import ups from "../../media/983046 1.svg";

const MapBinding = () => {
    const [modal, setModal] = useState(false);
    const [credit, setCredit] = useState(["", "", "", ""]);
    const [date, setDate] = useState(["", ""]);
    const [cvs, setCvs] = useState("");

    const MaxLengthInput = (e, [state, setState], len) => {
        const c = state;
        const c1 = c.map((el, i) =>
            i == e.target.dataset.index
                ? e.target.value.length > len
                    ? el
                    : e.target.value
                : el
        );
        setState(c1);
        if (
            e.target.dataset.valid !== "last" &&
            String(e.target.value).length >= len
        ) {
            e.target.nextSibling.focus();
        } else if (
            e.target.dataset.valid !== "first" &&
            String(e.target.value).length <= 0
        ) {
            e.target.previousSibling.focus();
        }
    };
    const handleCvs = ({ target }) =>
        String(target.value).length <= 3 && setCvs(target.value);
    const modals = [
        <div className={classes.modal1}>
            <img
                src={close}
                alt=''
                className={classes.modalImgClose}
                onClick={() => {
                    setModal(false);
                }}
            />
            <img src={carta} alt='' />
            <h2>Отлично!</h2>
            <p>Карта успешно привязана.</p>
            <Link to={"/shipping"}>
                <button
                    className='btn'
                    onClick={() => localStorage.setItem("credit", true)}
                >
                    Продолжить
                </button>
            </Link>
        </div>,
        <div className={classes.modal2}>
            <img
                src={close}
                alt=''
                className={classes.modalImgClose}
                onClick={() => {
                    setModal(false);
                }}
            />
            <img src={ups} alt='' />
            <h2>Упс!</h2>
            <p>
                Что-то пошло не так. <br /> Попробуйте заново!
            </p>
            <button className='btn' onClick={() => setModal(false)}>
                Назад
            </button>
        </div>,
    ];
    return (
        <div className={classes.mapBindingBlock}>
            <div className='container'>
                <h2 className={classes.bindingH2}>Привязка карты</h2>
                <div className={classes.mapBinding}>
                    <div className={classes.mapCard}>
                        <img src={visa} alt='' />
                        <form action='' className={classes.bindingForm}>
                            <input
                                type='number'
                                placeholder='****'
                                onChange={(e) =>
                                    MaxLengthInput(e, [credit, setCredit], 4)
                                }
                                data-valid='first'
                                data-index={0}
                                value={credit[0]}
                            />
                            <input
                                type='number'
                                placeholder='****'
                                onChange={(e) =>
                                    MaxLengthInput(e, [credit, setCredit], 4)
                                }
                                data-index={1}
                                value={credit[1]}
                            />
                            <input
                                type='number'
                                placeholder='****'
                                onChange={(e) =>
                                    MaxLengthInput(e, [credit, setCredit], 4)
                                }
                                data-index={2}
                                value={credit[2]}
                            />
                            <input
                                type='number'
                                placeholder='****'
                                onChange={(e) =>
                                    MaxLengthInput(e, [credit, setCredit], 4)
                                }
                                data-valid='last'
                                data-index={3}
                                value={credit[3]}
                            />
                        </form>
                        <form className={classes.bindingForm1}>
                            <input
                                type='number'
                                placeholder='**'
                                data-valid='first'
                                data-index={0}
                                onChange={(e) =>
                                    MaxLengthInput(e, [date, setDate], 2)
                                }
                                value={date[0]}
                            />
                            <input
                                type='number'
                                placeholder='**'
                                data-valid='last'
                                data-index={1}
                                onChange={(e) =>
                                    MaxLengthInput(e, [date, setDate], 2)
                                }
                                value={date[1]}
                            />
                        </form>
                    </div>
                    <div className={classes.mapCard2}>
                        <div></div>
                        <form
                            onSubmit={(e) => e.preventDefault()}
                            className={classes.card2Input}
                        >
                            <input
                                type='number'
                                placeholder='***'
                                onChange={handleCvs}
                                value={cvs}
                            />
                        </form>
                    </div>
                </div>
                <div className={classes.butDiv}>
                    <button
                        className='btn'
                        id={classes.but}
                        onClick={() => setModal(true)}
                    >
                        Привязать
                    </button>
                    <Modal open={modal} onClose={() => setModal(false)}>
                        {credit.join("").length === 16 &&
                        date.join("").length === 4 &&
                        cvs.length
                            ? modals[0]
                            : modals[1]}
                    </Modal>
                </div>
            </div>
        </div>
    );
};
export default MapBinding;
