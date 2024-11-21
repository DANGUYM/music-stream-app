

import { View, Text, Image } from 'react-native';
import React, { useContext } from 'react';
import { ThemeContext } from '../../../context/ThemeContext';

export default function Header() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop:10 }}>
      <View>
        <Image source={require('../../../../assets/img/Artist Profile/Image 63.png')} />
      </View>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 10, color: darkMode ? '#fff' : '#000' }}>
        Ryan Young
      </Text>
      <Text style={{ color: 'gray', marginTop: 5 }}>65.1K Follower</Text>
    </View>
  );
}