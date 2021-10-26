import { lazy, Suspense } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';

const Login = lazy(() => import('../pages/Login/Login'));
const Register = lazy(() => import('../pages/Register/Register'));
const Home = lazy(() => import('../pages/Home/index'));
const ProductDetail = lazy(() => import('../components/ProductDetail/index'));
const AddProduct = lazy(() => import('../components/AddProduct/AddProduct'));
const Offer = lazy(() => import('../components/offer/Offer'));

const routerPaths = [
  {
    path: '/login',
    name: 'login',
    component: Login,
    exact: false,
    props: {},
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
    exact: false,
    props: {},
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    exact: false,
    props: {},
  },
  {
    path: '/product_detail/:id',
    name: 'product_detail',
    component: ProductDetail,
    exact: false,
    props: {},
  },
  {
    path: '/add_product',
    name: 'add_product',
    component: AddProduct,
    exact: false,
    props: {},
  },
  {
    path: '/offer',
    name: 'offer',
    component: Offer,
    exact: false,
    props: {},
  },
  {
    path: '/home/category/:key',
    name: 'category',
    component: Home,
    exact: false,
    props: {},
  },
];

const Routes = (
  <BrowserRouter>
    <Switch>
      <Suspense fallback={<div>Loading...</div>}>
        {routerPaths.map(({ path, name, component, props }) => (
          <ProtectedRoute
            key={name}
            exact
            path={path}
            component={component}
            props={props}
          />
        ))}
      </Suspense>
    </Switch>
  </BrowserRouter>
);

export default Routes;