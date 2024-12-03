import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import React, { useState, useContext } from 'react';
import { ThemeContext } from '../../../context/ThemeContext';

export default function Choice({ navigation }) {
  const { darkMode } = useContext(ThemeContext);

  const [choice, setChoice] = useState([
    { id: 1, name: "Playlists" },
    { id: 2, name: "Artists" },
    { id: 3, name: "Albums" },
    { id: 4, name: "Podcasts" },
    { id: 5, name: "Charts" },
    { id: 6, name: "New Releases" }
  ]);

  return (
    <View style={{ margin: 10 }}>
      <FlatList
        data={choice}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('ListLibrary',{name: item.name})}
            style={{
              marginRight: 10,
              width: 120,
              alignItems: 'center',
              backgroundColor: darkMode ? '#333' : '#ccc',
              padding: 10,
              borderRadius: 20
            }}>
            <Text style={{ color: darkMode ? '#fff' : '#000' }}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}