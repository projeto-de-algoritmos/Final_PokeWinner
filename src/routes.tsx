import React from 'react';
import { Switch, Route } from 'react-router-dom';

import StartPage from './pages/StartPage';

const Routes: React.FC = () => {
  return (
    <Switch>
        <Route path='/' exact component={StartPage} /> 
    </Switch>
  );
}

export default Routes;