import AsyncStorage from '@react-native-community/async-storage';

export const saveStorage = (key, value) =>
  AsyncStorage.setItem(key, JSON.stringify(value));

export const getStorage = (key) => AsyncStorage.getItem(key);
