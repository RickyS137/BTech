import React from "react"
import classes from './css/shippingAndPaymentPage.module.css'
import '../../App.css'
import ShippingCard from "../../components/shipping/shipping.js"
import nal1 from '../../media/fa-solid_coins.svg'
import nal2 from '../../media/Group.svg'
import nal3 from '../../media/mastercard-2 1.svg'
import nal4 from '../../media/logo-Elsom-RGB-72 1.svg'
import nal5 from '../../media/logo.c9e36ab1 1.svg'


const Shipping = () => {
    return(
        <div className={classes.shipping}>
            <div className="container">
                <div className={classes.blockInput}>
                    <div>
                        <h2 className={classes.blockH2}>Доставка и оплата</h2>
                        <div>
                            <h3 className={classes.blockH3}>Способ доставки</h3>
                            <form className={classes.blockInputs}>
                                <input type="radio" name="age" value='10'/>
                                <p className={classes.blockP}>Самовывоз</p>
                                <input type="radio" name="age" value='20'/>
                                <p className={classes.blockP}>Доставка курьером</p>
                            </form>
                            <form className={classes.forma}>
                                <h3 className={classes.blockH3}>Личные данные</h3>
                                <div className={classes.formInput}>
                                    <div>
                                        <label>Имя*</label>
                                        <input type="text" placeholder="Имя" className={classes.formaInput}/>
                                    </div>
                                    <div>
                                        <label>Фамилия*</label>
                                        <input type="text" placeholder="Фамилия" className={classes.formaInput}/>
                                    </div>
                                </div>
                                <div className={classes.formaDiv}>
                                    <label>Контактный телефон*</label>
                                    <input type="tel" placeholder="+996" className={classes.formaInput}/>
                                </div>
                                <div className={classes.formaDiv}> 
                                    <label>Электронная почта</label>
                                    <input type="email" placeholder="example@mail.com" className={classes.formaInputs}/>
                                </div>
                                <div className={classes.formaDiv}> 
                                    <label>Адрес доставки</label>
                                    <input type="email" placeholder="Улица, номер дома, номер квартиры" className={classes.formaInputs}/>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className={classes.block2}>

                    </div>
                </div>
                <div className={classes.block3}>
                    <h3  className={classes.blockH3}>Способ оплаты</h3>
                    <div className={classes.block3Display}>
                        <ShippingCard props={{
                            image: nal1,
                            title: "Наличными"
                        }}/>
                        <ShippingCard props={{
                            image: nal2,
                            title: "Картой VISA"
                        }}/>
                        <ShippingCard props={{
                            image: nal3,
                            title: "Mastercard"
                        }}/>
                        <ShippingCard props={{
                            image: nal4,
                            title: "Элсом"
                        }}/>
                        <ShippingCard props={{
                            image: nal5,
                            title: "Balance KG"
                        }}/>
                    </div>
                    <div className={classes.block3Btns}>
                        <button className={classes.block3Btn}><a href="#">Оплатить</a></button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Shipping;