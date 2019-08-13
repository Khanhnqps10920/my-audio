import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Header from './Components/Common/Header/Header';
import "./App.css";
import HomePage from './Container/HomePage/HomePage';
import Footer from './Components/Common/Footer/Footer';
import Modal from './Components/Modal/ModalComponent';


class App extends PureComponent {
  render() {
    return (
      <div className="content">
        <Header />
        <HomePage />
        <Footer />
      </div>
    );
  }
}

App.propTypes = {

};

export default App;
