import React from 'react';
// import PropTypes from 'prop-types';
// import PicturePandingObj from './PicturePandingObj';
import PictureDataView from './PictureDataView';
import Spinner from '../spinner/Spinner';
import { nanoid } from 'nanoid';
import pandingUmage from './pandingImage.jpg';

function PicturePandingView({ pictureArray }) {
  const pictures = pictureArray.map(picture => ({
    webformatURL: pandingUmage,
    id: nanoid(),
    tags: '',
  }));

  return (
    <div>
      <Spinner />
      <p>Загружаем ...</p>
      <PictureDataView pictureArray={pictures} />
    </div>
  );
}

export default PicturePandingView;
