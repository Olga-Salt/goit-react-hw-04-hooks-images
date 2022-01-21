import React, { Component } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

import fetchPicture from '../services/picture-api';
import PicturePandingView from './PicturePangingView';
import PictureDataView from './PictureDataView';
import PictureErrorView from './PictureErrorView';
import Button from '../button/Button';

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
    const totalPages = totalHits / 12;

    if (prevName !== nextName) {
      this.setState({ page: 1, picture: [] });
    }

    if ((prevName !== nextName && page === 1) || prevState.page !== page) {
      if (page === 1) {
        this.setState({ status: 'pending' });
      }

      await fetchPicture(nextName, page)
        .then(newPicture => {
          if (newPicture.hits.length === 0) {
            return Promise.reject(
              new Error(`Нет картинки с именем ${nextName}`),
            );
          }

          this.setState(prevState => {
            return {
              picture: [...prevState.picture, ...newPicture.hits],
              status: 'resolved',
              totalHits: newPicture.totalHits,
            };
          });

          this.scrollToBottom();

          if (page !== 1 && page >= totalPages) {
            return toast.info('Картинок больше нет', {
              theme: 'colored',
            });
          }
        })
        .catch(error => this.setState({ error, status: 'rejected' }));
    }
  }

  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  scrollToBottom = () => {
    window.scrollTo({
      top: document.body.clientHeight,
      behavior: 'smooth',
    });
  };

  render() {
    const { picture, error, status, totalHits } = this.state;
    const { onClose, onFetch } = this.props;

    if (status === 'idle') {
      return (
        <div>
          <h1>Введите имя катринки</h1>
        </div>
      );
    }

    if (status === 'pending') {
      return <PicturePandingView />;
    }

    if (status === 'rejected') {
      return <PictureErrorView message={error.message} />;
    }

    if (status === 'resolved') {
      return (
        <>
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
        </>
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
