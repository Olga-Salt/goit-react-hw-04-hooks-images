import styled from 'styled-components';

export const ImgGalleryWrapper = styled.div`
  text-align: center;
  > div {
    margin-bottom: 20px;
  }
`;

export const IdleText = styled.h2`
  text-transform: uppercase;
  color: transparent;
  background: #666666;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
  text-shadow: 0px 3px 3px rgba(255, 255, 255, 0.5);
  text-shadow: 0px 3px 3px rgba(255, 255, 255, 0.5);
`;

export const PicturesList = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
  padding: 0;
`;

export const ErrorWrap = styled.div`
  padding: 30px;
`;

export const ErrorImg = styled.img`
  border-radius: 5px;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

export const SpinnerWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const PandingImage = styled.img`
  width: 300px;
  border-radius: 5px;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

export const PandingText = styled.p`
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
