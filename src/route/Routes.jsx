import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Login } from '../component/Login';
import { Contacts } from '../component/Contacts';
import { ROOT, LOGIN, CONTACTS } from '../constants/pathnames';

const routes = [
  { path: LOGIN, component: Login, exact: false },
  { path: CONTACTS, component: Contacts, exact: false },
];

export const Routes = () => {
  return (
    <Switch>
      <Route path={ROOT} exact>
        <Redirect to={LOGIN} exact />
      </Route>
      {routes.map((props) => (
        <Route key={props.path} {...props} />
      ))}
    </Switch>
  );
};
