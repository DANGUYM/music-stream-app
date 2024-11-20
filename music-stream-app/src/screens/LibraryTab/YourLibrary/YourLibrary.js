import React, { useContext } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import songs from '../../HomeTab/ChartDetailComponent/songsData';
import Choice from './Choice';
import { ThemeContext } from '../../Context/ThemeContext';

const MusicLibrary = ({ navigation }) => {
  const { darkMode } = useContext(ThemeContext);

  const renderSongItem = ({ item }) => (
    <View style={styles.songContainer}>
      <Image source={item.image} style={styles.songImage} />
      <View style={styles.songInfo}>
        <Text style={[styles.songTitle, { color: darkMode ? '#fff' : '#000' }]}>{item.name}</Text>
        <Text style={styles.songArtist}>{item.artists}</Text>
        <View style={styles.songViewsDuration}>
          <Text style={styles.songViews}>{item.views}</Text>
          <Text style={styles.songDuration}>{item.duration}</Text>
        </View>
      </View>
      <TouchableOpacity>
        <Icon name="heart-outline" size={24} color="#1DB954" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={[styles.container, { backgroundColor: darkMode ? '#121212' : '#fff' }]}>
      <Text style={[styles.headerText, { color: darkMode ? '#fff' : '#000' }]}>Your Library</Text>
      <Choice navigation={navigation} />
      <FlatList
        data={songs}
        renderItem={renderSongItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  songContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  songImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 15,
  },
  songInfo: {
    flex: 1,
  },
  songTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  songArtist: {
    color: '#888',
  },
  songViewsDuration: {
    flexDirection: 'row',
  },
  songViews: {
    color: '#888',
    fontSize: 12,
    marginRight: 10,
  },
  songDuration: {
    color: '#888',
    fontSize: 12,
  },
});

export default MusicLibrary;