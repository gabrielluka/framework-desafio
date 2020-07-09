import React, {useEffect, useState} from 'react';
import {getStorage} from '../../service/ManagerStorage';
import {PostService} from '../../service/PostService';

import {CardShadow} from '../../components/card';
import {Container, Title, TextBody} from './style';
import {FlatList, View} from 'react-native';

const CardPosts = ({item}) => {
  return (
    <CardShadow>
      <Title>{item.title}</Title>
      <TextBody>{item.body}</TextBody>
    </CardShadow>
  );
};

const Posts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const getPosts = async () => {
      const _posts = await getStorage(PostService.KEY_STORAGE);
      setPosts(JSON.parse(_posts));
    };

    getPosts();
  }, []);

  return (
    <Container>
      {posts.length > 0 ? (
        <FlatList
          initialNumToRender={15}
          keyExtractor={(item) => item.id.toString()}
          data={posts}
          renderItem={CardPosts}
        />
      ) : (
        <View />
      )}
    </Container>
  );
};

export default Posts;
