import { View, Text, Image, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import Feather from '@expo/vector-icons/Feather';
import Entypo from '@expo/vector-icons/Entypo';


export default function Playlist({ item }) {

    const [songs, setSongs] = useState([])

    useEffect(() => {
        if (item === undefined) return;
        // Lọc bỏ giá trị undefined và chuyển đổi dữ liệu phù hợp với cấu trúc của state songs
        const filteredData = item.filter(item => item !== undefined).map((item, index) => ({
            id: songs.length + index + 1, // Tạo id mới
            title: item.name,
            artist: item.artists,
            duration: item.duration, // Chuyển đổi thời gian
            fileSize: `${item.size} MB`,
            image: { uri: item.image }, // Dùng uri cho ảnh từ link
        }));

        // Cập nhật state với dữ liệu mới
        setSongs(prevSongs => [...filteredData]);
    }, [])

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
                }}>
                    <Feather name="heart" size={24} color="black" />
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
            <FlatList
                style={{
                    marginTop: 20,
                    flex: 1,
                }}
                keyExtractor={(item) => item.id.toString()}
                data={songs}
                showsVerticalScrollIndicator={false}
                renderItem={({ item, index }) => (
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginVertical: 7,
                    }}>
                        <View style={{
                            marginRight: 10,
                        }}>
                            <Image source={item.image} style={{ width: 70, height: 70 }} />
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