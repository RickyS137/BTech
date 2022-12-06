import { FavoriteBorder , Favorite } from '@mui/icons-material';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import style from './css/bestsellersCard.module.css'

const BestsellersCard = ({item}) => {
  const [like, setLike] = useState(false)
  
  const onLike = () => {
    setLike(!like)
  }

  return (
    <div className={style.box}>
      <NavLink to={`/${item.name}`}><img src={item.image} alt="img-pokemon"/></NavLink>
      <NavLink to={`/${item.name}`}><p>{item.name}</p></NavLink>
        <div className={style.price}>
          <h3>{item.price}</h3>
          {like ? <Favorite sx={{fill: '#FF6BC9'}} onClick={onLike}/> : <FavoriteBorder sx={{fill: '#A4A2AF'}} onClick={onLike}/>}
        </div>
    </div>
  );
}

export default BestsellersCard;
