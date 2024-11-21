

import { View, Text } from 'react-native';
import React, { useContext } from 'react';
import Header from './Header';
import ListFeed from './ListFeed';
import { ThemeContext } from '../../../context/ThemeContext';

export default function Index({ navigation }) {
  const { darkMode } = useContext(ThemeContext);

  return (
    <View style={{ padding: 20, flex: 1, backgroundColor: darkMode ? '#121212' : '#fff' }}>
      {/* header */}
      <Header />
      {/* list feeds */}
      <ListFeed />
    </View>
  );
}