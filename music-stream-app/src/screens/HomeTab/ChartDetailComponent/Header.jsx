import { View, Text, Image } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';

export default function Header({ item }) {

    return (
        <View style={{
            marginTop: 20,
            flexDirection: 'row',
            alignItems: 'center',
        }}>
            <View style={{
                marginRight: 10,
            }}>
                <Image source={{ uri: item.image }} style={{
                    width: 150,
                    height: 150,
                    borderRadius: 10,
                }} />
            </View>
            <View>
                <Text style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                }}> {item.name} </Text>
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
                <Text> {item.description} </Text>
            </View>
        </View>
    )
}