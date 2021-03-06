import React, {useEffect, useState} from 'react';
import {TodosService} from '../../service/TodoService';
import {CardShadow} from '../../components/card';
import {FlatList, View} from 'react-native';
import {Loader} from '../../components/loader';

import {
  Container,
  Title,
  TextBody,
  ToggleButton,
  Row,
  TitleStatus,
} from './style';

const cardTasks = ({item}) => {
  return (
    <CardShadow>
      <Title>{item.title}</Title>
      <TextBody>Completed : {item.completed ? 'YES' : 'NO'}</TextBody>
    </CardShadow>
  );
};

const RenderList = ({todos}) => {
  return (
    <View>
      {todos.length > 0 ? (
        <FlatList
          data={todos}
          initialNumToRender={15}
          keyExtractor={(item) => item.id.toString()}
          renderItem={cardTasks}
        />
      ) : (
        <View />
      )}
    </View>
  );
};

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isDoneTasks, setIsDoneStasks] = useState(false);

  const filterTodo = async () => {
    setLoading(true);
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
    setTimeout(() => {
      setLoading(false);
    }, 500);
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

      {!loading ? <RenderList todos={todos} /> : <Loader />}
    </Container>
  );
};

export default Todos;
