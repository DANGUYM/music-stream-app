

import { View, Text, ScrollView } from 'react-native';
import React, { useEffect, useContext } from 'react';
import Header from './Header';
import Playlist from '../ArtistDetailComponent/Playlist';
import Albums from './Albums';
import About from './About';
import Fans from './Fans';
import { ThemeContext } from '../../../context/ThemeContext';

export default function ArtistDetails({ navigation }) {
  const { darkMode } = useContext(ThemeContext);

  useEffect(() => {
    navigation.setOptions({
      headerTransparent: true,
      headerTitle: '',
      headerBackTitleVisible: false,
    });
  }, []);

  return (
    <View style={{ padding: 20, flex: 1, backgroundColor: darkMode ? '#121212' : '#fff' }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* header */}
        <Header />
        {/* List songs */}
        <Playlist />
        {/* Albums */}
        <Albums />
        {/* About */}
        <About />
        {/* fan also like */}
        <Fans />
      </ScrollView>
    </View>
  );
}