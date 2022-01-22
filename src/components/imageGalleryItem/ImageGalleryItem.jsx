import React from 'react';
import PropTypes from 'prop-types';
import { ImageGalleryItem, GalleryImage } from './ImageGalleryItem.styled';

const ImageGalleryItems = ({
  onClose,
  onFetch,
  webformatURL,
  tags,
  largeImageURL,
}) => {
  return (
    <ImageGalleryItem
      onClick={() => {
        onFetch(largeImageURL, tags);
        onClose();
      }}
    >
      <GalleryImage src={webformatURL} alt={tags} />
    </ImageGalleryItem>
  );
};

export default ImageGalleryItems;

ImageGalleryItems.propTypes = {
  onClose: PropTypes.func.isRequired,
  onFetch: PropTypes.func.isRequired,
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};
