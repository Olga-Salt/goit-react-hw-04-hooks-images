function fetchPicture(name, page = 1) {
  return fetch(
    `https://pixabay.com/api/?key=24239830-4925f78f241d3381731e9c8cb&q=${name}&page=${page}&image_type=photo&orientation=horizontal&per_page=12`,
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error('Нет такой картинки'));
  });
}

export default fetchPicture;
