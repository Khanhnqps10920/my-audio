import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import PostList from '../../Components/PostList/PostList';
import Header from '../../Components/Common/Header/Header';
import Footer from '../../Components/Common/Footer/Footer';
import NavBar from '../../Components/NavBar/NavBar';

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
      <div>
        <Header />
        <NavBar />
        <PostList />
        <Footer />
      </div>
    );
  }
}

HomePage.propTypes = {

};

export default HomePage;