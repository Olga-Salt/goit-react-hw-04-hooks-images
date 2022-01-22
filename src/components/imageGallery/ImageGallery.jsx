import React, { Component } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as Scroll from 'react-scroll';

import fetchPicture from '../services/picture-api';
import PictureDataView from './PictureDataView';
import PictureErrorView from './PictureErrorView';
import Button from '../button/Button';

const ImgGalleryWrapper = styled.div`
  text-align: center;
  > div {
    margin-bottom: 20px;
  }
`;

const IdleText = styled.h2`
  text-transform: uppercase;
  color: transparent;
  background: #666666;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
  text-shadow: 0px 3px 3px rgba(255, 255, 255, 0.5);
  text-shadow: 0px 3px 3px rgba(255, 255, 255, 0.5);
`;

function isPictureEnd(page, totalHits, onLoading) {
  const totalPages = totalHits / 12;

  if (page !== 1 && page >= totalPages) {
    onLoading(false);

    return toast.info('Картинок больше нет', {
      theme: 'colored',
    });
  }
}

class ImageGallery extends Component {
  state = {
    picture: [],
    totalHits: 0,
    error: null,
    status: 'idle',
    page: 1,
  };

  async componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.pictureName;
    const nextName = this.props.pictureName;
    const { page, totalHits } = this.state;
    const { onLoading } = this.props;

    if (prevName !== nextName) {
      this.setState({ page: 1, picture: [] });
    }

    if ((prevName !== nextName && page === 1) || prevState.page !== page) {
      onLoading(true);

      await fetchPicture(nextName, page, onLoading)
        .then(newPicture => {
          if (newPicture.hits.length === 0) {
            onLoading(false);

            return Promise.reject(
              new Error(
                toast.warning('Такой картинки нет', {
                  theme: 'colored',
                }),
              ),
            );
          }

          this.setState(prevState => {
            return {
              picture: [...prevState.picture, ...newPicture.hits],
              status: 'resolved',
              totalHits: newPicture.totalHits,
            };
          });

          Scroll.animateScroll.scrollToBottom({ duration: 2000 });
          isPictureEnd(page, totalHits, onLoading);
          onLoading(false);
        })
        .catch(error => this.setState({ error, status: 'rejected' }));
    }
  }

  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { picture, status, totalHits } = this.state;
    const { onClose, onFetch } = this.props;

    if (status === 'idle') {
      return <IdleText>Введите имя катринки</IdleText>;
    }

    if (status === 'rejected') {
      return <PictureErrorView />;
    }

    if (status === 'resolved') {
      return (
        <ImgGalleryWrapper>
          <div>
            <PictureDataView
              pictureArray={picture}
              onClose={onClose}
              onFetch={onFetch}
            />
          </div>
          {totalHits > picture.length && (
            <Button onClick={this.handleLoadMore} />
          )}
        </ImgGalleryWrapper>
      );
    }
  }
}

export default ImageGallery;

ImageGallery.propTypes = {
  onClose: PropTypes.func.isRequired,
  onFetch: PropTypes.func.isRequired,
  pictureName: PropTypes.string.isRequired,
};
