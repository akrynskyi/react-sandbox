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

const imageCardAnimation = {
  hidden: {
    opacity: 0,
  },
  visible: (idx) => ({
    opacity: 1,
    transition: {
      delay: idx * 0.02
    }
  }),
};

class ImagesGrid extends Component {

  componentDidMount() {
    document.title = 'mycamerashoot'
    const { images, fetchImages } = this.props;
    if (images.length) return;
    fetchImages();
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
      scroll,
      perPage,
      imageModalOpen
    } = this.props;

    const renderImage = (image, idx) => {
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
          custom={idx}
          gridRow={unit}
          initial="hidden"
          animate="visible"
          variants={imageCardAnimation}
          onClick={this.handleImageCardClick(id, imageModalOpen)}
        > 
          <ImageCardOverlay>
            { likes 
              && (
                <ImageDetails>
                  <span 
                    role="img"
                    aria-label="likes"
                  >👍 </span>
                  {likes}
                </ImageDetails>
              )
            }
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
                scroll={scroll}
                loading={loading}
                handle={fetchImages}
                perPage={perPage}
                images={images}
              />
          }
        </Row>
      </LayoutContent>
    );
  }

}

const mapStateToProps = (state) => state.images;

export default connect(mapStateToProps, imagesActions)(ImagesGrid);