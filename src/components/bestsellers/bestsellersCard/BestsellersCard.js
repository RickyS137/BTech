import React from 'react';
import style from './css/bestsellersCard.module.css'

const BestsellersCard = ({item}) => {
  return (
    <div className={style.box}>
      <img src={item.image} alt="img-pokemon"/>
        <p>{item.name}</p>
        <h3>{item.price}</h3>
    </div>
  );
}

export default BestsellersCard;
