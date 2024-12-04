

import { View, Text, TouchableOpacity, Pressable, Image, FlatList } from 'react-native';
import React, { useEffect, useState, useContext } from 'react';
import { ThemeContext } from '../../../context/ThemeContext';

import { URL } from '../../../utils/url';

export default function Chart({ navigation }) {
  const [chart, setChart] = useState([]);
  const { darkMode } = useContext(ThemeContext);

  const readData = async () => {
    try {
      const response = await fetch(URL + '/charts');
      const data = await response.json();
      setChart(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    readData();
  }, []);

  return (
    <View style={{ marginTop: 20 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10, color: darkMode ? '#fff' : '#000' }}>
          Chart
        </Text>
        <Pressable>
          <Text style={{ color: 'gray' }}>See all</Text>
        </Pressable>
      </View>
      <FlatList
        data={chart}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('ChartDetailComponent', { id: item.id })}
            style={{ marginRight: 10, width: 150, justifyContent: 'center' }}>
            <Image source={{ uri: item.image }} style={{ width: 130, height: 130 }} />
            <Text style={{ color: darkMode ? '#fff' : '#000' }}>{item.title}</Text>
            <Text style={{ color: darkMode ? 'gray' : 'gray' }}>Daily chart-toppers update</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}