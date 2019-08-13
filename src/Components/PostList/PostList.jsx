import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import "./PostList.scss";
import ItemsCarousel from 'react-items-carousel';

import Post from '../Post/Post';


class PostList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeItemIndex: 0
    }
  }

  render() {

    return (
      <div className="container mt-3">
        <h3 className="title">Popular</h3>
        <ItemsCarousel
          gutter={12}
          activePosition={'center'}
          chevronWidth={70}
          numberOfCards={4}
          slidesToScroll={2}
          outsideChevron={true}
          showSlither={false}
          firstAndLastGutter={false}
          activeItemIndex={this.state.activeItemIndex}
          requestToChangeActive={value => this.setState({ activeItemIndex: value })}
          rightChevron={<i className="fas fa-chevron-right chevron"></i>}
          leftChevron={<i className="fas fa-chevron-left chevron"></i>}
        >
          {Array.from(new Array(10)).map((_, i) =>
            <Post key={i} />
          )}
        </ItemsCarousel>

        <h3 className="mt-5 title">
          NEW POST
        </h3>
        <div className="row">
          {Array.from(new Array(8)).map((_, i) =>
            <div key={i} className="col-lg-3 col-md-6 col-sm-12">
              <Post />
            </div>
          )}
        </div>

      </div>

    );
  }
}

PostList.propTypes = {

};

export default PostList;