
import React, { useContext, useEffect, useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import Entypo from '@expo/vector-icons/Entypo';
import songs from './songsData';
import VisualizerCurrentSong from '../Music/Visualizer/VisualizerCurrentSong';
import { MusicContext } from '../Music/Music/MusicContext';
import { ThemeContext } from '../../Context/ThemeContext';

export default function Playlist({ navigation }) {
  const [playlist, setPlaylist] = useState([]);
  const { currentSong, isPlaying, playSound } = useContext(MusicContext);
  const { darkMode } = useContext(ThemeContext);

  useEffect(() => {
    setPlaylist(songs);
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: darkMode ? '#121212' : '#fff' }}>
      <View style={{ marginTop: 20, flex: 1 }}>
        <View style={{ justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
          <View style={{ flexDirection: 'row', gap: 30 }}>
            <Feather name="heart" size={24} color={darkMode ? '#fff' : 'black'} />
            <Entypo name="dots-three-horizontal" size={24} color={darkMode ? '#fff' : 'black'} />
          </View>
          <View style={{ flexDirection: 'row', gap: 30, alignItems: 'center' }}>
            <Entypo name="share" size={24} color={darkMode ? '#fff' : 'black'} />
            <Image source={require("../../../img/Playlist Details - Audio Listing/Icon Button 2.png")} />
          </View>
        </View>
        <FlatList
          style={{ marginTop: 20, flex: 1 }}
          keyExtractor={(item) => item.id.toString()}
          data={playlist}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => playSound(item)}>
              <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 7 }}>
                <View style={{ marginRight: 10 }}>
                  <Image source={item.image} style={{ width: 70, height: 70 }} />
                </View>
                <View style={{ width: 268 }}>
                  <Text style={{ fontSize: 20, color: darkMode ? '#fff' : '#000' }}>{item.name}</Text>
                  <Text style={{ color: 'gray' }}>{item.artists}</Text>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Feather name="play" size={12} color="gray" />
                    <Text style={{ color: 'gray' }}>{item.duration}</Text>
                    <Entypo name="dot-single" size={20} color="gray" />
                    <Text style={{ color: 'gray' }}>{item.size} MB</Text>
                  </View>
                </View>
                {currentSong && currentSong.id === item.id && (
                  <VisualizerCurrentSong isPlaying={true} />
                )}
                <Entypo name="dots-three-horizontal" size={24} color={darkMode ? '#fff' : 'black'} style={{ position: 'absolute', right: 0 }} />
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
}