import { View, Text, TextInput, FlatList, StyleSheet, Image } from 'react-native';
import React, { useState, useContext } from 'react';
import { TouchableOpacity } from 'react-native';
import { ThemeContext } from '../../context/ThemeContext';
import { MusicContext } from '../HomeTab/Music/Music/MusicContext';
import Feather from '@expo/vector-icons/Feather';
import Entypo from '@expo/vector-icons/Entypo';
import { URL } from '../../utils/url';

export default function SearchStack({ navigation }) {
  const { darkMode } = useContext(ThemeContext);
  const { playSound } = useContext(MusicContext);

  const [searchInput, setSearchInput] = useState('');
  const [categoryList, setCategoryList] = useState([
    { id: 1, name: 'All' },
    { id: 2, name: 'Tracks' },
    { id: 3, name: 'Albums' },
    { id: 4, name: 'Artists' },
  ]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [songs, setSongs] = useState([]);

  const search = async () => {
    try {
      const response = await fetch(`${URL}/tracks/search/${searchInput}`);
      const data = await response.json();
      setSongs(data);
    } catch (error) {
      console.error('Error fetching chart details:', error);
    }
  };

  return (
    <View style={{ padding: 20, marginTop: 10 }}>
      <TextInput
        placeholder="Search"
        value={searchInput}
        onChangeText={text => setSearchInput(text)}
        keyboardType="default"
        onSubmitEditing={search}
        style={{
          backgroundColor: '#f5f5f5',
          padding: 8,
          borderRadius: 30,
          borderWidth: 1,
          borderColor: 'gray',
        }}
      />

      <FlatList
        style={{ marginTop: 20 }}
        data={categoryList}
        numColumns={4}
        renderItem={({ item }) => (
          <View style={{ flex: 1 }}>
            <TouchableOpacity onPress={() => setSelectedCategory(item.name)}>
              <Text style={[styles.container, selectedCategory === item.name && styles.selectedCategory]}>
                {item.name}
              </Text>
            </TouchableOpacity>
          </View>
        )}
      />

      <FlatList
        style={{ marginTop: 20 }}
        keyExtractor={(item) => item.id.toString()}
        data={songs}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('Music', { song: item, songs })}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 7 }}>
              <View style={{ marginRight: 10 }}>
                <Image source={{ uri: item.image }} style={{ width: 70, height: 70 }} />
              </View>
              <View>
                <Text style={{ fontSize: 20, color: darkMode ? '#fff' : '#000' }}>{item.title}</Text>
                <Text style={{ color: 'gray' }}>{item.artist}</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Feather name="play" size={12} color="gray" />
                  <Text style={{ color: 'gray' }}>{item.duration}</Text>
                  <Entypo name="dot-single" size={20} color="gray" />
                  <Text style={{ color: 'gray' }}>{item.fileSize}</Text>
                </View>
              </View>
              <Entypo name="dots-three-horizontal" size={24} color={darkMode ? '#fff' : 'black'} style={{ position: 'absolute', right: 0 }} />
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    fontSize: 20,
    textAlign: 'center',
    paddingBottom: 10,
  },
  searchInput: {
    height: 40,
    borderRadius: 20,
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  selectedCategory: {
    borderBottomWidth: 6,
    borderBottomColor: 'blue',
    color: 'blue',
  },
});