

import { View, Text, Image } from 'react-native';
import React, { useContext } from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';
import { ThemeContext } from '../../Context/ThemeContext';

export default function Header({ item }) {
  const { darkMode } = useContext(ThemeContext);

  return (
    <View style={{ marginTop: 30, flexDirection: 'row', alignItems: 'center' }}>
      <View style={{ marginRight: 10 }}>
        <Image source={{ uri: item.image }} style={{ width: 150, height: 150, borderRadius: 10 }} />
      </View>
      <View>
        <Text style={{ fontSize: 20, fontWeight: 'bold', color: darkMode ? '#fff' : '#000' }}> {item.name} </Text>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, marginVertical: 10 }}>
          <AntDesign name="hearto" size={16} color="blue" />
          <Text style={{ color: darkMode ? '#fff' : '#000' }}>1,234</Text>
          <Text style={{ color: darkMode ? '#fff' : '#000' }}>05:10:18</Text>
        </View>
        <Text style={{ color: darkMode ? '#fff' : '#000' }}> {item.description} </Text>
      </View>
    </View>
  );
}