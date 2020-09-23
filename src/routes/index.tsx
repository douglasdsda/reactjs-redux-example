import React from 'react';
import { Route, Switch } from 'react-router-dom';

 

import DashBord from '../pages/DashBord';
 
const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={DashBord} />

  </Switch>
);

export default Routes;
