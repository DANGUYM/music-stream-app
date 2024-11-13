import { View, Text, Image } from 'react-native'
import React from 'react'

export default function Header() {
    return (
        <View style={{
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <View>
                <Image source={require('../../../img/Artist Profile/Image 63.png')} />
            </View>
            <Text style={{
                fontSize: 20,
                fontWeight: 'bold',
                marginTop: 10,
            }}>Ryan Young</Text>
            <Text style={{
                color: 'gray',
                marginTop: 5,
            }}>65.1K Follower</Text>
        </View>
    )
}