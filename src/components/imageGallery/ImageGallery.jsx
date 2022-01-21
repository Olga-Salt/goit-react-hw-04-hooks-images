import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import fetchPicture from '../services/picture-api';
import PicturePandingView from './PicturePangingView';
import PictureDataView from './PictureDataView';
import PictureErrorView from './PictureErrorView';
import Button from '../button/Button';

class ImageGallery extends Component {
  state = {
    picture: null,
    totalHits: 0,
    error: null,
    status: 'idle',
    page: 1,
  };

  async componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.pictureName;
    const nextName = this.props.pictureName;
    const { page } = this.state;

    if (prevName !== nextName) {
      this.setState({ page: 1, picture: [] });
    }

    if ((prevName !== nextName && page === 1) || prevState.page !== page) {
      this.setState({ status: 'pending' });

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
          console.log(this.state.picture.length, this.state.totalHits);
        })
        .catch(error => this.setState({ error, status: 'rejected' }));
    }
  }

  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
    console.log(this.state.page);
  };

  scrollToBottom = () => {
    window.scrollTo({
      top: document.body.clientHeight,
      behavior: 'smooth',
    });
  };

  render() {
    const { picture, error, status, totalHits } = this.state;
    const { pictureName, onClose, onFetch } = this.props;

    if (status === 'idle') {
      return <h1>введите имя катринки</h1>;
    }

    if (status === 'pending') {
      return (
        <PicturePandingView pictureName={pictureName} pictureArray={picture} />
      );
    }

    if (status === 'rejected') {
      return <PictureErrorView message={error.message} />;
    }

    if (status === 'resolved') {
      return (
        <div>
          <PictureDataView
            pictureArray={picture}
            onClose={onClose}
            onFetch={onFetch}
          />
          {totalHits !== picture.length && (
            <Button onClick={this.handleLoadMore} />
          )}
        </div>
      );
    }
  }
}

export default ImageGallery;
