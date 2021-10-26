import {
    GET_PRODUCT,
    SELECT_CATEGORY,
    GET_PRODUCT_DETAIL,
    PURCHASE_PRODUCT,
    CREATE_PRODUCT,
    UPLOAD_IMAGE,
    OFFER_PRODUCT
  } from "../actions/types";
  
  const INITIAL_STATE = {
    selected: [],
    categories: {
      hepsi :[],
      pantalon: [],
      gömlek: [],
      tişört: [],
      şort: [],
      sweatshirt: [],
      kazak: [],
      polar: [],
      mont: [],
      abiye: [],
      ayakkabı: [],
      aksesuar: [],
      çanta: [],
      triko: [],
      diğer: [],
    },
    filters: ['hepsi', 'pantalon', 'gömlek', 'tişört', 'şort', 'sweatshirt', 'kazak', 'polar', 'mont', 'abiye', 'ayakkabı', 'aksesuar', 'çanta', 'triko', 'diğer'],
    productDetail: {},
    purchaseProduct: {},
    newProduct: {},
    uploadImage:{},
    offerProduct:{}
  };
  
  const productReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
  
      case GET_PRODUCT: {
        return {
          ...state,
          categories: {
            hepsi: action.payload.data,
            pantolon: action.payload.data.filter(p =>
              state.filters.every(val => p.category.title.indexOf('pantolon') > -1)
            ),
            gömlek: action.payload.data.filter(p =>
              state.filters.every(val => p.category.title.indexOf('gömlek') > -1)
            ),
            tişört: action.payload.data.filter(p =>
              state.filters.every(val => p.category.title.indexOf('tişört') > -1)
            ),
            şort: action.payload.data.filter(p =>
              state.filters.every(val => p.category.title.indexOf('şort') > -1)
            ),
            sweatshirt: action.payload.data.filter(p =>
              state.filters.every(val => p.category.title.indexOf('sweatshirt') > -1)
            ),
            kazak: action.payload.data.filter(p =>
              state.filters.every(val => p.category.title.indexOf('kazak') > -1)
            ),
            polar: action.payload.data.filter(p =>
              state.filters.every(val => p.category.title.indexOf('polar') > -1)
            ),
            mont: action.payload.data.filter(p =>
              state.filters.every(val => p.category.title.indexOf('mont') > -1)
            ),
            abiye: action.payload.data.filter(p =>
              state.filters.every(val => p.category.title.indexOf('abiye') > -1)
            ),
            ayakkabı: action.payload.data.filter(p =>
              state.filters.every(val => p.category.title.indexOf('ayakkabı') > -1)
            ),
            aksesuar: action.payload.data.filter(p =>
              state.filters.every(val => p.category.title.indexOf('aksesuar') > -1)
            ),
            çanta: action.payload.data.filter(p =>
              state.filters.every(val => p.category.title.indexOf('çanta') > -1)
            ),
            triko: action.payload.data.filter(p =>
              state.filters.every(val => p.category.title.indexOf('triko') > -1)
            ),
            diğer: action.payload.data.filter(p =>
              state.filters.every(val => p.category.title.indexOf('diğer') > -1)
            ),
          }
        };
      }
  
      case SELECT_CATEGORY:
        return {
          ...state,
          selected: action.payload,
        };
  
        case GET_PRODUCT_DETAIL:
        return {
          ...state,
          productDetail: action.payload.data,
        };
  
        case PURCHASE_PRODUCT:
        return {
          ...state,
          purchaseProduct: action.payload.data,
        };
        
        case CREATE_PRODUCT:
          return {
            ...state,
            newProduct: action.payload.data,
          };
  
          
        case UPLOAD_IMAGE:
          return {
            ...state,
            uploadImage: action.payload.data,
          };
  
        case OFFER_PRODUCT:
          return {
            ...state,
            offerProduct: action.payload.data,
          };
      
  
      default:
        return state;
    }
  };
  
  export default productReducer;