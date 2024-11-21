


import { View, Text, Pressable, FlatList, Image } from 'react-native';
import React, { useState, useContext } from 'react';
import { ThemeContext } from '../../../context/ThemeContext';

export default function Fans() {
  const { darkMode } = useContext(ThemeContext);

  const [fans, setFans] = useState([
    {
        id: 1,
        nameAlbum: 'ME',
        nameArtist: 'Jessica Gonzalez',
        image: require('../../../../assets/img/Home - Audio Listing/Image 45.png'),
    },
    {
        id: 2,
        nameAlbum: 'Magna nost',
        nameArtist: 'Brian Thomas',
        image: require('../../../../assets/img/Home - Audio Listing/Image 46.png'),
    },
    {
        id: 3,
        nameAlbum: 'ME',
        nameArtist: 'Jessica Gonzalez',
        image: require('../../../../assets/img/Home - Audio Listing/Image 47.png'),
    },
])

  return (
    <View style={{ marginTop: 20 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10, color: darkMode ? '#fff' : '#000' }}>
          Fans also like
        </Text>
      </View>
      <FlatList
        data={fans}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <View style={{ marginRight: 10, width: 150, justifyContent: 'center' }}>
            <Image source={item.image} />
            <Text style={{ color: darkMode ? '#fff' : '#000', fontWeight: 'bold' }}>{item.nameAlbum}</Text>
            <Text style={{ color: 'gray' }}>{item.nameArtist}</Text>
          </View>
        )}
      />
    </View>
  );
}