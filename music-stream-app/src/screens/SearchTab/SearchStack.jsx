import { View, Text, TextInput, FlatList, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native'

export default function SearchStack() {

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
  return (
    <View style={{
      padding: 20,
      marginTop: 10,
      flex: 1,
    }}>
      <TextInput placeholder="Search"
        style={{
          backgroundColor: '#f5f5f5',
          padding: 8,
          borderRadius: 30,
          borderWidth: 1,
          borderColor: 'gray',
        }}
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
              <Text style={[styles.container, selectedCategory == item.name && styles.selectedCategory]}>{item.name}</Text>
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
  selectedCategory: {
    borderBottomWidth: 6,
    borderBottomColor: 'blue',
    color: 'blue',
  }
})