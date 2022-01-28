import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

import fetchPicture from '../services/picture-api';
import PictureDataView from './PictureDataView';
import PictureErrorView from './PictureErrorView';
import Button from '../button/Button';
import { ImgGalleryWrapper, IdleText } from './ImageGallery.styled';

function isPictureEnd(page, totalHits, onLoading) {
  const totalPages = totalHits / 12;

  if (page !== 1 && page >= totalPages) {
    onLoading(false);

    return toast.info('Картинок больше нет', {
      theme: 'colored',
    });
  }
}

const scrollToBottom = () => {
  window.scrollTo({
    top: document.body.clientHeight,
    behavior: 'smooth',
  });
};

function ImageGallery({ onLoading, onFetch, onClose, pictureName }) {
  const [picture, setPicture] = useState([]);
  const [totalHits, setTotalHits] = useState(0);
  const [status, setStatus] = useState('idle');
  const [page, setPage] = useState(1);

  useEffect(() => {
    setPage(1);
    setPicture([]);
  }, [pictureName]);

  useEffect(() => {
    if (pictureName === '') {
      return;
    }

    onLoading(true);

    async function fetchPic() {
      await fetchPicture(pictureName, page, onLoading)
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

          setPicture(prevState =>
            page > 1 ? [...prevState, ...newPicture.hits] : newPicture.hits,
          );
          setStatus('resolved');
          setTotalHits(newPicture.totalHits);

          scrollToBottom();
          isPictureEnd(page, totalHits, onLoading);
          onLoading(false);
        })
        .catch(() => {
          setStatus('rejected');
        });
    }

    fetchPic();
  }, [onLoading, page, pictureName, totalHits]);

  const handleLoadMore = () => {
    setPage(prevState => prevState + 1);
  };

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
        {totalHits > picture.length && <Button onClick={handleLoadMore} />}
      </ImgGalleryWrapper>
    );
  }
}

export default ImageGallery;

ImageGallery.propTypes = {
  onClose: PropTypes.func.isRequired,
  onFetch: PropTypes.func.isRequired,
  pictureName: PropTypes.string.isRequired,
};
