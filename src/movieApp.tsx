
import 'react-native-gesture-handler'

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './presentation/navigation/StackNavigator';

export const movieApp = () => {
  return (
    <NavigationContainer>
     <StackNavigator />
    </NavigationContainer>
  );
};
