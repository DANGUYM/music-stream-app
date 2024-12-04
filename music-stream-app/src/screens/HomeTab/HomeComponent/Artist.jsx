
import { View, Text, Pressable, FlatList, Image, TouchableOpacity } from 'react-native';
import React, { useState, useContext, useEffect } from 'react';
import { ThemeContext } from '../../../context/ThemeContext';
import { URL } from '../../../utils/url';

export default function Artist({ navigation }) {
  const { darkMode } = useContext(ThemeContext);

  const [artists, setArtists] = useState([
  ]);

  const fetchData = async () => {
    try {
      const response = await fetch(`${URL}/artists`);
      const data = await response.json();
      setArtists(data);
    } catch (error) {
      console.error('Error fetching chart details:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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
            <TouchableOpacity
              onPress={() => navigation.navigate('ArtistDetailComponent', { item: item })}
              style={{
                alignItems: 'center',
              }}
            >
              <Image source={{ uri: item.image }}
                style={{
                  width: 150,
                  height: 150,
                  borderRadius: 100,
                }}
              />
              <Text style={{
                color: 'gray',
                fontWeight: 'bold',
                marginTop: 10
              }}>{item.name}</Text>
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