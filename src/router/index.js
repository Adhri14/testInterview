import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {BubbleShort, OutputBubbleShort} from '../pages';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="BubbleShort" component={BubbleShort} />
      <Stack.Screen name="Output" component={OutputBubbleShort} />
    </Stack.Navigator>
  );
};

export default Router;
