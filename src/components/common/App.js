/* eslint-disable import/no-named-as-default */
import React from 'react';
import PropTypes from 'prop-types';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import Content from './components/content/Content';
import Footer from './components/footer/Footer';
import './app.scss';

class App extends React.Component {
  render() {
    return [
      <Header key="Header" />,
      <Sidebar key="Sidebar" />,
      <Content key="Content" />,
      <Footer key = "Footer" />
    ];
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
