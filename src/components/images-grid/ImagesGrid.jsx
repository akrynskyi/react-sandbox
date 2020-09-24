import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as imagesActions from '../../store/images-state/imagesActions';

import { 
  GridContainer, 
  LayoutContent, 
  ImageCard, 
  Image 
} from '../styled';

class ImagesGrid extends Component {
  constructor(props) {
    super(props);

    this.state = { };
  }

  componentDidMount() {
    const { fetchImages } = this.props;
    fetchImages();
  }

  render() {
    const { images } = this.props;

    return (
      <LayoutContent>
        <GridContainer>
          {
            images.map(({id, urls, alt_description: description, height, width}) => {
              const { small } = urls;
              const unit = Math.ceil(height / width);

              return (
                <ImageCard 
                  key={id}
                  gridRow={`span ${unit}`}
                >
                  <Image 
                    src={small} 
                    alt={description}
                  />
                </ImageCard>
              );
            })
          }
        </GridContainer>
      </LayoutContent>
    );
  }
}

const mapStateToProps = (state) => state.images;

export default connect(mapStateToProps, imagesActions)(ImagesGrid);