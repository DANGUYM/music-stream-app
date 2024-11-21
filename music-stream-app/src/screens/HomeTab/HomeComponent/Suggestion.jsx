
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import React, { useContext } from 'react';
import { useState } from 'react';
import { ThemeContext } from '../../../context/ThemeContext';

export default function Suggestion({ navigation }) {
  const { darkMode } = useContext(ThemeContext);

  const [suggestion, setSuggestion] = useState([
    {
      id: 1,
      image: require('../../../../assets/img/Home - Audio Listing/Container 26.png'),
    },
    {
      id: 2,
      image: require('../../../../assets/img/Home - Audio Listing/Container 27.png'),
    },
  ]);

  return (
    <View style={{
      marginTop: 20
    }}>
      <Text style={{
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        color: darkMode ? '#fff' : '#000',
      }}>Suggestion for you</Text>
      <FlatList
        data={suggestion}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <TouchableOpacity
          // onPress={() => navigation.navigate('Music')}
          >

            <View>
              <Image source={item.image} style={{
                marginRight: 10,
              }} />
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}