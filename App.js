import React from 'react';
import {StatusBar} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from 'react-redux';

import HomeScreen from './src/screens/Home';
import {RED_HARD} from './src/utils/styles/colors';
const StackHome = createStackNavigator();
import store from './src/store';

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar barStyle="dark-content" backgroundColor={RED_HARD} />
      <NavigationContainer>
        <StackHome.Navigator headerMode="none">
          <StackHome.Screen name="Home" component={HomeScreen} />
        </StackHome.Navigator>
      </NavigationContainer>
    </Provider>
  );
};
export default App;
