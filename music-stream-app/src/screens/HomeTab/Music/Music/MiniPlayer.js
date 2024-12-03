

import React, { useContext, useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { MusicContext } from '../Music/MusicContext';
import { ThemeContext } from '../../../../context/ThemeContext';

const MiniPlayer = ({ navigation }) => {
  const { currentSong, isPlaying, handlePlayPause } = useContext(MusicContext);
  // const { darkMode } = useContext(ThemeContext);
  const darkMode = true;
  const [liked, setLiked] = useState(false);

  if (!currentSong) return null;

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: darkMode ? '#121212' : '#fff' }]}
      onPress={() => navigation.navigate('Music')}
    >
      <Image source={{ uri: currentSong.image }} style={styles.artwork} />
      <View style={styles.details}>
        <Text style={[styles.title, { color: darkMode ? '#fff' : '#000' }]}>{currentSong.title}</Text>
        <Text style={[styles.artist, { color: darkMode ? '#fff' : '#000' }]}>{currentSong.artist}</Text>
      </View>
      <TouchableOpacity onPress={toggleLike} style={{ marginLeft: 10 }}>
        <Icon name={liked ? 'heart' : 'heart'} size={30} color={liked ? 'red' : 'gray'} />
      </TouchableOpacity>
      <TouchableOpacity style={{ marginLeft: 10 }} onPress={handlePlayPause}>
        <Icon name={isPlaying ? 'pause' : 'play'} size={30} color="#fff" />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    borderColor: 'cyan',
    borderWidth: 0.2,
  },
  artwork: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  details: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  artist: {
    fontSize: 14,
    color: '#666',
  },
});

export default MiniPlayer;

