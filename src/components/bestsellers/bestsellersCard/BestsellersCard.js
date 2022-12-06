import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './css/bestsellersCard.module.css'

const BestsellersCard = ({item}) => {
  return (
    <div className={style.box}>
      <NavLink to={`/${item.name}`}><img src={item.image} alt="img-pokemon"/></NavLink>
        <p>{item.name}</p>
        <h3>{item.price}</h3>
    </div>
  );
}

export default BestsellersCard;
