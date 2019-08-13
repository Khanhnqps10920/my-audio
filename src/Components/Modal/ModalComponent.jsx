import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import "./ModalComponent.scss";

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


class ModalComponent extends PureComponent {


  render() {

    const { modal, toggle } = this.props;
    return (

      <div>
        {/* <Button color="success" onClick={this.toggle}>React Modal</Button> */}
        <Modal isOpen={modal}>
          <ModalBody>
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-12">
                <div className="image">
                  <img src="/images/demo.jpg" alt="" />
                </div>
              </div>
              <div className="col-lg-8 col-md-8 col-sm-12">
                <div className="content">
                  <h1>Haikyu!!</h1>
                  <ul>
                    <li className="d-flex justify-content-between">
                      <p>GENRE: </p>
                      <h5>SPORTS</h5>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <Button color="danger" onClick={toggle}>Close</Button>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

ModalComponent.propTypes = {

};

export default ModalComponent;