
import React, { useContext, useEffect, useState } from 'react';
import { View, Text, Image, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import Slider from '@react-native-community/slider';
import Icon from 'react-native-vector-icons/Feather';
import VisualizerTop from '../Visualizer/VisualizerTop';
import VisualizerBottom from '../Visualizer/VisualizerBottom';
import VisualizerLeft from '../Visualizer/VisualizerLeft';
import VisualizerRight from '../Visualizer/VisualizerRight';
import VisualizerCurrentSong from '../Visualizer/VisualizerCurrentSong';
import AntDesign from '@expo/vector-icons/AntDesign';

import Entypo from '@expo/vector-icons/Entypo';
import Ionicons from '@expo/vector-icons/Ionicons';


import { useRoute } from '@react-navigation/native';
import { MusicContext } from './MusicContext';

const Music = ({navigation}) => {
  const route = useRoute();
  const { song, songs } = route.params || {};
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
    }, 1000);

    return () => clearInterval(interval);
  }, [currentSong, isPlaying]);

  const formatTime = (milliseconds) => {
    const minutes = Math.floor(milliseconds / 60000);
    const seconds = ((milliseconds % 60000) / 1000).toFixed(0);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const playPreviousSong = () => {
    const currentIndex = songs.findIndex(s => s.id === currentSong.id);
    const previousIndex = (currentIndex - 1 + songs.length) % songs.length;
    playSound(songs[previousIndex]);
  };

  const playNextSong = () => {
    const currentIndex = songs.findIndex(s => s.id === currentSong.id);
    const nextIndex = (currentIndex + 1) % songs.length;
    playSound(songs[nextIndex]);
  };

  return (
    <ImageBackground source={{ uri: currentSong?.image }} style={styles.background}>
      <View style={styles.container}>
        {currentSong && (
          <View style={styles.currentSongContainer}>

        <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)',height: 60, width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10 }}>
            <Text style={{color:"#fff"}} >Play</Text>
            <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign name="down" size={24} color="#fff"  />
            </TouchableOpacity>
        </View>



        <View style={{alignItems: 'center',backgroundColor: 'rgba(0, 0, 0, 0.3)',height: 350, width: '100%', marginTop:310, paddingTop:30}}>
            {/* <Image source={{ uri: currentSong.image }} style={styles.currentArtwork} /> */}
            {/* <VisualizerBottom isPlaying={isPlaying} /> */}
            {/* <VisualizerLeft isPlaying={isPlaying} /> */}
            {/* <VisualizerRight isPlaying={isPlaying} /> */}

            
            <Text style={styles.currentTitle}>{currentSong.title}</Text>
            <Text style={styles.currentArtist}>{currentSong.artist}</Text>



            <VisualizerTop isPlaying={isPlaying} />

<View style={styles.timelineContainer}>
  <Text style={styles.timeText}>{formatTime(position)}</Text>
  <Slider
    style={styles.progressBar}
    value={position}
    minimumValue={0}
    maximumValue={duration}
    minimumTrackTintColor="#fff" // Màu trắng cho thời lượng đã nghe
    maximumTrackTintColor="cyan" // Màu cyan cho phần chưa nghe
    thumbTintColor="#fff" // Màu nút trượt
    onSlidingComplete={async value => {
      if (currentSong) {
        await currentSong.sound.setPositionAsync(value);
        setPosition(value);
      }
    }}
  />
  <Text style={styles.timeText}>{formatTime(duration)}</Text>
</View>  

            <View style={styles.controls}>
            <TouchableOpacity>
              <Entypo name="shuffle" size={30} color="#fff"/>
              </TouchableOpacity>
              <TouchableOpacity onPress={playPreviousSong}>
                <Icon name="skip-back" size={60} color="#fff" />
              </TouchableOpacity>
              <TouchableOpacity onPress={handlePlayPause}>
                <Icon name={isPlaying ? "pause" : "play"} size={60} color="#fff" />
              </TouchableOpacity>
              <TouchableOpacity onPress={playNextSong}>
                <Icon name="skip-forward" size={60} color="#fff" />
              </TouchableOpacity>
              <TouchableOpacity>
              <Entypo name="dots-three-horizontal" size={30} color="#fff"/>
              </TouchableOpacity>
            </View>


          


            <View style={styles.controls}>

              <View style={{flexDirection:"row"}} >

              <TouchableOpacity style={{flexDirection:"row"}} >
              <Icon name="heart" size={24} color="#fff"/>
              <Text style={{ color: '#fff' , fontWeight:"bold", fontSize:16 , marginLeft:5}}>12k</Text>
              </TouchableOpacity>

              <TouchableOpacity style={{flexDirection:"row", marginLeft:10}} >
              <Ionicons name="chatbox-ellipses-outline" size={24} color="#fff"/>
              <Text style={{ color: '#fff' , fontWeight:"bold", fontSize:16 , marginLeft:5, marginRight:150}}>450</Text>
              </TouchableOpacity>

            </View>

              <TouchableOpacity style={{flexDirection:"row"}} >
              <Icon name="share" size={24} color="#fff"/>
              </TouchableOpacity>
              </View>

              </View>

          </View>
        )}
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
    // backgroundColor: 'rgba(255, 255, 255, 0.5)',
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
    color: '#fff',
  },
  currentArtist: {
    fontSize: 18,
    color: '#fff',
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '80%',
    marginTop: 30,
  },
  timelineContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
  },
  timeText: {
    fontSize: 14,
    color: '#fff',
  },
  progressBar: {
    flex: 1,
  },
});

export default Music;