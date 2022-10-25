import React from 'react';
import classes from "./css/loginAndRegistration.module.css";
import LoginAndRegistration from "../../components/loginAndRegistration/loginAndRegistration";

const RegisterComponent = () => {
    return (
        <div className={classes.reg_wrapper}>
            <div className={classes.regBlock}>
                <LoginAndRegistration/>
            </div>
        </div>
    );
};

export default RegisterComponent;