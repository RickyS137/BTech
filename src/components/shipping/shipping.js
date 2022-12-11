import React from "react";
import { useDispatch, useSelector } from "react-redux";
import classes from "../../pages/shippingAndPaymentPage/css/shippingAndPaymentPage.module.css";
import { getCredit } from "../../redux/slice/creditSlice";

const ShippingCard = ({ props }) => {
    const dispatch = useDispatch();
    const credit = useSelector(state => state.credit.credit);

    const activeBorder = () => {
        dispatch(getCredit(props.title));
    };
    return (
        <div
            onClick={activeBorder}
            style={
                credit === props.title
                    ? { border: "2px solid #62A9FC" }
                    : { border: "2px solid transparent"}
            }
            className={classes.oplata}
        >
            <div className={classes.oplataImg}>
                <img src={props.image} alt='' />
            </div>
            <h4>{props.title}</h4>
        </div>
    );
};
export default ShippingCard;
