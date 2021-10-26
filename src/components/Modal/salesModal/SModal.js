import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { CSSTransition } from "react-transition-group";
import { purchaseProduct } from "../../../actions/product";
import "./salesModal.scss";


const SModal = props => {
  const closeOnEscapeKeyDown = e => {
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

  const productDetail = useSelector(state => state.products.productDetail)
  const auth = useSelector((state) => state.auth);
  
  const handleClick = () => {
    dispatch(purchaseProduct(productDetail.id, auth.token))
  }

  return ReactDOM.createPortal(
    <CSSTransition
      in={props.sshow}
      unmountOnExit
      timeout={{ enter: 0, exit: 300 }}
    >
      <div className="sales-modal" onClick={props.onClose}>
        <div className="sales-modal-content" onClick={e => e.stopPropagation()}>
          <div className="sales-modal-header">
            <h4 className="sales-modal-title">{props.title}</h4>
           
          </div>
         <div className="sales-modal-bod">
           Satın Almak İstiyor musunuz?
         </div>
         

          <div className="sales-modal-foote">
          <button className="sales-left" onClick={props.onClose} >
              Vazgeç
            </button>
            <button className="sales-right" onClick={handleClick} >
              Satın Al
            </button>
          </div>
        </div>
      </div>
    </CSSTransition>,
    document.getElementById("root")
  );
};

export default SModal;
