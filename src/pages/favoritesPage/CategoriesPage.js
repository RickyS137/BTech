import { KeyboardArrowDown } from '@mui/icons-material';
import React, { useState } from 'react';
import style from './css/favouritePage.module.css'
import '../../App.css'
import { getProducts, LoadSelect, ProductsSelect } from '../../redux/slice/productsSlice';
import { useDispatch, useSelector } from 'react-redux';
import ProductContainer from '../../components/productContainer/productContainer';
import { useEffect } from 'react';
import { CircularProgress, Pagination } from '@mui/material';
import ActiveLastBreadcrumb from '../../components/breadCrumbs/breadCrumbs';


const CategoriesPage = () => {
  const products = useSelector(ProductsSelect);
  const dispatch = useDispatch();
  const load = useSelector(LoadSelect);
  
  const [page, setPage] = useState(1);

  
  useEffect(() => {
    dispatch(getProducts());
  },[dispatch]);

  return (
    <div className={style.box}>
      <div className='container'>
        <ActiveLastBreadcrumb/>
        <div className={style.boxInner}>
          <div className={style.leftBox}>
            <h2>Смартфоны</h2> 
            <h3>Операционная система <KeyboardArrowDown/></h3>
            <h3>Бренд <KeyboardArrowDown/></h3>
            <h3>Цена <KeyboardArrowDown/></h3>
            <h3>Год выпуска <KeyboardArrowDown/></h3>
          </div>
          <ul className={style.list}>
            {
              load
              ? <CircularProgress/>
              : products.slice(page * 5 - 5, page * 5).map((item, i) => <li key={i}><ProductContainer product={item}/></li>)
            }
          </ul>
        </div>
        <div className={style.pagination}>
            <Pagination
            size='large'
            color="primary"
            count={Math.ceil(products.length / 5)}
            onChange={(_, e) => setPage(e)}
            />
          </div>
      </div>
    </div>
  );
}

export default CategoriesPage;
