import axios from 'axios';
import {getStorage} from './ManagerStorage';

const URL_TODOS = 'https://jsonplaceholder.typicode.com/todos';

const listDone = async () => {
  let list = await getStorage(TodosService.KEY_STORAGE);
  list = JSON.parse(list);
  return list.filter((item) => item.completed !== false);
};

const listTodo = async () => {
  let list = await getStorage(TodosService.KEY_STORAGE);
  list = JSON.parse(list);
  return list.filter((item) => item.completed !== true);
};

export const TodosService = {
  search: axios.get(URL_TODOS),
  KEY_STORAGE: 'TODOS',
  listDone: listDone,
  listTodo: listTodo,
};
