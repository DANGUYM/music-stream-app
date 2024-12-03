

import { View, Text, Image } from 'react-native';
import React, { useContext } from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';
import { ThemeContext } from '../../../context/ThemeContext';

export default function Header({ item }) {
  const { darkMode } = useContext(ThemeContext);

  // Tính tổng thời gian của các bài hát
  const totalDuration = item.tracks.reduce((total, track) => {
    const [minutes, seconds] = track.duration.split(':').map(Number);
    return total + minutes * 60 + seconds;
  }, 0);

  const formatDuration = (seconds) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <View style={{ marginTop: 30, flexDirection: 'row', alignItems: 'center' }}>
      <View style={{ marginRight: 10 }}>
        <Image source={{ uri: item.image }} style={{ width: 150, height: 150, borderRadius: 10 }} />
      </View>
      <View>
        <Text style={{ fontSize: 20, fontWeight: 'bold', color: darkMode ? '#fff' : '#000' }}> {item.title} </Text>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, marginVertical: 10 }}>
          <AntDesign name="hearto" size={16} color="blue" />
          <Text style={{ color: darkMode ? '#fff' : '#000' }}>1,234</Text>
          <Text style={{ color: darkMode ? '#fff' : '#000' }}>{formatDuration(totalDuration)}</Text>
        </View>
        <Text style={{ color: darkMode ? '#fff' : '#000' }}> {item.description} </Text>
      </View>
    </View>
  );
}