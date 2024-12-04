


import { View, Text, Image } from 'react-native';
import React, { useState, useContext } from 'react';
import { TouchableOpacity } from 'react-native';
import { ThemeContext } from '../../../context/ThemeContext';

export default function About({ item }) {
  const { darkMode } = useContext(ThemeContext);

  const content = item.description;
  const [showMore, setShowMore] = useState(false);

  return (
    <View style={{
      marginTop: 20,
    }} >
      <Text style={{
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10
      }}>About</Text>

      <View>
        <View>
          <Image source={{ uri: item.image }} style={{
            width: "100%",
            height: 200,
          }} />
        </View>
        <Text style={{
          marginTop: 10,
          color: 'gray',
        }}
          numberOfLines={showMore ? 0 : 4}
        >
          {content}
        </Text>

        <TouchableOpacity
          onPress={() => setShowMore(!showMore)}
        >
          <Text style={{
            textAlign: 'center',
            color: 'blue',
            marginTop: 10,
          }}
          >
            {showMore ? 'View less' : 'View more'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}