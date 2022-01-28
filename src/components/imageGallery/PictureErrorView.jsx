import React from 'react';
import errorImage from './error.jpg';
import { ErrorWrap, ErrorImg } from './ImageGallery.styled';

function PictureErrorView() {
  return (
    <ErrorWrap role="alert">
      <ErrorImg src={errorImage} alt="nothing finded" />
    </ErrorWrap>
  );
}

export default PictureErrorView;
