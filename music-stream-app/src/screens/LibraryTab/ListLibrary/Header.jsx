import { View, Text, TouchableOpacity } from 'react-native';
import React, { useContext } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { ThemeContext } from '../../Context/ThemeContext';

export default function Header({ navigation }) {
  const { darkMode } = useContext(ThemeContext);

  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%', paddingVertical: 20 }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={24} color={darkMode ? '#fff' : '#000'} />
        </TouchableOpacity>
        <Text style={{ fontSize: 20, fontWeight: 'bold', color: darkMode ? '#fff' : '#000' }}>Playlist</Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="cast" size={24} color={darkMode ? '#fff' : '#000'} />
        </TouchableOpacity>
      </View>
    </View>
  );
}