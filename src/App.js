import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import "./App.css";
import HomePage from './Container/HomePage/HomePage';
import PostPage from './Container/PostPage/PostPage';


class App extends PureComponent {
  render() {
    return (
      <BrowserRouter>

        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/post" component={PostPage} />
        </Switch>

      </BrowserRouter>
    );
  }
}

App.propTypes = {

};

export default App;
