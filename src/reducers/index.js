import {
    combineReducers
  } from 'redux';
  
  import AuthReducer from './auth';
  import ProductReducer from './product'
  import BrandReducer from './brand'
  import CategoryReducer from './category'
  import StatusReducer from './status'
  import ColorReducer from './color';
  import OfferReducer from './offer';
  
  export default combineReducers({
    auth: AuthReducer,
    products: ProductReducer,
    status: StatusReducer,
    colors: ColorReducer,
    brands: BrandReducer,
    categories: CategoryReducer,
    offers: OfferReducer
  
  
  });