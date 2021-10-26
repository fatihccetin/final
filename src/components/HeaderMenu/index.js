import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectCategory } from '../../actions/product';
import './HeaderMenu.scss'

const HeaderMenu = () => {
  const dispatch = useDispatch()

  const products = useSelector(state => state.products)
  
  const handleClick = (e) => {
    dispatch(selectCategory(products.categories[e.target.id]));
  }

  return (
    <>
      <div className="header-menu">
        <div className="menu-items">
          {
            Object.keys(products.categories).map(key=> (
              <Link to={`/home/category/${key}`} style={{ textDecoration: 'none'}} ><span id={key}  onClick={handleClick}>{key.charAt(0).toUpperCase() + key.slice(1)}</span> </Link>
            ))
          }
          <hr className="header-hr" />
        </div>
      </div>
    </>
  );
};

export default HeaderMenu;
