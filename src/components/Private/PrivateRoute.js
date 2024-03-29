import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Header from '../Header/index'

export const PrivateRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => (
    <Route {...rest} component={(props) => (
      isAuthenticated ? (
        <div>
          <Header />
          <Component {...props} />
        </div>
      ) : (
          <Redirect to="/login" />
        )
    )} />
  );

const mapStateToProps = (state) => ({  
  isAuthenticated: !!state.userData
});

export default connect(mapStateToProps)(PrivateRoute);
