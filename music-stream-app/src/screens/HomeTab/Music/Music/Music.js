
import React, { useContext, useEffect, useState } from 'react';
import { View, Text, Image, ImageBackground, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import Slider from '@react-native-community/slider';
import { Audio } from 'expo-av';
import Icon from 'react-native-vector-icons/Feather';
import songs from '../../ChartDetailComponent/songsData';
import VisualizerTop from '../Visualizer/VisualizerTop';
import VisualizerBottom from '../Visualizer/VisualizerBottom';
import VisualizerLeft from '../Visualizer/VisualizerLeft';
import VisualizerRight from '../Visualizer/VisualizerRight';
import VisualizerCurrentSong from '../Visualizer/VisualizerCurrentSong';
import { useRoute } from '@react-navigation/native';
import { MusicContext } from './MusicContext';

const Music = () => {
  const route = useRoute();
  const { song } = route.params || {};
  const { currentSong, isPlaying, handlePlayPause, playSound } = useContext(MusicContext);
  const [position, setPosition] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    if (song) {
      playSound(song);
    }
  }, [song]);

  useEffect(() => {
    const interval = setInterval(async () => {
      if (currentSong && isPlaying) {
        const status = await currentSong.sound.getStatusAsync();
        if (status.isPlaying) {
          setPosition(status.positionMillis);
          setDuration(status.durationMillis);
        }
      }
    }, 100);

    return () => clearInterval(interval);
  }, [currentSong, isPlaying]);

  const formatTime = (milliseconds) => {
    const minutes = Math.floor(milliseconds / 60000);
    const seconds = ((milliseconds % 60000) / 1000).toFixed(0);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <ImageBackground source={currentSong?.image} style={styles.background}>
      <View style={styles.container}>
        {currentSong && (
          <View style={styles.currentSongContainer}>
            <VisualizerTop isPlaying={isPlaying}/>
            <Image source={currentSong.image} style={styles.currentArtwork} />
            <VisualizerBottom isPlaying={isPlaying}/>
            <VisualizerLeft isPlaying={isPlaying}/>
            <VisualizerRight isPlaying={isPlaying}/>
            <Text style={styles.currentTitle}>{currentSong.name}</Text>
            <Text style={styles.currentArtist}>{currentSong.artists}</Text>
            <View style={styles.controls}>
              <TouchableOpacity onPress={() => playSound(songs[(songs.findIndex(s => s.id === currentSong.id) - 1 + songs.length) % songs.length])}>
                <Icon name="skip-back" size={30} color="#007BFF" />
              </TouchableOpacity>
              <TouchableOpacity onPress={handlePlayPause}>
                <Icon name={isPlaying ? "pause" : "play"} size={30} color="#007BFF" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => playSound(songs[(songs.findIndex(s => s.id === currentSong.id) + 1) % songs.length])}>
                <Icon name="skip-forward" size={30} color="#007BFF" />
              </TouchableOpacity>
            </View>
            <View style={styles.timelineContainer}>
              <Text style={styles.timeText}>{formatTime(position)}</Text>
              <Slider
                style={styles.progressBar}
                value={position}
                maximumValue={duration}
                onSlidingComplete={async value => {
                  if (currentSong) {
                    await currentSong.sound.setPositionAsync(value);
                  }
                }}
              />
              <Text style={styles.timeText}>{formatTime(duration)}</Text>
            </View>
          </View>
        )}
        <FlatList
          data={songs}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => playSound(item)}>
              <View style={styles.songItem}>
                <Image source={item.image} style={styles.artwork} />
                <View style={styles.songDetails}>
                  <Text style={styles.title}>{item.name}</Text>
                  <Text style={styles.artist}>{item.artists}</Text>
                </View>
                {currentSong && currentSong.id === item.id && (
                  <VisualizerCurrentSong isPlaying={true}/>
                )}
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
  songItem: {
    flexDirection: 'row',
    marginBottom: 20,
    padding: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    borderRadius: 5,
  },
  artwork: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  songDetails: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  artist: {
    fontSize: 14,
    color: '#666',
  },
  currentSongContainer: {
    alignItems: 'center',
  },
  currentArtwork: {
    width: 250,
    height: 250,
  },
  currentTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  currentArtist: {
    fontSize: 18,
    color: '#666',
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    marginTop: 10,
  },
  timelineContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
  },
  timeText: {
    fontSize: 14,
    color: '#666',
  },
  progressBar: {
    flex: 1,
    height: 40,
    marginTop: 10,
  },
});

export default Music;