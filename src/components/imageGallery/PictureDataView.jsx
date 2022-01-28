import React from 'react';
import PropTypes from 'prop-types';

import ImageGalleryItems from '../imageGalleryItem/ImageGalleryItem';
import { PicturesList } from './ImageGallery.styled';

function PictureDataView({ pictureArray, onClose, onFetch }) {
  return (
    <div>
      <PicturesList className="gallery">
        {pictureArray.map(({ webformatURL, tags, largeImageURL }) => (
          <ImageGalleryItems
            key={webformatURL}
            webformatURL={webformatURL}
            tags={tags}
            largeImageURL={largeImageURL}
            onClose={onClose}
            onFetch={onFetch}
          />
        ))}
      </PicturesList>
    </div>
  );
}

export default PictureDataView;

PictureDataView.propTypes = {
  pictureArray: PropTypes.array.isRequired,
  onClose: PropTypes.func.isRequired,
  onFetch: PropTypes.func.isRequired,
};
