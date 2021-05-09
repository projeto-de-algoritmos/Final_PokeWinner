import React from 'react';
import { Switch, Route } from 'react-router-dom';

import StartPage from './pages/StartPage';
import SelectModePage from './pages/SelectModePage';
import WinnerPage from './pages/WinnerPage';

const Routes: React.FC = () => {
  return (
    <Switch>
        <Route path='/' exact component={StartPage} /> 
        <Route path='/selectMode' component={SelectModePage} />
        <Route path='/winner' component={WinnerPage} />
    </Switch>
  );
}

export default Routes;