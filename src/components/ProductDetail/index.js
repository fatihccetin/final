import React, { useEffect, useState } from "react";
import "./productDetail.scss";
import Modal from "../Modal/offerModal/Modal";
import SModal from "../Modal/salesModal/SModal";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetail } from "../../actions/product";
import { cancelOffer, getGivenOffers } from "../../actions/offer";

const ProductDetail = (props) => {
  const dispatch = useDispatch();
  const productDetail = useSelector((state) => state.products.productDetail);

  const auth = useSelector((state) => state.auth);

  const [show, setShow] = useState(false);
  const [sshow, setSShow] = useState(false);

  useEffect(() => {
    dispatch(getProductDetail(props.match.params.id, auth.token));
    dispatch(getGivenOffers(auth.token));
  }, []);

  const givenOffers = useSelector((state) => state.offers).givenOffers;

  var mygivenOffer = givenOffers.find((r) => r.product.id === productDetail.id);

  const deleteOffer = (e) => {

    var id = e.target.id;
    dispatch(cancelOffer(id, auth.token))
  };

  return (
    <>
      <div className="detail-container">
        <div className="detail-container-left">
          <img src={productDetail.imageUrl} alt="" />
        </div>
        <div className="detail-container-right">
          <div className="detail-title">{productDetail.title}</div>
          <div className="detail-brand">
            <span className="detail-brand-1">Marka:</span>
            <span className="detail-brand-2">
              {" "}
              {productDetail.brand
                ? productDetail.brand.title
                  ? productDetail.brand.title
                  : ""
                : ""}
            </span>
          </div>
          <div className="detail-colour">
            <span className="detail-colour-1">Renk:</span>
            <span className="detail-colour-2">
              {productDetail.color
                ? productDetail.color.title
                  ? productDetail.color.title
                  : ""
                : ""}
            </span>
          </div>
          <div className="detail-case">
            <span className="detail-case-1">Kullanım Durumu:</span>
            <span className="detail-case-2">
              {productDetail.status
                ? productDetail.status.title
                  ? productDetail.status.title
                  : ""
                : ""}
            </span>
          </div>
          <div className="detail-price">{productDetail.price} TL</div>

          <div className="detail-btn">
            {productDetail.isSold ? (
              <button className="detail-btn-2">Bu Ürün Satışta Değil</button>
            ) : (
              <>
                <button className="detail-btn-1" onClick={() => setSShow(true)}>
                  Satın Al
                  <SModal
                    title="Satın Al"
                    onClose={() => setSShow(false)}
                    sshow={sshow}
                  />
                </button>

                {mygivenOffer != null ? (
                  <button className="detail-btn-2" id={productDetail.id} onClick={deleteOffer}>
                    Teklifi Geri Çek
                  </button>
                ) : (
                  <button
                    className="detail-btn-2"
                    onClick={() => setShow(true)}
                  >
                    Teklif Ver
                    <Modal
                      title="Teklif Ver"
                      onClose={() => setShow(false)}
                      show={show}
                    />
                  </button>
                )}
              </>
            )}
          </div>
          <div className="explanation">
            <div className="detail-explanation-title">Açıklama</div>
            <div className="detail-explanation-ex">
              {productDetail.description}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
