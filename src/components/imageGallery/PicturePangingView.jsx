import React from 'react';
import styled from 'styled-components';
import Spinner from '../spinner/Spinner';
import pandingUmage from './pandingImage.jpg';

const SpinnerWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const PandingImage = styled.img`
  width: 300px;
  border-radius: 5px;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

const PandingText = styled.p`
  padding: 10px;
  font-size: 30px;
  text-transform: uppercase;
  font-weight: 700;
  color: transparent;
  background: #666666;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
  text-shadow: 0px 3px 3px rgba(255, 255, 255, 0.5);
  text-shadow: 0px 3px 3px rgba(255, 255, 255, 0.5);
`;

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
