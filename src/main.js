// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

// Описаний в документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

import { getPhotos } from './js/pixabay-api';
import { createMarkup } from './js/render-functions';

const searchForm = document.querySelector('.feedback-form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
let page = 1;

loader.style.display = 'none';
searchForm.addEventListener('submit', submitForm);

function submitForm(e) {
  e.preventDefault();
  loader.style.display = 'block';
  gallery.innerHTML = '';
  const searchPoint = e.target.elements.input.value.trim();

  if (searchPoint.length === 0) {
    loader.style.display = 'none';
    return iziToast.error({
      title: 'Error',
      backgroundColor: 'tomato',
      message:
        'Sorry, there are no images matching your search query. Please try again!',
      messageColor: 'white',
      messageSize: '20',
      position: 'bottomRight',
      close: true,
      displayMode: 2,
    });
  }

  getPhotos(searchPoint, page)
    .then(res => {
      if (res.hits.length === 0) {
        gallery.innerHTML = '';
        return iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'bottomRight',
        });
      }

      gallery.insertAdjacentHTML('beforeend', createMarkup(res.hits));
      lightbox.refresh();
    })

    .catch(error => {
      console.log(error);
      iziToast.error({
        title: 'Error',
        message: 'Something went wrong. Please try again later.',
        position: 'topRight',
      });
    })
    .finally(() => {
      loader.style.display = 'none';
    });

  searchForm.reset();
}

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
