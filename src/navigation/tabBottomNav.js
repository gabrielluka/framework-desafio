import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import Posts from '../screens/posts';
import Album from '../screens/album';
import Todos from '../screens/todos';

Icon.loadFont();

const Tab = createBottomTabNavigator();

const TabsBottom = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Posts"
        component={Posts}
        options={{
          tabBarIcon: ({color, size}) => {
            return <Icon name="align-center" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Album"
        component={Album}
        options={{
          tabBarIcon: ({color, size}) => {
            return <Icon name="photo" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Todos"
        component={Todos}
        options={{
          tabBarIcon: ({color, size}) => {
            return <Icon name="check-square-o" size={size} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};
export default TabsBottom;
