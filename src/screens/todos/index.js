import React, {useEffect, useState} from 'react';
import {TodosService} from '../../service/TodoService';
import {CardShadow} from '../../components/card';
import {FlatList, View} from 'react-native';

import {
  Container,
  Title,
  TextBody,
  ToggleButton,
  Row,
  TitleStatus,
} from './style';

const cardTasks = (item) => {
  return (
    <CardShadow>
      <Title>{item.title}</Title>
      <TextBody>Completed : {item.completed ? 'YES' : 'NO'}</TextBody>
    </CardShadow>
  );
};

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [isDoneTasks, setIsDoneStasks] = useState(false);

  const filterTodo = async () => {
    setIsDoneStasks(!isDoneTasks);
  };

  useEffect(() => {
    const changeList = async () => {
      if (isDoneTasks) {
        setTodos(await TodosService.listDone());
      } else {
        setTodos(await TodosService.listTodo());
      }
    };

    changeList();
  }, [isDoneTasks]);

  useEffect(() => {
    const getPosts = async () => {
      const _todos = await TodosService.listTodo();
      setTodos(_todos);
    };

    getPosts();
  }, []);

  return (
    <Container>
      <Row>
        <TitleStatus>Todo</TitleStatus>
        <ToggleButton
          trackColor={{false: '#767577', true: '#767577'}}
          thumbColor={true ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={filterTodo}
          value={isDoneTasks}
        />
        <TitleStatus>Done</TitleStatus>
      </Row>

      {todos.length > 0 ? (
        <FlatList
          keyExtractor={(item) => item.id.toString()}
          data={todos}
          renderItem={({item}) => cardTasks(item)}
        />
      ) : (
        <View />
      )}
    </Container>
  );
};

export default Todos;
