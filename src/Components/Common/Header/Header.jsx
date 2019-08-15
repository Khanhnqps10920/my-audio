import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import "./Header.scss";
import { VerticleButton as ScrollUpButton } from "react-scroll-up-button"; //Add this line Here


class Header extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isTop: true
    }

  }

  componentDidMount() {
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY < 100;
      if (isTop !== this.state.isTop) {
        this.setState({ isTop })
      }
    })
  }

  render() {
    return (
      <header>
        <nav className={this.state.isTop ? " " : "scroll"}>
          <div className="d-flex container align-items-center justify-content-between navb">
            <ul className="d-flex left">
              <li>HOME</li>
              <li>NEW RELEASE</li>
              <li>POPULAR</li>
              <li>BROWSE</li>
            </ul>

            <ul className="d-flex right">
              <li>
                <input type="text" placeholder="Type title, author, or genre" />
                <i className="fas fa-search special"></i>
              </li>
              <li>
                <i className="fas fa-id-badge"></i>
              </li>
              <li>
                <i className="fas fa-smile-wink"></i>
              </li>
            </ul>

          </div>
        </nav>
        <ScrollUpButton />
      </header>
    );
  }
}

Header.propTypes = {

};

export default Header;