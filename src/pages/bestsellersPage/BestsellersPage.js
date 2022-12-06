import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BestsellersCard from '../../components/bestsellers/bestsellersCard/BestsellersCard';
import { getProducts, ProductsSelect } from '../../redux/slice/productsSlice';
import '../../App.css';
import { Pagination } from '@mui/material';
import style from './css/bestsellerspage.module.css'

const BestsellersPage = () => {
  const products = useSelector(ProductsSelect);
  const dispatch = useDispatch();

  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <div className={style.box}>
      <div className="container">
      <h2>Хиты продаж</h2>
        <ul className={style.products}>
          {products.slice((page * 20) - 20, (page * 20)).map((item, i) => (
            <li><BestsellersCard item={item}/></li>
            ))}
        </ul>
            <Pagination count={Math.ceil(products.length / 20)} onChange={(_,e) => {
              setPage(e)
            }}/>
      </div>
    </div>
  );
};

export default BestsellersPage;
