import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import "./modal.scss";
import colour from "../../../img/Image5.png";
import { useDispatch, useSelector } from "react-redux";
import { offerProduct } from "../../../actions/product";

const Modal = (props) => {
  const closeOnEscapeKeyDown = (e) => {
    if ((e.charCode || e.keyCode) === 27) {
      props.onClose();
    }
  };

  useEffect(() => {
    document.body.addEventListener("keydown", closeOnEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
    };
  }, []);

  const dispatch = useDispatch();

  const auth = useSelector((state) => state.auth);
  const productDetail = useSelector((state) => state.products).productDetail;

  const [offeredPrice, setOfferedPrice] = useState({});

  const handleOnChange = (e) => {
    setOfferedPrice({
      ...offeredPrice,
      [e.target.name]: Number(e.target.value),
    });

    if(e.target.name == "radio"){
        setOfferedPrice({
          ...offeredPrice,
          offeredPrice: (productDetail.price * e.target.value) / 100,
        });
    } 
  
  };

  const handleClick = () => {
    dispatch(offerProduct(offeredPrice, productDetail.id, auth.token));
  };

  return ReactDOM.createPortal(
    <CSSTransition
      in={props.show}
      unmountOnExit
      timeout={{ enter: 0, exit: 300 }}
    >
      <div className="offer-modal" onClick={props.onClose}>
        <div
          className="offer-modal-content"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="offer-modal-header">
            <h4 className="offer-modal-title">{props.title}</h4>
            <span className="offer-modal-title-close" onClick={props.onClose}>
              X
            </span>
          </div>
          <div className="offer-modal-colour">
            <div className="offer-colour-left">
              <div className="offer-colour-image">
                <img src={productDetail.imageUrl} alt="" />
                <div className="offer-colour-title">{productDetail.title}</div>
              </div>
            </div>
            <div className="offer-colour-right">
              <div>{productDetail.price}</div>
            </div>
          </div>
          <div className="offer-modal-body">
            {props.children}

            <label class="offer-modal-container">
              %20'si Kadar Teklif Ver
              <input
                type="radio"
                name="radio"
                onChange={handleOnChange}
                value="20"
              />
              <span class="offer-checkmark"></span>
            </label>
            <label class="offer-modal-container">
              %30'si Kadar Teklif Ver
              <input
                type="radio"
                name="radio"
                onChange={handleOnChange}
                value="30"
              />
              <span class="offer-checkmark"></span>
            </label>
            <label class="offer-modal-container">
              %40'si Kadar Teklif Ver
              <input
                type="radio"
                name="radio"
                onChange={handleOnChange}
                value="40"
              />
              <span class="offer-checkmark"></span>
            </label>
            <input
              className="offer-input"
              type="text"
              placeholder="Teklif gir                                                                                       TL"
              name="offeredPrice"
              onChange={handleOnChange}
              value={offeredPrice.offeredPrice}
            />
          </div>

          <div className="offer-modal-footer">
            <button
              className="offer-footer-btn"
              /*onClick={props.onClose} */ onClick={handleClick}
            >
              Onayla
            </button>
          </div>
        </div>
      </div>
    </CSSTransition>,
    document.getElementById("root")
  );
};

export default Modal;
