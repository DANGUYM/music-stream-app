

import React, { useState } from 'react';
import { View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeComponent from "./HomeComponent/index.jsx";
import ChartDetailComponent from "./ChartDetailComponent/index.jsx";
import ArtistDetailComponent from "./ArtistDetailComponent/index.jsx";
import Music from "./Music/Music/Music.js";
import MiniPlayer from './Music/Music/MiniPlayer';
import { MusicContext } from './Music/Music/MusicContext.js';

const Stack = createStackNavigator();

function HomeStack({ navigation, toggleModal }) {
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <MusicContext.Consumer>
      {({ currentSong }) => (
        <View style={{ flex: 1 }}>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="HomeComponent">
              {props => <HomeComponent {...props} toggleModal={toggleModal} />}
            </Stack.Screen>
            <Stack.Screen name="ChartDetailComponent" component={ChartDetailComponent} options={{ headerShown: true }} />
            <Stack.Screen name="ArtistDetailComponent" component={ArtistDetailComponent} options={{ headerShown: true }} />
            <Stack.Screen name="Music">
              {props => <Music {...props} setCurrentSong={setCurrentSong} setIsPlaying={setIsPlaying} />}
            </Stack.Screen>
          </Stack.Navigator>
          {currentSong && <MiniPlayer navigation={navigation} />}
        </View>
      )}
    </MusicContext.Consumer>
  );
}

export default HomeStack;