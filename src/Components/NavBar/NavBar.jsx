import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import "./NavBar.scss";

class NavBar extends PureComponent {
  render() {
    return (
      <div className="container navigation d-block">
        <h1 className="navigation__title">
          LOREM IPSUM
        </h1>
        <div className="row justify-content-between mt-5">
          <div className="col-sm-12 col-md-6 col-lg-6">
            <div className="navigation__select d-flex">
              <div className="select__item mr-3">
                <select name="" id="">
                  <option value="">
                    POPULAR
                  </option>

                </select>
              </div>

              <div className="select__item">
                <select name="" id="">
                  <option value="">
                    ACTION/ADVANTURE
                  </option>
                </select>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6">
            <div className="navigation__input d-flex justify-content-between">
              <div className="input__item input mr-3">
                <input type="text" placeholder="Find your iterest" />
              </div>
              <div className="input__item button">
                <button type="button" class="btn"><i class="fas fa-search mr-1"></i> SEARCH</button>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

NavBar.propTypes = {

};

export default NavBar;