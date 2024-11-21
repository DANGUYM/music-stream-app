import { View, Text, TextInput, FlatList, StyleSheet } from 'react-native'
import React, { useState,useContext } from 'react'
import { TouchableOpacity } from 'react-native'
import { ThemeContext } from '../../context/ThemeContext';


export default function SearchStack() {

  const { darkMode } = useContext(ThemeContext);


  const [categoryList, setCategoryList] = useState([
    {
      id: 1,
      name: 'All'
    },
    {
      id: 2,
      name: 'Tracks'
    },
    {
      id: 3,
      name: 'Albums'
    },
    {
      id: 4,
      name: 'Artists'
    },
  ]);

  const [selectedCategory, setSelectedCategory] = useState('All');
    const [searchText, setSearchText] = useState('');
  return (
    <View style={{
      padding: 20,
      flex: 1,
      backgroundColor: darkMode ? '#121212' : '#fff' 
    }}>
      <TextInput
        style={[styles.searchInput, { backgroundColor: darkMode ? '#333' : '#ccc', color: darkMode ? '#fff' : '#000' }]}
        placeholder="Search"
        placeholderTextColor={darkMode ? '#888' : '#666'}
        value={searchText}
        onChangeText={setSearchText}
      />

      <FlatList
        style={{
          marginTop: 20,
        }}
        data={categoryList}
        numColumns={4}
        renderItem={({ item, index }) => (
          <View style={{
            flex: 1,
          }}>
            <TouchableOpacity
              onPress={() => setSelectedCategory(item.name)}
            >
              <Text style={[{color: darkMode ? 'gray' : '#000'},styles.container, selectedCategory == item.name && styles.selectedCategory]}>{item.name}</Text>
            </TouchableOpacity>
          </View>
        )}
      />


    </View>
  )
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
  }
})