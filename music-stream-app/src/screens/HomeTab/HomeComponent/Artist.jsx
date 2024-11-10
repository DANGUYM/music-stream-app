import { View, Text, Pressable, FlatList, Image } from 'react-native'
import React, { useState } from 'react'

export default function Artist() {

    const [artists, setArtists] = useState([
        {
            id: 1,
            image: require('../../../img/Home - Audio Listing/Image 39.png'),
            name: 'Jennifer Wilson'
        },
        {
            id: 2,
            image: require('../../../img/Home - Audio Listing/Image 40.png'),
            name: 'Elizabeth Hall'
        },
        {
            id: 3,
            image: require('../../../img/Home - Audio Listing/Image 41.png'),
            name: 'Billie Eilish'
        },


    ]);
    return (
        <View style={{
            marginTop: 20,
        }} >
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
            }} >
                <Text style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    marginBottom: 10
                }}>Popular artists</Text>
                <Pressable>
                    <Text style={{
                        color: 'gray'
                    }}>See all</Text>
                </Pressable>
            </View>
            <FlatList
                data={artists}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, index }) => (
                    <View style={{
                        marginRight: 10,
                        width: 150,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <Image source={item.image}
                        />
                        <Text style={{
                            color: 'gray',
                            fontWeight: 'bold',
                            marginTop: 10
                        }}>{item.name}</Text>
                        <Pressable style={{
                            backgroundColor: '#000000',
                            padding: 10,
                            borderRadius: 30,
                            marginTop: 10
                        }}>
                            <Text style={{
                                color: '#ffffff',
                            }}>Follow</Text>
                        </Pressable>
                    </View>
                )}
            />
        </View>
    )
}