import { View, Text, Touchable, Pressable, Image, FlatList } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native';

export default function Choice({ navigation }) {
    const [choice, setChoice] = useState([
        {
            id: 1,
            name: "Playlists",
        },
        {
            id: 2,
            name: "Artists",
        },
        {
            id: 3,
            name: "Albums",
        },
        {
            id: 4,
            name: "Podcasts",
        },
        {
            id: 5,
            name: "Charts",
        },
        {
            id: 6,
            name: "New Releases",
        }
    ])

    return (
        <View
            style={{
                margin: 10,
            }} >
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
            }} >
            </View>
            <FlatList
                data={choice}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, index }) => (
                    <TouchableOpacity
                        onPress={() => navigation.navigate('ListLibrary')}
                        style={{
                            marginRight: 10,
                            width: 120,
                            alignItems: 'center',
                            backgroundColor:"#ccc",
                            padding: 10,
                            borderRadius: 20
                        }}>
                        <Text style={{
                        }}>{item.name}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}