import { View, Text, Image } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';

export default function Header() {
    return (
        <View style={{
            marginTop: 20,
            flexDirection: 'row',
            alignItems: 'center',
        }}>
            <View style={{
                marginRight: 10,
            }}>
                <Image source={require("../../../img/Playlist Details - Audio Listing/Image 50.png")} />
            </View>
            <View>
                <Text style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                }}>Top 50 - Canada</Text>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 10,
                    marginVertical: 10,
                }}>
                    <AntDesign name="hearto" size={16} color="blue" />
                    <Text>1,234</Text>
                    <Text>05:10:18</Text>
                </View>
                <Text>Daily chart-toppers update</Text>
            </View>
        </View>
    )
}