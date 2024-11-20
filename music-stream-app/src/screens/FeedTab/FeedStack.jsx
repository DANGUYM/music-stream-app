import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import FeedComponent from "./FeedComponent/index.jsx";

const Stack = createStackNavigator();


function FeedStack({ navigation, toggleModal }) {
  return (

    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="FeedComponent">
        {props => <FeedComponent {...props} toggleModal={toggleModal} />}
      </Stack.Screen>

    </Stack.Navigator>


  );
}

export default FeedStack;
