import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Header from './Components/Common/Header/Header';
import "./App.css";

class App extends PureComponent {
  render() {
    return (
      <Header />
    );
  }
}

App.propTypes = {

};

export default App;
