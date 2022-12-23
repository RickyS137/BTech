import React, { useEffect, useState } from 'react';
import ProductContainer from '../../components/productContainer/productContainer';
import style from './css/favouritesPage.module.css'
import '../../App.css'

const FavouritesPage = () => {
  const [update, setUpdate] = useState(false)
  const [products, setProducts] = useState([])

  
  const handleRemove = (product) => {
    localStorage.setItem('favourites', JSON.stringify(JSON.parse(localStorage.getItem('favourites')).filter(e => e.name !== product.name)));
    setUpdate(!update)
  };
  
  useEffect(() => {
    setProducts(JSON.parse(localStorage.getItem('favourites')))
  }, [update])

  return (
    <div className={style.box}>
      <div className='container'>
      {products !== null 
      ?
      products.length === 0 ? 'Здесь пока ничего нет' : products.map((item, i) => <li key={i}><ProductContainer product={item} liked={false} handleRemove={handleRemove}/></li>)
      : 'Здесь пока ничего нет'
      }
      </div>
    </div>
  );
}

export default FavouritesPage;
