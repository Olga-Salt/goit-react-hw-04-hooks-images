import { toast } from 'react-toastify';

function fetchPicture(name, page = 1, onLoading) {
  return fetch(
    `https://pixabay.com/api/?key=24239830-4925f78f241d3381731e9c8cb&q=${name}&page=${page}&image_type=photo&orientation=horizontal&per_page=12`,
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
    onLoading(false);

    return Promise.reject(
      new Error(
        toast.error('Что-то пошло не так :(', {
          theme: 'colored',
        }),
      ),
    );
  });
}

export default fetchPicture;
