import React from 'react';
import Spinner from '../spinner/Spinner';
import pandingUmage from './pandingImage.jpg';
import { SpinnerWrap, PandingImage, PandingText } from './ImageGallery.styled';

function PicturePandingView() {
  return (
    <SpinnerWrap>
      <Spinner />
      <PandingText>Загружаем ...</PandingText>
      <PandingImage src={pandingUmage} alt="" />
    </SpinnerWrap>
  );
}

export default PicturePandingView;
