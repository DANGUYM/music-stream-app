

import { View, Text, TextInput } from 'react-native';
import React, { useContext } from 'react';
import { TouchableOpacity } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { ThemeContext } from '../../../context/ThemeContext';

export default function Title() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <View style={{
      marginTop: 20
    }}>
      <Text style={{
        color: darkMode ? '#fff' : 'gray',
      }}>Good morning,</Text>
      <Text style={{
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 5,
        color: darkMode ? '#fff' : '#000',
      }}>Ashley Scott</Text>
      <TouchableOpacity style={{
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 30,
        borderWidth: 1,
        borderColor: darkMode ? '#fff' : 'gray',
        padding: 10,
        width: '100%',
        marginTop: 20
      }} >
        <AntDesign name="search1" size={18} color={darkMode ? '#fff' : 'black'} style={{
          marginRight: 10
        }} />
        <TextInput placeholder="What you want to listen to" placeholderTextColor={darkMode ? '#fff' : 'gray'} style={{
          color: darkMode ? '#fff' : '#000',
        }} />
      </TouchableOpacity>
    </View>
  );
}