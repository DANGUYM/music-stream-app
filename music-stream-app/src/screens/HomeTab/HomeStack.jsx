import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeComponent from "./HomeComponent/index.jsx";
import ChartDetailComponent from "./ChartDetailComponent/index.jsx";
import ArtistDetailComponent from "./ArtistDetailComponent/index.jsx";

const Stack = createStackNavigator();


function HomeStack({ navigation, toggleModal }) {
  return (

    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* <Stack.Screen name="Home" component={Index} options={{headerShown: false}} />   */}
      <Stack.Screen name="HomeComponent">
        {props => <HomeComponent {...props} toggleModal={toggleModal} />}
      </Stack.Screen>
      <Stack.Screen name="ChartDetailComponent" component={ChartDetailComponent} options={{ headerShown: true }} />
      <Stack.Screen name="ArtistDetailComponent" component={ArtistDetailComponent} options={{ headerShown: true }} />
    </Stack.Navigator>


  );
}

export default HomeStack;
