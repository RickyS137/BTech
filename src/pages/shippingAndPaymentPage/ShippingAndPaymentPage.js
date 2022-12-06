import React from "react"
import classes from './css/shippingAndPaymentPage.module.css'
import '../../App.css'
import nal from '../../media/fa-solid_coins.svg'
import nal1 from '../../media/Group.svg'
import nal2 from '../../media/logo-Elsom-RGB-72 1.svg'
import nal3 from '../../media/logo.c9e36ab1 1.svg'
import nal4 from '../../media/mastercard-2 1.svg'

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
                        <div className={classes.oplata}>
                            <div className={classes.oplataImg}>
                                <img src={nal} alt="" />
                            </div>
                            <h4>Наличными</h4>
                        </div>
                        <div className={classes.oplata}>
                            <div className={classes.oplataImg}>
                                <img src={nal1} alt="" />
                            </div>
                            <h4>Картой VISA</h4>
                        </div>
                        <div className={classes.oplata}>
                            <div className={classes.oplataImg}>
                                <img src={nal2} alt="" />
                            </div>
                            <h4>Mastercard</h4>
                        </div>
                        <div className={classes.oplata}>
                            <div className={classes.oplataImg}>
                                <img src={nal3} alt="" />
                            </div>
                            <h4>Элсом</h4>
                        </div>
                        <div className={classes.oplata}>
                            <div className={classes.oplataImg}>
                                <img src={nal4} alt="" />
                            </div>
                            <h4>Balance KG</h4>
                        </div>
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