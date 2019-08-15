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
            <div className="row position-relative">
              <div onClick={toggle} className="close position-absolute">
                <i class="fas fa-times"></i>
              </div>
              <div className="col-lg-5 col-md-4 col-sm-12">
                <div className="image">
                  <img src="/images/haikyuu.png" alt="" />
                </div>
              </div>
              <div className="col-lg-7 col-md-8 col-sm-12">
                <div className="content">
                  <h1>Haikyu!!</h1>

                  <ul>
                    <li className="d-flex">
                      <h5>GENRE:</h5>
                      <p>Sport </p>
                    </li>
                    <li className="d-flex">
                      <h5>ARTIST:</h5>
                      <p>Haruichi Furudate </p>
                    </li>
                    <li className="d-flex">
                      <h5>LASTED UPDATE:</h5>
                      <p>VOL. 26 </p>
                    </li>
                    <li className="d-flex">
                      <h5>RATINGS</h5>
                      <p>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star-half-alt"></i>
                      </p>
                    </li>
                  </ul>

                  <div>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam ipsam porro distinctio ad accusamus minus animi, itaque adipisci consequatur natus...</p>
                    <span><a href="#">Read more</a></span>
                  </div>

                </div>
              </div>
            </div>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

ModalComponent.propTypes = {

};

export default ModalComponent;