import React from 'react';
import style from './css/productContainer.module.css'
import '../../App.css'
import { useState } from 'react';
import { Favorite, FavoriteBorder } from '@mui/icons-material';

const ProductContainer = ({products}) => {
  const [like, setLike] = useState(false)
  
  const onLike = () => {
    setLike(!like)
  }

  return (
    <div className={style.box}>
      <div>
        <img src={products.image} alt="productImg"/>
      </div>
      <div className={style.centralBox}>
        <h3>{products.name}</h3>
        <p><span>Процессор </span> 8-Core Qualcomm Snapdragon 678</p>
        <p><span>Основная камера </span> 48 MP + 8 MP + 2 MP + 2 MP</p>
        <p><span>Фронтальная камера </span> 13 MP</p>
        <p><span>Встроенная память </span> 128 Гб</p>
        <p><span>Оперативная память </span> 6Гб</p>
      </div>
      <div className={style.rightBox}>
        <h3>{products.price} сом</h3>
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
