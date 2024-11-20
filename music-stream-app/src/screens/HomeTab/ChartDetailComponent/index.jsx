

import { View, Text } from 'react-native';
import React, { useEffect, useContext } from 'react';
import Header from './Header';
import Playlist from '../ChartDetailComponent/Playlist';
import { useRoute } from '@react-navigation/native';
import { ThemeContext } from '../../Context/ThemeContext';

export default function ChartDetails({ navigation }) {
  const route = useRoute();
  const { item } = route.params;
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
      {/* header */}
      <Header item={item} />
      {/* List songs */}
      <Playlist item={item.songs} navigation={navigation} />
    </View>
  );
}