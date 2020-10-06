import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as imagesActions from '../../store/images-state/imagesActions';

import { 
  ModalBackdrop, 
  Modal, 
  ModalContent, 
  ModalLayout, 
  ModalHeader, 
  ModalBody, 
  ModalFooter,
  Image,
  ModalImageCard,
  Text,
  ButtonIcon,
  ModalControl,
} from '../styled';

function calculateAspectRatioFit(srcWidth, srcHeight, maxWidth, maxHeight) {
  const ratio = Math.min(maxWidth / srcWidth, maxHeight / srcHeight);
  return { w: srcWidth * ratio, h: srcHeight * ratio };
}

const backdropAnimation = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  }
};

const modalLayoutAnimation = {
  hidden: {
    y: 200,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.25, 
      type: 'tween',
    }
  }
};

class ImageModal extends Component {

  handleBackdropClick = ({ target, currentTarget }) => {
    if (target !== currentTarget) return;
    document.body.style.overflow = null;
    this.props.imageModalClose();
  }

  render() {
    const { 
      images, 
      selectedImageIdx, 
      imageModalPrevImage, 
      imageModalNextImage 
    } = this.props;
    const { 
      description, 
      urls, 
      likes, 
      username,
      width,
      height
    } = images[selectedImageIdx];
    const { regular } = urls;

    const { w } = calculateAspectRatioFit(width, height, 1170, 850);

    return (
      <ModalBackdrop 
        onClick={this.handleBackdropClick}
        variants={backdropAnimation}
        initial="hidden"
        animate="visible"
      >
        <ModalLayout
          variants={modalLayoutAnimation}
        >
          <Modal>
            <ModalContent>
              <ModalHeader>
                <ButtonIcon>
                  <span 
                    className="material-icons"
                  >add_to_photos</span>
                </ButtonIcon>
              </ModalHeader>
              <ModalBody>
                <ModalImageCard 
                  style={{width: w}}
                >
                  <Image 
                    src={regular} 
                    alt={description || username}
                  />
                </ModalImageCard>
              </ModalBody>
              <ModalFooter>
                <Text>
                  {description}
                </Text>
                {
                  likes 
                  && (
                    <Text>
                      <span 
                        role="img"
                        aria-label="likes"
                      >👍 </span>
                        {likes}
                    </Text>
                  )
                }
              </ModalFooter>
            </ModalContent>
          </Modal>
          <ModalControl 
            left
            onClick={imageModalPrevImage}
          >
            <span className="material-icons">
              arrow_back
            </span>
          </ModalControl>
          <ModalControl 
            right
            onClick={imageModalNextImage}
          >
            <span className="material-icons">
              arrow_forward
            </span>
          </ModalControl>
        </ModalLayout>
      </ModalBackdrop>
    );
  }

}

const mapStateToProps = ({ images }) => images;

export default connect(mapStateToProps, imagesActions)(ImageModal);