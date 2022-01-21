import React from 'react';
// import PictureDataView from './PictureDataView';
import Spinner from '../spinner/Spinner';
// import { nanoid } from 'nanoid';
import pandingUmage from './pandingImage.jpg';

function PicturePandingView() {
  // const pictures = pictureArray.map(picture => ({
  //   webformatURL: pandingUmage,
  //   id: nanoid(),
  //   tags: '',
  // }));

  return (
    <div>
      <Spinner />
      <p>Загружаем ...</p>
      <img src={pandingUmage} alt="" width="300" />
      {/* <PictureDataView pictureArray={pictures} /> */}
    </div>
  );
}

export default PicturePandingView;
