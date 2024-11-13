import React from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import songs from '../songs';
import Header from './Header';

const ListLibrary = ({navigation}) => {
  const renderSongItem = ({ item }) => (
    <View style={styles.songContainer}>
      <Image source={item.image} style={styles.songImage} />
      <View style={styles.songInfo}>
        <Text style={styles.songTitle}>{item.title}</Text>
        <Text style={styles.songArtist}>{item.artist}</Text>

        <View style={styles.songViewsDuration} >
        <Text style={styles.songViews}>{item.views}</Text>
        <Text style={styles.songDuration}>{item.duration}</Text>
        </View>
        
      </View>
      <TouchableOpacity>
        <Icon name="chevron-forward-outline" size={24} />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
        <Header navigation={navigation} />
        <Text style={styles.headerText}>Your Library</Text>

      <FlatList
        data={songs}
        renderItem={renderSongItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />

<TouchableOpacity style={styles.addButton}>
        <Icon name="add" size={36} color="#fff" />
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  headerText: {
    fontSize: 18,
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
  songViews:{
    color: '#888',
    fontSize: 12,
    marginRight: 10,
  },
  songDuration: {
    color: '#888',
    fontSize: 12,
  },
  addButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#333',
    borderRadius: 50,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ListLibrary;
