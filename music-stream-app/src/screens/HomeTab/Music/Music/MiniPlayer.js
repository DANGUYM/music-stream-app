import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { MusicContext } from '../Music/MusicContext';
import { ThemeContext } from '../../../Context/ThemeContext';
import VisualizerCurrentSong from '../Visualizer/VisualizerCurrentSong';


const MiniPlayer = ({ navigation }) => {
  const { currentSong, isPlaying, handlePlayPause } = useContext(MusicContext);
  const { darkMode } = useContext(ThemeContext);


  if (!currentSong) return null;

  return (
    <TouchableOpacity style={[styles.container,{ backgroundColor: darkMode ? '#121212' : '#fff' }]} 
    onPress={() => navigation.navigate('Music')}>
      <Image source={currentSong.image} style={styles.artwork } />
      <View style={styles.details}>
        <Text style={[styles.title, {color: darkMode ? '#fff' : '#000'}]}>{currentSong.name}</Text>
        <Text style={styles.artist}>{currentSong.artists}</Text>
      </View>
      <VisualizerCurrentSong isPlaying={true} />
      <TouchableOpacity style={{marginLeft:10}} onPress={handlePlayPause}>
        <Icon name={isPlaying ? "pause" : "play"} size={30} color="#007BFF" />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    // borderTopWidth: 1,
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