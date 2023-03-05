import React, { useEffect, useState } from 'react';
import ProductContainer from '../../components/productContainer/productContainer';
import style from './css/favouritesPage.module.css'
import '../../App.css'
import ActiveLastBreadcrumb from '../../components/breadCrumbs/breadCrumbs';
import { Pagination } from '@mui/material';

const FavouritesPage = () => {
  const [update, setUpdate] = useState(false)
  const [products, setProducts] = useState([])
  const [page, setPage] = useState(1)

  
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
        <ActiveLastBreadcrumb/>
      <div>
          {products !== null 
          ?
          products.length === 0 ? <div style={{height: '400px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>Здесь пока ничего нет</div> : products.slice(page * 5 - 5, page * 5).map((item, i) => <li key={i}><ProductContainer product={item} liked={false} handleRemove={handleRemove}/></li>)
          : <div style={{height: '400px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>Здесь пока ничего нет</div>
          }
      </div>
      <div className={style.pagination}>
          data.filter(item=>item.genre.includes(i,i))
          {
          products.length > 0 && <Pagination
          size='large'
          color='primary'
          count={Math.ceil(products.length / 5)}
          onChange={(_,e) => setPage(e)}
          />
          }
      </div>
      </div>
    </div>
  );
}

export default FavouritesPage;
