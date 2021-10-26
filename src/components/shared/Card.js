import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './Card.scss';
import {Link} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getProductDetail } from '../../actions/product';

const Card = ({
  data
}) => {

const dispatch = useDispatch();

const handleClick = () =>{
  dispatch(getProductDetail(data.id))
}
  return (
    <Link to={`/product_detail/${data.id}`} onClick={handleClick} id={data.id} style={{ textDecoration: 'none'}}>
      <div className="card">
        <div className="card-image">
          <img  src={data.imageUrl} height="280" width="260" />
        </div>
        <div className="img-content">
          <div className="card-body">
            <p className="species">{(data.brand.title).toUpperCase()}</p>
            <div>
              <span className="card-body-color"  >Renk:   </span>
              <span className="card-colour">{data.color.title}</span>
            </div>
          </div>

          <p className="card-status">{data.price} TL</p>
        </div>
      </div>
      </Link>
    
  );
};

export default Card;

Card.defaultProps = {
  data: {}
};

Card.propTypes = {
  data: PropTypes.object
};