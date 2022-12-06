import { KeyboardArrowDown } from '@mui/icons-material';
import React from 'react';
import style from './css/favouritePage.module.css'
import '../../App.css'
import { getProducts, ProductsSelect } from '../../redux/slice/productsSlice';
import { useDispatch, useSelector } from 'react-redux';
import ProductContainer from '../../components/productContainer/productContainer';
import { useEffect } from 'react';


const FavoritesPage = () => {
  const products = useSelector(ProductsSelect)
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(getProducts())
  },[])

  return (
    <div className={style.box}>
      <div className='container'>
        <div className={style.boxInner}>
          <div className={style.leftBox}>
            <h2>Смартфоны</h2> 
            <h3>Операционная система <KeyboardArrowDown/></h3>
            <h3>Бренд <KeyboardArrowDown/></h3>
            <h3>Цена <KeyboardArrowDown/></h3>
            <h3>Год выпуска <KeyboardArrowDown/></h3>
          </div>
          <ul>
          {products.slice(0,5).map((item, i) => <li key={i}><ProductContainer products={item}/></li>)}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FavoritesPage;
