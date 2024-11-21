

import { View, Text } from 'react-native';
import React, { useContext } from 'react';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { ThemeContext } from '../../../context/ThemeContext';

export default function Header() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
      <Text style={{ fontSize: 20, color: darkMode ? '#fff' : '#000' }}>Feed</Text>
      <MaterialIcons name="connected-tv" size={24} color="gray" />
    </View>
  );
}