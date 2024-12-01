import { View, Text, Image } from 'react-native'
import React from 'react'

export default function Header({ item }) {
    return (
        <View style={{
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <View>
                <Image source={{ uri: item.image }} style={{
                    width: 200,
                    height: 200,
                    borderRadius: 100,
                }} />
            </View>
            <Text style={{
                fontSize: 20,
                fontWeight: 'bold',
                marginTop: 10,
            }}> {item.name} </Text>
            <Text style={{
                color: 'gray',
                marginTop: 5,
            }}> {item.follow / 1000}K Follower</Text>
        </View>
    )
}