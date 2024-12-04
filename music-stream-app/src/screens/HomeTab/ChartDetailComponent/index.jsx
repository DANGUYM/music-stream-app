

import { View, Text } from 'react-native';
import React, { useEffect, useState, useContext } from 'react';
import Header from './Header';
import Playlist from '../ChartDetailComponent/Playlist';
import { useRoute } from '@react-navigation/native';
import { ThemeContext } from '../../../context/ThemeContext';
import { URL } from '../../../utils/url';

export default function ChartDetails({ navigation }) {
  const route = useRoute();
  const { id } = route.params;
  const { darkMode } = useContext(ThemeContext);
  const [chartDetails, setChartDetails] = useState(null);

  const fetchChartDetails = async () => {
    try {
      const response = await fetch(`${URL}/charts/${id}`);
      const data = await response.json();
      setChartDetails(data);
    } catch (error) {
      console.error('Error fetching chart details:', error);
    }
  };

  useEffect(() => {
    fetchChartDetails();
  }, []);

  useEffect(() => {
    navigation.setOptions({
      headerTransparent: true,
      headerTitle: '',
      headerBackTitleVisible: false,
    });
  }, []);

  if (!chartDetails) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={{ padding: 20, flex: 1, backgroundColor: darkMode ? '#121212' : '#fff' }}>
      <Header item={chartDetails} />
      <Playlist songs={chartDetails.tracks} navigation={navigation} />
    </View>
  );
}