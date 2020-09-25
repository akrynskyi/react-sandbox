import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as imagesActions from '../../store/images-state/imagesActions';
import { Loader } from '../loader';

import { 
  GridContainer, 
  LayoutContent, 
  ImageCard, 
  Image,
  Button,
  Row,
} from '../styled';

class ImagesGrid extends Component {
  constructor(props) {
    super(props);

    this.state = { };
  }

  componentDidMount() {
    this.props.fetchImages();
  }

  render() {
    const { 
      images, 
      fetchImages, 
      initialLoading, 
      loading 
    } = this.props;

    const loadMoreButton = (
      <Button 
        shadow 
        load={loading}
        disabled={loading}
        onClick={() => fetchImages()}
      >
        {loading ? 'Loading...' : 'Load more'}
      </Button>
    );

    return (
      <LayoutContent>
        {initialLoading && <Loader />}
        <GridContainer>
          {
            images.map((image) => {
              const { id, urls, description, height, width, username } = image;
              const { small } = urls;
              const unit = Math.ceil(height / width);

              return (
                <ImageCard 
                  key={id}
                  gridRow={unit}
                >
                  <Image 
                    src={small} 
                    alt={description || username}
                  />
                </ImageCard>
              );
            })
          }
        </GridContainer>
        <Row>
          {!initialLoading && loadMoreButton}
        </Row>
      </LayoutContent>
    );
  }
}

const mapStateToProps = (state) => state.images;

export default connect(mapStateToProps, imagesActions)(ImagesGrid);