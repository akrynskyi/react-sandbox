import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as imagesActions from '../../store/images-state/imagesActions';

import { Loader } from '../loader';
import { LoadMoreButton } from './LoadMoreButton';
import { 
  GridContainer, 
  LayoutContent, 
  ImageCard, 
  Image,
  Row,
  ImageCardOverlay,
  ImageDetails,
} from '../styled';

class ImagesGrid extends Component {

  componentDidMount() {
    this.props.fetchImages();
  }

  handleImageCardClick(id, imageModalOpen) {
    return () => {
      document.body.style.overflow = 'hidden';
      imageModalOpen(id);
    }
  }

  render() {
    const { 
      images, 
      fetchImages, 
      initialLoading, 
      loading,
      imageModalOpen
    } = this.props;

    const renderImage = (image) => {
      const { 
        id, 
        urls, 
        description, 
        height, 
        width, 
        username,
        likes
      } = image;
      const { small } = urls;
      const unit = Math.ceil(height / width);

      return (
        <ImageCard 
          key={id}
          gridRow={unit}
          onClick={this.handleImageCardClick(id, imageModalOpen)}
        > 
          <ImageCardOverlay>
            <ImageDetails>
              <span 
                role="img"
                aria-label="likes"
              >👍 </span>
              {likes}
            </ImageDetails>
          </ImageCardOverlay>
          <Image 
            src={small} 
            alt={description || username}
          />
        </ImageCard>
      );
    };

    return (
      <LayoutContent>
        {initialLoading && <Loader />}
        <GridContainer>
          {images.map(renderImage)}
        </GridContainer>
        <Row>
          {
            !initialLoading 
            && <LoadMoreButton
                handle={fetchImages}
                loading={loading}
              />
          }
        </Row>
      </LayoutContent>
    );
  }

}

const mapStateToProps = (state) => state.images;

export default connect(mapStateToProps, imagesActions)(ImagesGrid);