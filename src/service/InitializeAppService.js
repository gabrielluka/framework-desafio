import axios from 'axios';

import {PostService} from './PostService';
import {TodosService} from './TodoService';
import {AlbumService} from './AlbumService';

import {saveStorage} from './ManagerStorage';

export const initSync = (isOk) => {
  axios
    .all([TodosService.search, AlbumService.search, PostService.search])
    .then(
      axios.spread((...responses) => {
        const responseTodos = responses[0];
        const responseAlbum = responses[1];
        const responsePosts = responses[2];

        const saveTodos = saveStorage(
          TodosService.KEY_STORAGE,
          responseTodos.data,
        );
        const saveAlbum = saveStorage(
          AlbumService.KEY_STORAGE,
          responseAlbum.data,
        );
        const savePosts = saveStorage(
          PostService.KEY_STORAGE,
          responsePosts.data,
        );

        Promise.all([saveTodos, saveAlbum, savePosts])
          .then(() => {
            isOk(true);
          })
          .catch(() => {
            isOk(false);
          });
      }),
    )
    .catch(() => {
      isOk(false);
    });
};
