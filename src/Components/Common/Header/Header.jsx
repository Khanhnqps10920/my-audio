import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import "./Header.scss";
import NavBar from '../../NavBar/NavBar';
import { VerticleButton as ScrollUpButton } from "react-scroll-up-button"; //Add this line Here


class Header extends PureComponent {
  render() {
    return (
      <header>
        <div className="container d-flex justify-content-between align-items-center header">
          <div className="header__line"></div>
          <div className="header__title">
            <h5>MY:AUDIO</h5>
          </div>
          <div className="header__line"></div>
        </div>
        <NavBar />
        <ScrollUpButton />
      </header>
    );
  }
}

Header.propTypes = {

};

export default Header;