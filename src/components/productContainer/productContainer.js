import React from 'react';
import style from './css/productContainer.module.css'
import '../../App.css'
import { useState, useEffect } from 'react';
import { Favorite, FavoriteBorder } from '@mui/icons-material';

const ProductContainer = ({product, liked = true, inBusket = true, handleRemove}) => {
  const [like, setLike] = useState(false)
  const [add, setAdd] = useState(false)
  
  const p = (item) => {
    return JSON.parse(item)
  }
  const s = (item) => {
    return JSON.stringify(item)
  }
  const onLike = () => {
    setLike(!like);
  };
  const onAdd = () => {
    setAdd(!add)
  }

  // const handleremove = () => {
  //   localStorage.setItem('favourites', s(p(localStorage.getItem('favourites')).filter(e => e.name !== product.name)));
  //   setUpdate(!update)
  // };

  const handleDelete = () => {
    localStorage.setItem('busket', s(p(localStorage.getItem('busket')).filter(e => e.name !== product.name)));
  }
  
  useEffect(() => {
    let favourites = localStorage.getItem('favourites');

    liked && setTimeout(()=>{
      like
        ? p(favourites).filter(e => e.name === product.name).length === 0 && localStorage.setItem('favourites', s([...p(favourites), product])) 
        : localStorage.setItem("favourites", s(p(favourites).filter(e => e.name !== product.name)));
    },100) 
  }, [like]);

  useEffect(()=>{
    let favourites = localStorage.getItem('favourites');
    
    favourites === null && localStorage.setItem('favourites', s([]));
    setLike(p(favourites).filter(e => e.name === product.name).length > 0);
  },[product])

  useEffect(() => {
    let busket = localStorage.getItem('busket');
    
    busket === null && localStorage.setItem('busket', s([]));
    for (let i in p(busket)){
      p(busket)[i].name === product.name && setAdd(true);
    }
    inBusket && setTimeout(()=>{
      add 
        ? p(busket).filter(e => e.name === product.name).length === 0 && localStorage.setItem('busket', s([...p(busket), product])) 
        : localStorage.setItem("busket", s(p(busket).filter(e => e.name !== product.name)));
    },100) 
  }, [add]);
  
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
        <p>
          {
            inBusket
            ? <button onClick={onAdd} className='btn'>В корзину</button>
            : <button onDelete={handleDelete} onClick={handleDelete} className='btn'>Убрать из корзины</button>
          }
        </p>
        <p>
        {
          liked 
            ? <span onClick={onLike}>{like ? <Favorite sx={{fill: '#FF6BC9'}} onClick={onLike}/> : <FavoriteBorder sx={{fill: '#A4A2AF'}} onClick={onLike}/>}Нравится</span>
            : <button style={{backgroundColor: 'transparent', border: 'none'}}><p style={{color: '#000' }} onClick={() => handleRemove(product)}>Удалить</p></button>
          }
        </p>
      </div>
    </div>
  );
}

export default ProductContainer;
