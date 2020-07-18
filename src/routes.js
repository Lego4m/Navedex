import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Home from './pages/Home';
import NewNaver from './pages/NewNaver';
import EditNaver from './pages/EditNaver';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/home" component={Home} />
        <Route path="/newnaver" component={NewNaver} />
        <Route path="/editnaver/:naver" component={EditNaver} />
      </Switch>
    </BrowserRouter>
  );
}
