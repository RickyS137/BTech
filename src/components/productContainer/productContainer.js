import React from 'react';
import style from './css/productContainer.module.css'
import '../../App.css'
import { useState, useEffect } from 'react';
import { Favorite, FavoriteBorder } from '@mui/icons-material';

const ProductContainer = ({product}) => {
  const [like, setLike] = useState(false)
  
  const p = (item) => {
    return JSON.parse(item)
  }
  const s = (item) => {
    return JSON.stringify(item)
  }
  const onLike = () => {
    setLike(!like);
  };
  
  useEffect(() => {
    let basket = localStorage.getItem('basket');
    basket === null && localStorage.setItem('basket', s([]));
    
    for (let i in p(basket)){
      p(basket)[i].name === product.name && setLike(true)
    }

    setTimeout(()=>{
      like 
      ? p(basket).filter(e => e.name === product.name).length === 0 && localStorage.setItem('basket', s([p(basket), product])) 
      : localStorage.setItem("basket", s(p(basket).filter(e => e.name !== product.name)));
    },100)

    

  }, [like]);
  return ( 
    <div className={style.box}>
      <div>
        <img src={product.image} alt="productImg"/>
      </div>
      <div className={style.centralBox}>
        <h3>{product.name}</h3>
        <p><span>Процессор </span> 8-Core Qualcomm Snapdragon 678</p>
        <p><span>Основная камера </span> 48 MP + 8 MP + 2 MP + 2 MP</p>
        <p><span>Фронтальная камера </span> 13 MP</p>
        <p><span>Встроенная память </span> 128 Гб</p>
        <p><span>Оперативная память </span> 6Гб</p>
      </div>
      <div className={style.rightBox}>
        <h3>{product.price} сом</h3>
        <button className='btn'>В корзину</button>
        <p>
          {like ? <Favorite sx={{fill: '#FF6BC9'}} onClick={onLike}/> : <FavoriteBorder sx={{fill: '#A4A2AF'}} onClick={onLike}/>}
        <span onClick={onLike}>Нравится</span>
        </p>
      </div>
    </div>
  );
}

export default ProductContainer;
