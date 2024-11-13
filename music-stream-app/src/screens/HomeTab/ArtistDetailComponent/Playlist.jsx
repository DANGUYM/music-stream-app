import { View, Text, Image, FlatList } from 'react-native'
import React, { useState } from 'react'
import Feather from '@expo/vector-icons/Feather';
import Entypo from '@expo/vector-icons/Entypo';
import { TouchableOpacity } from 'react-native';


export default function Playlist() {

    const [songs, setSongs] = useState([
        {
            id: 1,
            title: 'FLOWER',
            artist: 'Artist 1',
            duration: '3:36',
            fileSize: '5.2 MB',
            image: require('../../../img/Playlist Details - Audio Listing/Image 54.png'),
        },
        {
            id: 2,
            title: 'FLOWER',
            artist: 'Artist 1',
            duration: '3:36',
            fileSize: '5.2 MB',
            image: require('../../../img/Playlist Details - Audio Listing/Image 54.png'),
        },
        {
            id: 3,
            title: 'FLOWER',
            artist: 'Artist 1',
            duration: '3:36',
            fileSize: '5.2 MB',
            image: require('../../../img/Playlist Details - Audio Listing/Image 54.png'),
        },
        {
            id: 4,
            title: 'FLOWER',
            artist: 'Artist 1',
            duration: '3:36',
            fileSize: '5.2 MB',
            image: require('../../../img/Playlist Details - Audio Listing/Image 54.png'),
        },
        {
            id: 5,
            title: 'FLOWER',
            artist: 'Artist 1',
            duration: '3:36',
            fileSize: '5.2 MB',
            image: require('../../../img/Playlist Details - Audio Listing/Image 54.png'),
        },
        {
            id: 6,
            title: 'FLOWER',
            artist: 'Artist 1',
            duration: '3:36',
            fileSize: '5.2 MB',
            image: require('../../../img/Playlist Details - Audio Listing/Image 54.png'),
        },
        {
            id: 7,
            title: 'FLOWER',
            artist: 'Artist 1',
            duration: '3:36',
            fileSize: '5.2 MB',
            image: require('../../../img/Playlist Details - Audio Listing/Image 54.png'),
        },
        {
            id: 8,
            title: 'FLOWER',
            artist: 'Artist 1',
            duration: '3:36',
            fileSize: '5.2 MB',
            image: require('../../../img/Playlist Details - Audio Listing/Image 54.png'),
        },
        {
            id: 9,
            title: 'FLOWER',
            artist: 'Artist 1',
            duration: '3:36',
            fileSize: '5.2 MB',
            image: require('../../../img/Playlist Details - Audio Listing/Image 54.png'),
        },
        {
            id: 10,
            title: 'FLOWER',
            artist: 'Artist 1',
            duration: '3:36',
            fileSize: '5.2 MB',
            image: require('../../../img/Playlist Details - Audio Listing/Image 54.png'),
        },

    ])

    return (
        <View style={{
            marginTop: 20,
            flex: 1,
        }}>
            <View style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
                alignItems: 'center',
            }}>
                <View style={{
                    flexDirection: 'row',
                    gap: 30,
                    alignItems: 'center',
                }}>
                    <TouchableOpacity style={{
                        padding: 10,
                        borderRadius: 30,
                        marginTop: 10,
                        borderColor: 'gray',
                        borderWidth: 1,
                        width: 100,
                    }}>
                        <Text style={{
                            color: 'gray',
                            textAlign: 'center',
                        }}>Follow</Text>
                    </TouchableOpacity>
                    <Entypo name="dots-three-horizontal" size={24} color="black" />
                </View>
                <View style={{
                    flexDirection: 'row',
                    gap: 30,
                    alignItems: 'center',
                }}>
                    <Entypo name="share" size={24} color="black" />
                    <Image source={require("../../../img/Playlist Details - Audio Listing/Icon Button 2.png")} />
                </View>
            </View>

            <Text style={{
                fontSize: 20,
                fontWeight: 'bold',
                marginTop: 20,
            }}>Popular</Text>
            <FlatList
                style={{
                    marginTop: 10,
                    flex: 1,
                }}
                keyExtractor={(item) => item.id.toString()}
                data={songs.slice(0, 5)}
                scrollEnabled={false}
                showsVerticalScrollIndicator={false}
                size={5}
                renderItem={({ item, index }) => (
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginVertical: 7,
                    }}>
                        <View style={{
                            marginRight: 10,
                        }}>
                            <Image source={require("../../../img/Playlist Details - Audio Listing/Image 54.png")} />
                        </View>
                        <View>
                            <Text style={{
                                fontSize: 20,
                            }}>{item.title}</Text>
                            <Text style={{
                                color: 'gray'
                            }}>{item.artist}</Text>
                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}>
                                <Feather name="play" size={12} color="gray" />
                                <Text style={{
                                    color: 'gray'
                                }}>{item.duration}</Text>
                                <Entypo name="dot-single" size={20} color="gray" />
                                <Text style={{
                                    color: 'gray'
                                }}>{item.fileSize}</Text>
                            </View>
                        </View>
                        <Entypo name="dots-three-horizontal" size={24} color="black"
                            style={{
                                position: 'absolute',
                                right: 0,
                            }}
                        />
                    </View>
                )}
            />
        </View>
    )
}