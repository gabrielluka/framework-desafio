import React, {useEffect, useState} from 'react';
import {getStorage} from '../../service/ManagerStorage';
import {AlbumService} from '../../service/AlbumService';
import {FlatList, View} from 'react-native';
import {CardShadow} from '../../components/card';
import {Container, Text} from './style';

const Card = (item) => {
  return (
    <CardShadow>
      <Text>{item.title}</Text>
    </CardShadow>
  );
};

const Album = () => {
  const [albums, setAlbum] = useState([]);

  useEffect(() => {
    const getAlbum = async () => {
      const _albums = await getStorage(AlbumService.KEY_STORAGE);
      setAlbum(JSON.parse(_albums));
    };

    getAlbum();
  }, []);

  return (
    <Container>
      {albums.length > 0 ? (
        <FlatList
          keyExtractor={(item) => item.id.toString()}
          data={albums}
          renderItem={({item}) => Card(item)}
        />
      ) : (
        <View />
      )}
    </Container>
  );
};

export default Album;
