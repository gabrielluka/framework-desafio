import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import TabsBottom from './navigation/tabBottomNav';
import {initSync} from './service/InitializeAppService';
import {Loader} from './components/loader';

const handlerSyncView = (isDoneSync) => {
  return isDoneSync ? <TabsBottom /> : <Loader />;
};

const App = () => {
  const [isDoneSync, setDoneSync] = useState(false);
  const [isError, setError] = useState(false);

  useEffect(() => {
    let didCancel = false;

    const isOk = (value) => (value ? setDoneSync(value) : setError(value));

    if (!didCancel) {
      initSync(isOk);
    }

    return () => (didCancel = true);
  }, []);

  return (
    <NavigationContainer>
      <SafeAreaView style={{flex: 1}}>
        {handlerSyncView(isDoneSync)}
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
