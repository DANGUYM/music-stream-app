import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import YourLibrary from './YourLibrary/YourLibrary';
import ListLibrary from './ListLibrary/ListLibrary';


const Stack = createStackNavigator();

function LibraryStack() {
  return (

      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="YourLibrary" component={YourLibrary}  options={{headerShown: false}} />
        <Stack.Screen name="ListLibrary" component={ListLibrary}  options={{headerShown: false}} />

      </Stack.Navigator>      


  );
}

export default LibraryStack;
