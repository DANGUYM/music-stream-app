

import { View, Text, Image } from 'react-native';
import React, { useContext } from 'react';
import { ThemeContext } from '../../../context/ThemeContext';

export default function Header({ item }) {
  const { darkMode } = useContext(ThemeContext);

  return (
    <View style={{
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <View>
        <Image source={{ uri: item.image }} style={{
          width: 200,
          height: 200,
          borderRadius: 100,
        }} />
      </View>
      <Text style={{
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
      }}> {item.name} </Text>
      <Text style={{
        color: 'gray',
        marginTop: 5,
      }}> 65K Follower</Text>
    </View>
  )
}