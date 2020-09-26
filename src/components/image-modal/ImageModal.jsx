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
} from '../styled';

class ImageModal extends Component {

  handleBackdropClick = ({ target, currentTarget }) => {
    if (target !== currentTarget) return;
    document.body.style.overflow = null;
    this.props.imageModalClose();
  }

  render() {
    const { images, selectedImageIdx } = this.props;
    const { description, urls, likes } = images[selectedImageIdx];
    const { regular } = urls;

    return (
      <ModalBackdrop 
        onClick={this.handleBackdropClick}
      >
        <ModalLayout>
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
                <ModalImageCard>
                  <Image src={regular} />
                </ModalImageCard>
              </ModalBody>
              <ModalFooter>
                <Text>{description}</Text>
                <Text>
                  <span 
                    role="img"
                    aria-label="likes"
                  >👍 </span>
                  {likes}
                </Text>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </ModalLayout>
      </ModalBackdrop>
    );
  }

}

const mapStateToProps = ({images}) => images;

export default connect(mapStateToProps, imagesActions)(ImageModal);