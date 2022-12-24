import { FavoriteBorder , Favorite } from '@mui/icons-material';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import style from './css/bestsellersCard.module.css'

const BestsellersCard = ({item, liked = true}) => {
  const [like, setLike] = useState(false)
  
  const onLike = () => {
    setLike(!like)
  }

  useEffect(() => {
    let favourites = localStorage.getItem('favourites');

    liked && setTimeout(()=>{
      like
        ? JSON.parse(favourites).filter(e => e.name === item.name).length === 0 && localStorage.setItem('favourites', JSON.stringify([...JSON.parse(favourites), item])) 
        : localStorage.setItem("favourites", JSON.stringify(JSON.parse(favourites).filter(e => e.name !== item.name)));
    },100) 
  }, [like]);

  useEffect(()=>{
    let favourites = localStorage.getItem('favourites');
    
    favourites === null && localStorage.setItem('favourites', JSON.stringify([]));
    setLike(JSON.parse(favourites).filter(e => e.name === item.name).length > 0);
  },[item])

  return (
    <div className={style.box}>
      <NavLink to={`/category/${item.name}`}><img src={item.image} alt="img-pokemon"/></NavLink>
      <NavLink to={`/category/${item.name}`}><p>{item.name}</p></NavLink>
        <div className={style.price}>
          <h3>{item.price}</h3>
          {like ? <Favorite sx={{fill: '#FF6BC9'}} onClick={onLike}/> : <FavoriteBorder sx={{fill: '#A4A2AF'}} onClick={onLike}/>}
        </div>
    </div>
  );
}

export default BestsellersCard;
