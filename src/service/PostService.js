import axios from 'axios';

const URL_POSTS = 'https://jsonplaceholder.typicode.com/posts';

export const PostService = {
  search: axios.get(URL_POSTS),
  KEY_STORAGE: 'POSTS',
};
