import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NotFoundPage from '../../NotFoundPage';
import HomePage from '../../../home/HomePage';
import './content.scss';

export default () => (
  <main>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route component={NotFoundPage} />
    </Switch>
  </main>
);