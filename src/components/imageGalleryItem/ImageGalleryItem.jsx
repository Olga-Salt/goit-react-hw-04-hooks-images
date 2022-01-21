import React from 'react';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({
  onClose,
  onFetch,
  webformatURL,
  tags,
  largeImageURL,
}) => {
  return (
    <li
      onClick={() => {
        onFetch(largeImageURL, tags);
        onClose();
      }}
    >
      <img src={webformatURL} width="100" alt={tags} />
    </li>
  );
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  onClose: PropTypes.func.isRequired,
  onFetch: PropTypes.func.isRequired,
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};
