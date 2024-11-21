
import { View, Text, Pressable, FlatList, Image, TouchableOpacity } from 'react-native';
import React, { useState, useContext } from 'react';
import { ThemeContext } from '../../../context/ThemeContext';

export default function Artist({ navigation }) {
  const { darkMode } = useContext(ThemeContext);

  const [artists, setArtists] = useState([
    {
      id: 1,
      image: require('../../../../assets/img/Home - Audio Listing/Image 39.png'),
      name: 'Jennifer Wilson',
    },
    {
      id: 2,
      image: require('../../../../assets/img/Home - Audio Listing/Image 40.png'),
      name: 'Elizabeth Hall',
    },
    {
      id: 3,
      image: require('../../../../assets/img/Home - Audio Listing/Image 41.png'),
      name: 'Billie Eilish',
    },
  ]);

  return (
    <View style={{ marginTop: 20 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10, color: darkMode ? '#fff' : '#000' }}>
          Popular artists
        </Text>
        <Pressable>
          <Text style={{ color: 'gray' }}>See all</Text>
        </Pressable>
      </View>
      <FlatList
        data={artists}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <View style={{ marginRight: 10, width: 150, justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity onPress={() => navigation.navigate('ArtistDetailComponent')}>
              <Image source={item.image} />
              <Text style={{ color: 'gray', fontWeight: 'bold', marginTop: 10 }}>{item.name}</Text>
            </TouchableOpacity>
            <Pressable style={{ backgroundColor: darkMode ? '#fff' : '#000', padding: 10, borderRadius: 30, marginTop: 10 }}>
              <Text style={{ color: darkMode ? '#000' : '#fff' }}>Follow</Text>
            </Pressable>
          </View>
        )}
      />
    </View>
  );
}