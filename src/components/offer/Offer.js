import React, { useEffect, useState } from "react";
import "./Offer.scss";
import user from "../../img/user.png";
import { useDispatch, useSelector } from "react-redux";
import {
  acceptOffer,
  getGivenOffers,
  getReceivedOffers,
  rejectOffer,
} from "../../actions/offer";
import { purchaseProduct } from "../../actions/product";

const Offer = () => {
  const dispatch = useDispatch();

  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getGivenOffers(auth.token));
    dispatch(getReceivedOffers(auth.token));
  }, []);

  const offers = useSelector((state) => state.offers);

  const [offer, setOffer] = useState(offers.receivedOffers);

  const [isClick, setIsClick] = useState(true);

  useEffect(() => {
    setOffer(offers.receivedOffers);
  }, [offers]);

  const handleClickReceived = () => {
    setOffer(offers.receivedOffers);
    setIsClick(true);
  };

  const handleClickGiven = () => {
    setOffer(offers.givenOffers);
    setIsClick(false);
  };

  const handleClickAccept = (e) => {
    dispatch(acceptOffer(e.target.id, auth.token));
  };

  const handleClickReject = (e) => {
    dispatch(rejectOffer(e.target.id, auth.token));
  };

  const onClickPurchase = (e) => {
    dispatch(purchaseProduct(e.target.id, auth.token));
  };

  useEffect(() => {
  
  }, [])
  return (
    <>
      <div className="container-top">
        <span>
          <img className="user" src={user} alt="" />
        </span>
        <div className="user-title">{auth.email}</div>
      </div>
      <div className="container-bottom">
        <div className="link">
          <span className="bottom-left" onClick={handleClickReceived}>
            Teklif Aldıklarım
          </span>
          <span className="bottom-right" onClick={handleClickGiven}>
            Teklif Verdiklerim
          </span>
          <hr  className="offer-dot"/>
          {isClick
            ? offer.map((o) => (
                <div className="bottom-body">
                  <div className="body-left">
                    <img
                      className="offer-img"
                      src={o.product.imageUrl}
                      alt=""
                    />
                    <div>
                      <div className="title">{o.product.title}</div>
                      <div className="offer">
                        <p className="left-offer">Alınan Teklif</p>
                        <p className="price-offer">{o.offeredPrice}  TL</p>
                      </div>
                    </div>
                  </div>

                  {o.status === "accepted" ? (
                    <div className="body-right-okey">
                      <p>Onaylandı</p>
                    </div>
                  ) : o.status === "rejected" ? (
                    <div className="body-right-no">
                      <p>Reddedildi</p>
                    </div>
                  ) : (
                    <div className="body-right">
                      <button
                        onClick="/"
                        className="btn-left"
                        id={o.id}
                        onClick={handleClickAccept}
                      >
                        Onayla
                      </button>
                      <button
                        onClick="/"
                        className="btn-right"
                        id={o.id}
                        onClick={handleClickReject}
                      >
                        Reddet
                      </button>
                    </div>
                  )}
                </div>
              ))
            : offer.map((o) => (
                <div className="bottom-body">
                  <div className="body-left">
                    <img
                      className="offer-img"
                      src={o.product.imageUrl}
                      alt=""
                    />
                    <div>
                      <div className="title">{o.product.title}</div>
                      <div className="offer">
                        <p className="left-offer">Teklif miktarı:</p>
                        <p className="price-offer">{o.offeredPrice} TL</p>
                      </div>
                    </div>
                  </div>

                  {o.isSold === "sold" && o.status === "accepted" ? (
                    <div className="body-right-okey">
                      <p>Satın alındı.</p>
                    </div>
                  ) : o.status === "accepted" ? (
                    <div className="body-right">
                       <button
                        onClick={onClickPurchase}
                        className="btn-left"
                        id={o.product.id}
                      >
                        Satın Al
                      </button>
                      <span className="offer-okey">Onaylandı</span>
                    </div>
                  ) : o.status === "rejected" ? (
                    <div className="body-right">
                      <p className="offer-red">Reddedildi</p>
                    </div>
                  ) : o.status === "sold" ? (
                    <div className="body-right">
                      <p>Satın Alındı</p>
                    </div>
                  ): (
                    <div className="body-right">
                     <div className="body-right">
                      <p className="offer-wait">Onay Bekleniyor</p>
                    </div>
                    </div>
                  )}
                </div>
              ))}
        </div>
      </div>
    </>
  );
};

export default Offer;
