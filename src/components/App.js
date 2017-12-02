/* eslint-disable import/no-named-as-default */
import React from 'react';
import PropTypes from 'prop-types';
import NotFoundPage from './NotFoundPage';
import { Switch, Route } from 'react-router-dom';
import HomePage from './HomePage';

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route component={NotFoundPage} />
      </Switch>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
