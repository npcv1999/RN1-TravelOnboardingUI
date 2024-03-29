/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {OnBoarding} from './screens';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Onboarding"
          component={OnBoarding}
          options={{headerShown: false}}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
