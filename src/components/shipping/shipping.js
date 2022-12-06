import React from "react";
import { useState } from "react";
import classes from '../../pages/shippingAndPaymentPage/css/shippingAndPaymentPage.module.css';

const ShippingCard = ({props}) => {
    const [active, setActive] = useState(false)
    const activeBorder = () => {
        setActive(!active)
    }
    return (
        <div onClick={activeBorder} style={active ? {border: "2px solid #62A9FC" } : {border: "2px solid transparent" }} className={classes.oplata}>
            <div className={classes.oplataImg}>       
                <img src={props.image} alt="" />
            </div>
            <h4>{props.title}</h4>
        </div>
    )
}
export default ShippingCard;