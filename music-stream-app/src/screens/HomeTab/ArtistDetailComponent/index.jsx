
import { View, FlatList } from 'react-native';
import React, { useEffect, useContext } from 'react';
import Header from './Header';
import Playlist from '../ArtistDetailComponent/Playlist';
import Albums from './Albums';
import About from './About';
import Fans from './Fans';
import { ThemeContext } from '../../../context/ThemeContext';
import { useRoute } from '@react-navigation/native';

export default function ArtistDetails({ navigation }) {
  const { darkMode } = useContext(ThemeContext);

  const route = useRoute();
  const { item } = route.params;

  useEffect(() => {
    navigation.setOptions({
      headerTransparent: true,
      headerTitle: '',
      headerBackTitleVisible: false,
    });
  }, []);

  const sections = [
    { key: 'header', render: () => <Header item={item} /> },
    { key: 'playlist', render: () => <Playlist songs={item.tracks} navigation={navigation} /> },
    { key: 'albums', render: () => <Albums item={item} /> },
    { key: 'about', render: () => <About item={item} /> },
    { key: 'fans', render: () => <Fans item={item} /> },
  ];

  return (
    <View style={{ padding: 20, flex: 1, backgroundColor: darkMode ? '#121212' : '#fff' }}>
      <FlatList
        data={sections}
        renderItem={({ item }) => item.render()}
        keyExtractor={(item) => item.key}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}