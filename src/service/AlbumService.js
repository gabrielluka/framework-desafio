import axios from 'axios';

const URL_ALBUM = 'https://jsonplaceholder.typicode.com/albums';

export const AlbumService = {
  search: axios.get(URL_ALBUM),
  KEY_STORAGE: 'ALBUM',
};
