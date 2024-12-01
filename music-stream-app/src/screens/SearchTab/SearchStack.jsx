import { View, Text, TextInput, FlatList, StyleSheet, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TouchableOpacity } from 'react-native'
import Feather from '@expo/vector-icons/Feather';
import Entypo from '@expo/vector-icons/Entypo';
import axios from 'axios';



export default function SearchStack() {


  //   var authParameters = {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/x-www-form-urlencoded',
  //     },
  //     body: 'grant_type=client_credentials&client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET,
  //   };

  //   fetch('https://accounts.spotify.com/api/token', authParameters)
  //     .then(response => response.json())
  //     .then(data => setAccessToken(data.access_token))

  //   console.log(">>>>>>>> ", accessToken);
  // }, []);
  const [searchInput, setSearchInput] = useState('');

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

  const [songs, setSongs] = useState([
    {
      id: 1,
    }
  ])

  const search = async () => {
    console.log("searchInput: ", searchInput);
  };

  return (
    <View style={{
      padding: 20,
      marginTop: 10,
    }}>
      <TextInput placeholder="Search"
        value={searchInput}
        onChangeText={text => setSearchInput(text)}
        keyboardType="default"
        onSubmitEditing={search} // Gọi hàm khi nhấn Enter
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

      <FlatList
        style={{
          marginTop: 20,
        }}
        keyExtractor={(item) => item.id.toString()}
        data={songs}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: 7,
          }}>
            <View style={{
              marginRight: 10,
            }}>
              <Image source={require('../../img/Artist Profile/Image 69.png')} style={{ width: 70, height: 70 }} />
            </View>
            <View>
              <Text style={{
                fontSize: 20,
              }}>{item.title}</Text>
              <Text style={{
                color: 'gray'
              }}>{item.artist}</Text>
              <View style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
                <Feather name="play" size={12} color="gray" />
                <Text style={{
                  color: 'gray'
                }}>{item.duration}</Text>
                <Entypo name="dot-single" size={20} color="gray" />
                <Text style={{
                  color: 'gray'
                }}>{item.fileSize}</Text>
              </View>
            </View>
            <Entypo name="dots-three-horizontal" size={24} color="black"
              style={{
                position: 'absolute',
                right: 0,
              }}
            />
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