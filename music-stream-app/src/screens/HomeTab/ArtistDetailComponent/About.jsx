


import { View, Text, Image } from 'react-native';
import React, { useState, useContext } from 'react';
import { TouchableOpacity } from 'react-native';
import { ThemeContext } from '../../../context/ThemeContext';

export default function About() {
  const { darkMode } = useContext(ThemeContext);

  const content =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui. Nulla nec purus feugiat, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui. Nulla nec purus feugiat, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui. Nulla nec purus feugiat, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui. Nulla nec purus feugiat, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui. Nulla nec purus feugiat, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui. Nulla nec purus feugiat, ';
  const [showMore, setShowMore] = useState(false);

  return (
    <View style={{ marginTop: 20 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10, color: darkMode ? '#fff' : '#000' }}>
        About
      </Text>

      <View>
        <View>
          <Image source={require('../../../../assets/img/Artist Profile/Image 73.png')} />
        </View>
        <Text
          style={{ marginTop: 10, color: 'gray' }}
          numberOfLines={showMore ? 0 : 4}
        >
          {content}
        </Text>

        <TouchableOpacity onPress={() => setShowMore(!showMore)}>
          <Text style={{ textAlign: 'center', color: 'blue', marginTop: 10 }}>
            {showMore ? 'View less' : 'View more'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}