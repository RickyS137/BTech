import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BestsellersCard from '../../components/bestsellers/bestsellersCard/BestsellersCard';
import {
  getProducts,
  LoadSelect,
  ProductsSelect,
} from '../../redux/slice/productsSlice';
import '../../App.css';
import {CircularProgress, Pagination} from '@mui/material';
import style from './css/bestsellerspage.module.css';

const BestsellersPage = () => {
  const products = useSelector(ProductsSelect);
  const load = useSelector(LoadSelect);
  const dispatch = useDispatch();

  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(getProducts(20));
  }, []);

  return (
    <div className={style.box}>
      <div className="container">
        <h2>Хиты продаж</h2>
        <ul className={style.products}>
          {load
            ? <CircularProgress/>
            : products.slice(page * 20 - 20, page * 20).map((item, i) => (
                <li key={i}>
                  <BestsellersCard item={item} />
                </li>
              ))}
        </ul>
        {!load && (
          <div className={style.pagination}>
            {
              products.length > 20 &&
              <Pagination
                size='large'
                color="primary"
                count={Math.ceil(products.length / 20)}
                onChange={(_, e) => setPage(e)}
            />}
          </div>
        )}
      </div>
    </div>
  );
};

export default BestsellersPage;
