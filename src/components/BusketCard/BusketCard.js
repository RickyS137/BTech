import React, { useEffect, useState } from 'react';
import style from './css/BusketCard.module.css'

export let i = true;

const BusketCard = ({product, handleDelete}) => {
  const [counter, setCounter] = useState(1)

  useEffect(() => {
    
  }, [])

  const inc = () => {
    setCounter(counter + 1)
    localStorage.getItem('busket') !== null 
      && localStorage.setItem('busket', JSON.stringify([...JSON.parse(localStorage.getItem('busket')).filter(e => e.name !== product.name), {...product, count: counter + 1}]))
    i = !i;
    }
  
  const dec = () => {
    setCounter(counter - 1)
    localStorage.getItem('busket') !== null 
      && localStorage.setItem('busket', JSON.stringify([...JSON.parse(localStorage.getItem('busket')).filter(e => e.name !== product.name), {...product, count: counter - 1}]))
    i = !i;
  }
  
  useEffect(()=> {
    setCounter(product.count);
  },[]);
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
        <b>{product.price * counter} сомов</b>
        <div className={style.buttons}>
          <button onClick={dec} disabled={counter === 1}>-</button>
          <span>{counter}</span>
          <button onClick={inc}>+</button>
        </div>
      </div>
    </div>
  );
}

export default BusketCard;
