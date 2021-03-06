import PropTypes from 'prop-types';
import { Redirect, Route, withRouter } from 'react-router-dom';

const protectedRouteConditions = ['/login', '/register', '/home', '/product_detail/:id','/add_product', '/offer','/home/category/:key'];
const isProtectedRoute = (path) => protectedRouteConditions.includes(path);

const ProtectedRoute = ({ component: Component, ...rest }) => {
  if (isProtectedRoute(rest.path)) {
    return <Route {...rest} component={Component} />;
  }

  return (
    <Route
      {...rest}
      render={(props) =>
       
          <Redirect
            to={{ pathname: '/login', state: { from: rest.location } }}
          />
  
      }
      
    />
  );
};

ProtectedRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
};

ProtectedRoute.defaultProps = {};

export default withRouter(ProtectedRoute);