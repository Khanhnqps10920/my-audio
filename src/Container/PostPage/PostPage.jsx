import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import "./PostPage.scss";
import Header from '../../Components/Common/Header/Header';
import Footer from '../../Components/Common/Footer/Footer';

class PostPage extends PureComponent {


  render() {
    return (
      <div className="body">
        <Header />
        <div className="post position-relative">
          <div className="post__banner"></div>
          <div className="container post__main-content position-absolute">
            <div className="row">
              <div className="col-lg-5 col-md-5 col-sm-12">
                <div className="post__item">
                  <div className="post__image">
                    <img src="/images/haikyuu.png" alt="" />
                  </div>
                  <button>START READING VOL.1</button>
                </div>
              </div>
              <div className="col-lg-7 col-md-7 col-sm-12">
                <div className="post__content">
                  <div className="post__title">
                    <h1>Haikyuu</h1>
                  </div>
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
                      <h5>RATINGS:</h5>
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
                  </div>
                  <div className="post__vol-example">
                    <h3>SOME VOL.</h3>
                  </div>
                  <div className="row">
                    <div className="col-lg-4 col-md-12 col-sm-12">
                      <div className="post__image"><img src="/images/vol-1.jpg" alt="" /></div>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12">
                      <div className="post__image"><img src="/images/vol-2.jpg" alt="" /></div>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12">
                      <div className="post__image"><img src="/images/vol-3.jpg" alt="" /></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

PostPage.propTypes = {

};

export default PostPage;