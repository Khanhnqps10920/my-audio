import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import PostList from '../../Components/PostList/PostList';

class HomePage extends PureComponent {
  constructor(props) {
    super(props);

  }

  async componentDidMount() {
    try {

    } catch (e) {

    }
  }

  render() {
    return (
      <PostList />
    );
  }
}

HomePage.propTypes = {

};

export default HomePage;