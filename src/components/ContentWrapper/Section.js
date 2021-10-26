import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from '../../actions/product';
import Card from '../shared/Card';
import './Section.scss';


const Section = () => {
  const dispatch = useDispatch();

  const products = useSelector(state => state.products)

  const [allProducts, setAllProducts] = useState(products.categories.hepsi)

  useEffect(() => {
    dispatch(getProduct())
  }, []);

  useEffect(() => {
    setAllProducts(products.categories.hepsi);
  }, [products.categories.hepsi]);

  useEffect(() => {
    setAllProducts(products.selected);
  }, [products.selected]);
  

  return (
    <div className="section-container">
      {allProducts.map(product => (
        <Card key={product.id} data={product} />
      ))}
    </div>
  );
};

export default Section;

