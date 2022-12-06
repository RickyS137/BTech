import React, {useEffect, useState} from 'react';
import {FcGoogle} from "react-icons/fc";
import {FaVk} from "react-icons/fa";
import {TextField} from "@mui/material";
import {VisibilityOutlined, VisibilityOffOutlined} from "@mui/icons-material";
import {PinInput} from "react-input-pin-code";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import classes from "./css/registration.module.css";
import "./css/registration.css";

import {getCode, getLink} from "../../redux/slice/codeSlice";
import {loginUser} from "../../redux/slice/registerSlice";

const LoginAndRegister = () => {
    const dispatch = useDispatch();
    const link = useSelector(state => state.codeMail.link);
    const code = useSelector(state => state.codeMail.code);
    // --------- отправка кода ----------- //
    const [newCode, setNewCode] = useState(["","","",""]);
    const [codeForm, setCodeForm] = useState(["", "active"]);
    // --------- валидация ----------- //
    const [agree, setAgree] = useState(false);
    const [valid, setValid] = useState(false);
    const [checked, setChecked] = useState(false);
    const [email, setEmail] = useState("");
    const [emailDirty, setEmailDirty] = useState(false);
    const [emailError, setEmailError] = useState("");
    const [emailValid, setEmailValid] = useState(true);
    const [password, setPassword] = useState("");
    const [passwordDirty, setPasswordDirty] = useState(false);
    const [passwordError, setPasswordError] = useState("");
    const [passwordValid, setPasswordValid] = useState(true);
    const [passwordType, setPasswordType] = useState("password");

    const emailHandler = email => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        setEmail(email.target.value);
        if (!re.test(String(email.target.value).toLowerCase())){
            if (email.target.value === ""){
                setAgree(true);
                setEmailDirty(true);
                setEmailError("");
            } else {
                setAgree(true);
                setEmailDirty(true);
                setEmailError("Некорректный ввод!");
            }
        } else {
            setAgree(false);
            setEmailDirty(false);
            setEmailError("");
        }
    };
    const passwordHandler = p => {
        setPassword(p.target.value);
        const re = /(?=.*[!@#$%^&*?:";№,./'{}()+=_`~-])/g;
        if (!re.test(String(p.target.value).toLowerCase())){
            if (p.target.value.length < 8){
                setAgree(true);
                setPasswordDirty(true);
                setPasswordError("Пароль слишком короткий!");
            } else if (p.target.value.length > 32) {
                setAgree(true);
                setPasswordDirty(true);
                setPasswordError("Пароль слишком длинный!");
            } else {
                setAgree(false);
                setPasswordDirty(false);
                setPasswordError("");
            }
        } else {
            setAgree(true);
            setPasswordDirty(true);
            setPasswordError("Пароль не должен содержать сторонних символов!");
        }
    };

    const blurHandler = e => {
            e.target.name === "email" ? email === "" ? setEmailDirty(true) || setEmailError("Поле заполнения пустое!") : setEmailError("") :
            e.target.name === "password" && password === "" ? setPasswordDirty(true) || setPasswordError("Поле заполнения пустое!") : setPasswordError("");
        setEmailValid(true);
        setPasswordValid(true);
    };
    const viewPassword = () => {
        if (passwordType === "password"){
            setPasswordType("text");
        } else if (passwordType === "text") {
            setPasswordType("password");
        }
    };
    const randomCode = () => {
        let c = "";
        if (email !== "" && password !== ""){
            for (let i = 0; i < 4; i ++){
                c += Math.floor(Math.random() * 9);
            }
            dispatch(getCode(c));
        } else if (email === "" || password === "") {
            setEmailDirty(true);
            setPasswordDirty(true);
        }
    };
    const getCode_ = e => {
        if (email !== "" && password !== ""){
            randomCode();
            setValid(true);
            setCodeForm(["active", ""]);
            let i = 120;
            const getTimer = setInterval(() => {
                let second = i % 60;
                const minute = Math.trunc(i / 60);
                if (second < 10){second="0" + i % 60}
                e.target.innerText = `0${minute}:${second}`;
                i--;
                if (i < 0){
                    clearInterval(getTimer);
                    setCodeForm(["", "active"]);
                    setValid(false);
                    e.target.innerText = "Получить код повторно!";
                }
            },1000)
        } else {
            setValid(true)
            if (email === "") {
                setEmailDirty(true);
                setEmailError("Поле заполнения пустое!");
            } else if (password === "") {
                setPasswordDirty(true);
                setPasswordError("Поле заполнения пустое!");
            }
            }
    };
    const authCode = () => {
        let nCode = "";
        newCode.map(c => nCode+=c);
        if (nCode === code){
            const newUser = {
                email: email,
                password: password,
            }
            dispatch(loginUser(newUser));
        } else {
            alert("Неверный код!");
        }
    }
    useEffect( () => {
        if (emailDirty || passwordDirty){
            setValid(true);
        } else if (!emailDirty && !passwordDirty && !checked){
            setValid(false);
        }
        if (code === newCode[0] + newCode[1] + newCode[2] + newCode[3] && code.length === 4){
            setValid(true);
            dispatch(getLink("/"));
        } else {
            setValid(true);
            dispatch(getLink("/login"));
        }
    }, [email, password, newCode]);

    return (
        <div className={classes.blockRegistry}>
            <div className={classes.blockReg}>
                <h2>Вход/Регистрация</h2>
                <form className={classes.codePage+` ${codeForm[1]}`}>
                    <PinInput containerStyle={{display:"flex",justifyContent:"space-between"}} placeholder="" inputStyle={{width:"52px", height:"46px"}} values={newCode} onChange={(value, index, values) => setNewCode(values)}/>
                </form>
                <form className={classes.formPage+` ${codeForm[0]}`}>
                    <TextField type="email" placeholder="Email" name="email" onClick={()=>setEmailValid(false)} onChange={emailHandler} onBlur={blurHandler} value={email} error={emailDirty} helperText={emailError} label="Электронная почта*"
                               sx={{
                        width:"100%",
                        height:"40px",
                        border:"none",
                        paddingLeft:"12px",
                        marginBottom:"40px",
                            "& label":{
                                fontWeight: 400 ,
                                fontSize: "16px",
                                color: "#0B1124",
                                marginBottom:"8px",
                                lineHeight:"22px"
                            }
                    }} InputProps={{disableUnderline: emailValid}} variant="standard"/>
                    <div className={classes.password}>
                        <TextField type={passwordType} placeholder="Password" name="password" onClick={()=>setPasswordValid(false)} onChange={passwordHandler} onBlur={blurHandler} value={password} error={passwordDirty} helperText={passwordError} label="Пароль*"
                                   sx={{
                                       width:"100%",
                                       height:"40px",
                                       border:"none",
                                       paddingLeft:"12px",
                                       "& label":{
                                           fontWeight: 400 ,
                                           fontSize: "16px",
                                           color: "#0B1124",
                                           marginBottom:"8px",
                                           lineHeight:"22px"
                                       }
                                   }} InputProps={{disableUnderline: passwordValid}} variant="standard"/>
                        <label onClick={viewPassword}>{passwordType === "password" ? <VisibilityOffOutlined sx={{color: "#888"}}/> : <VisibilityOutlined sx={{color:"#000"}}/>}</label>
                    </div>
                </form>
                <div className="agree">
                    <p className={codeForm[1]}>На вашу почту придет уведомление с кодом для авторизации, если в течении 2:00 минут вы не получили код, нажмите на кнопку снова!</p>

                    <p className={codeForm[0]}>Нажимая кнопку «Создать аккаунт», я даю свое согласие на
                        обработку моих персональных данных, в соответствии с
                        Государственным законом от 27.07.2006 года №38 «О
                        персональных данных» <input style={{position:"relative", top:"1px"}} type="checkbox" disabled={agree} checked={checked} onChange={e=> {
                            setChecked(!checked);
                            setValid(!e.target.checked);
                        }}/>  Я принимаю</p>
                </div>
                <Link style={{color:"#000",textDecoration:"none"}} to={link}><button className={classes.regBtn+` ${codeForm[1]} btn`} style={{width:"100%"}} onClick={authCode} type="submit">Подтвердить код!</button></Link>
                <button className={classes.regBtn+" btn"} onClick={getCode_} disabled={valid} type="submit">Создать аккаунт</button>
                <div className={classes.regLinks}>
                    <div className={classes.or}><i></i><span>Или</span><i></i></div>
                    <div className={classes.socLinks}>
                        <a href="https://myaccount.google.com/">
                            <FcGoogle fontSize="25px"/>
                        </a>
                        <a href="https://vk.com/login">
                            <FaVk color="#2787F5" fontSize="26px"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginAndRegister;
