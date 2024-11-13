import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Feather from '@expo/vector-icons/Feather';
import Icon from 'react-native-vector-icons/Feather';


export default function Header({ navigation }) {
    return (
        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
        }}>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
                paddingVertical: 20,
            }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text> <Icon name="arrow-left" size={24} /></Text>
                </TouchableOpacity>

                <Text style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                }} >Playlist</Text>

                <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text> <Icon name="cast" size={24} /></Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}