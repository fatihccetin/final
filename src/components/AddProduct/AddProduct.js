import React, { useState, useEffect } from "react";
import "./addProduct.scss";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { uploadImage } from "../../actions/uploadImage";
import { addProduct } from "../../actions/product";

const AddProduct = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories).categories;
  const brands = useSelector((state) => state.brands).brands;
  const status = useSelector((state) => state.status).status;
  const colors = useSelector((state) => state.colors).colors;
  const imageUrl = useSelector((state) => state.products).uploadImage;
  const auth = useSelector((state) => state.auth);


  const [newProduct, setNewProduct] = useState({
    category: {
      id: "",
      title: "",
    },
    brand: {
      id: "",
      title: "",
    },
    color: {
      id: "",
      title: "",
    },
    status: {
      id: "",
      title: "",
    },
    // isSold: false,
  });

  const handleOnChange = (e) => {
    setNewProduct({
      ...newProduct,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnChangeImage = (e) => {
    const formData = new FormData();
    formData.append("file", e.target.files[0]);

    dispatch(uploadImage(formData, auth.token));
    setNewProduct({
      ...newProduct,
      [e.target.name]: imageUrl ? (imageUrl.url ? imageUrl.url : "") : "",
    });
  };

  const handleOnChangeSelected = (e) => {
    if (e.target.name == "category") {
      setNewProduct({
        ...newProduct,
        category: {
          id: categories.find((c) => c.title === e.target.value).id,
          title: e.target.value,
        },
      });
    }
    if (e.target.name == "status") {
      setNewProduct({
        ...newProduct,
        status: {
          id: status.find((c) => c.title === e.target.value).id,
          title: e.target.value,
        },
      });
    }
    if (e.target.name == "color") {
      setNewProduct({
        ...newProduct,
        color: {
          id: colors.find((c) => c.title === e.target.value).id,
          title: e.target.value,
        },
      });
    }
    if (e.target.name == "brand") {
      setNewProduct({
        ...newProduct,
        brand: {
          id: brands.find((c) => c.title === e.target.value).id,
          title: e.target.value,
        },
      });
    }
  };

  useEffect(() => {
    setNewProduct({
      ...newProduct,
      imageUrl: imageUrl ? (imageUrl.url ? imageUrl.url : "") : "",
    });
  }, [imageUrl]);

  const handleSubmit = (e) => {
    dispatch(addProduct(newProduct, auth.token));
  };

  return (
    <>
      <div className="contain">
        <div className="add-container-left">
          <div className="add-title">Ürün Detayları</div>
          <div>Ürün Adı</div>
          <input
            className="pname"
            type="text"
            placeholder="Örnek: İphone 12 Pro Max"
            name="title"
            onChange={handleOnChange}
          />
          <div>Açıklama</div>
          <input
            className="pexplanation"
            type="text"
            placeholder="Ürün açıklamasını girin"
            name="description"
            onChange={handleOnChange}
          />
          <div className="add-content">
            <div className="addProductt-category">
              Kategori seçiniz
              <select
                className="add-select1"
                placeholder="Kategori seç"
                name="category"
                onChange={handleOnChangeSelected}
                value={newProduct.category.title}
              >
                <option id="">Seçiniz</option>
                {categories.map((c) => (
                  <option id={c.id}>{c.title}</option>
                ))}
              </select>
            </div>
            <div>
              <div className="addProductt-color">
                Marka
                <select
                  className="add-select2"
                  name="brand"
                  onChange={handleOnChangeSelected}
                  value={newProduct.brand.title}
                >
                  <option id="">Seçiniz</option>
                  {brands.map((c) => (
                    <option id={c.id}>{c.title}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className="add-content">
            <div className="add-colour-title">
              Renk
              <select
                className="add-select3"
                name="color"
                onChange={handleOnChangeSelected}
                value={newProduct.color.title}
              >
                <option id="">Seçiniz</option>
                {colors.map((c) => (
                  <option id={c.id}>{c.title}</option>
                ))}
              </select>
            </div>
            <div>
              <div className="add-statuss">Kullanım Durumu</div>
              <select
                className="add-select4"
                name="status"
                onChange={handleOnChangeSelected}
                value={newProduct.status.title}
              >
                <option id="">Seçiniz</option>
                {status.map((c) => (
                  <option id={c.id}>{c.title}</option>
                ))}
              </select>
            </div>
          </div>
          <div>Fiyat</div>
          <input
            className="pmoney"
            type="price"
            placeholder="Bir fiyat girin                TL"
            name="price"
            onChange={handleOnChange}
          />

          <span className="offer-add" name="isOfferable">
            Teklif Opsiyonu
          </span>
          <div className="toogle">
            <CheckBoxWrapper>
              <CheckBox
                id="checkbox"
                type="checkbox"
                name="isOfferable"
                onChange={handleOnChange}
                value="true"
              />
              <CheckBoxLabel
                htmlFor="checkbox"
                name="isOfferable"
                onChange={handleOnChange}
              />
            </CheckBoxWrapper>
          </div>
        </div>

        {/* --------------------------------------------- */}
        <div className="add-container-right">
          <div className="add-img">Ürün Görseli</div>
          <div className="file-input">
            <div className="add-upload-titlee">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="29.92"
                height="28.556"
                viewBox="0 0 29.92 28.556"
              >
                <g
                  id="Group_6911"
                  data-name="Group 6911"
                  transform="translate(-324.023 -407.388)"
                >
                  <path
                    id="Path_14464"
                    data-name="Path 14464"
                    d="M353.764,420.935a7.5,7.5,0,0,0-6.955-5.511h-1.17a10.96,10.96,0,0,0-20.429-1.881c-1.842,3.836-1.5,9.775.759,13.24a.7.7,0,0,0,1.172-.765c-1.989-3.047-2.294-8.483-.677-11.852a9.565,9.565,0,0,1,17.954,2.119.7.7,0,0,0,.682.539h1.678a6.091,6.091,0,0,1,5.625,4.439,6.86,6.86,0,0,1-.908,5.052.7.7,0,0,0,.223.965.687.687,0,0,0,.37.107.7.7,0,0,0,.6-.329A8.289,8.289,0,0,0,353.764,420.935Z"
                    fill="#4b9ce2"
                  />
                  <path
                    id="Path_14465"
                    data-name="Path 14465"
                    d="M339.46,421.91a.72.72,0,0,0-.99,0l-5.7,5.706a.7.7,0,0,0,.99.99l4.515-4.516c0,.01,0,.018,0,.027v11.127a.7.7,0,1,0,1.4,0V424.117c0-.009-.005-.017-.005-.027l4.517,4.516a.7.7,0,0,0,.99-.99Zm-.495,1.507c-.01,0-.018.005-.027.005l.027-.026.027.026C338.982,423.422,338.974,423.417,338.965,423.417Z"
                    fill="#4b9ce2"
                  />
                </g>
              </svg>
            </div>
            <div className="add-upload-body">Sürükleyip bırakarak yükle</div>
            <div className="add-upload-body">veya</div>
            <input
              type="file"
              name="imageUrl"
              className="form-file"
              accept="image/*"
              onChange={handleOnChangeImage}
            />
            <div className="add-upload-body2">
              PNG ve JPEG Dosya boyutu: max, 100kb
            </div>
          </div>

          <button className="addProduct-btn" onClick={handleSubmit}>
            Kaydet
          </button>
        </div>
      </div>
    </>
  );
};
const CheckBoxWrapper = styled.div`
  position: relative;
`;
const CheckBoxLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 42px;
  height: 26px;
  border-radius: 15px;
  background: #bebebe;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 3px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;
const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 26px;
  &:checked + ${CheckBoxLabel} {
    background: #4fbe79;
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 21px;
      transition: 0.2s;
    }
  }
`;

export default AddProduct;
