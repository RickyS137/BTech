import React, { useState } from 'react';
import style from './css/BusketCard.module.css'

const BusketCard = ({product, handleDelete}) => {
  const [counter, setCounter] = useState(1)
  const inc = () => {
    setCounter(counter + 1)
  }
  const dec = () => {
    setCounter(counter - 1)
    counter <= 1 && setCounter(1)
  }
  
  return (
    <div className={style.box}>
      <div className={style.inBox}>
        <div>
          <img src={product.image} alt="img"/>
        </div>
        <div className={style.titles}>
          <h4>{product.name}</h4>
          <div className={style.links}>
            <p>Приобрести позже</p>
            <button onClick={()=>handleDelete(product)}>Удалить</button>
          </div>
        </div>
      </div>
      <div className={style.prices}>
        <b>{product.price} сомов</b>
        <div className={style.buttons}>
          <button onClick={dec}>-</button>
          <span>{counter}</span>
          <button onClick={inc}>+</button>
        </div>
      </div>
    </div>
  );
}

export default BusketCard;
