import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BestsellersCard from '../../components/bestsellers/bestsellersCard/BestsellersCard';
import { getProducts, ProductsSelect } from '../../redux/slice/productsSlice';
import '../../App.css';
import { Pagination } from '@mui/material';

const BestsellersPage = () => {
  const products = useSelector(ProductsSelect);
  const dispatch = useDispatch();

  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  console.log(products);
  return (
    <>
      <h3>Хиты продаж</h3>
      <div className="container">
        <Pagination/>
        {products.slice(0, 20).map((item, i) => (
          <BestsellersCard item={item} />
        ))}
      </div>
    </>
  );
};

export default BestsellersPage;
