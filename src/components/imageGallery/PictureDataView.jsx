import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

import ImageGalleryItem from '../imageGalleryItem/ImageGalleryItem';

const PicturesList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

function PictureDataView({ pictureArray, onClose, onFetch }) {
  return (
    <div>
      <PicturesList className="gallery">
        {pictureArray.map(({ id, webformatURL, tags, largeImageURL }) => (
          <ImageGalleryItem
            key={id}
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
