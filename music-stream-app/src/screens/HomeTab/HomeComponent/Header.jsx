
import { View, Text, Image, TouchableOpacity } from 'react-native';
import React, { useContext } from 'react';
import Feather from '@expo/vector-icons/Feather';
import { ThemeContext } from '../../../context/ThemeContext';

export default function Header({ toggleModal }) {
  const { darkMode } = useContext(ThemeContext);

  return (
    <View style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    //   backgroundColor: darkMode ? '#333' : '#fff',
    marginBottom: 10,
    }}>
      <View>
        <Image source={require('../../../../assets/img/Home - Audio Listing/Image 36.png')}
          style={{
            width: 40,
            height: 40
          }}
        />
      </View>
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
      }}>
        <Feather name="bell" size={24} color={darkMode ? '#fff' : 'gray'} style={{
          marginRight: 20
        }} />
        <TouchableOpacity onPress={toggleModal}>
          <Image
            source={require('../../../../assets/img/Home - Audio Listing/Avatar 3.png')}
            style={{ width: 40, height: 40 }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}