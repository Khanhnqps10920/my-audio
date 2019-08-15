import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import "./Post.scss";
import ModalComponent from '../Modal/ModalComponent';
import { withRouter } from "react-router-dom";


class Post extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      modal: false
    }
  }

  toggleModal = () => {
    this.setState({
      modal: !this.state.modal
    })
  }

  handleClickPost = (e) => {

    const { history, location } = this.props;
    const url = `${location.pathname}post`;
    history.push(url);

  }

  render() {

    const { modal } = this.state;
    console.log(modal, this.props);

    return (
      <div className="post-item p-2" onClick={(e) => this.handleClickPost(e)}>
        <div className="post-item__image pb-2">
          <img src="/images/demo.jpg" alt="" />
        </div>
        <div className="post-item__title text-center mt-2">
          <h3>Lorem</h3>
          <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          <i className="fas fa-chevron-down" onClick={this.toggleModal}></i>
        </div>
        <ModalComponent modal={modal} toggle={(e) => {
          return this.toggleModal();
        }} />
      </div>
    );
  }
}

Post.propTypes = {

};

export default withRouter(Post);