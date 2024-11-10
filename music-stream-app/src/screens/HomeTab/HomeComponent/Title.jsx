import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign';

export default function Title() {
    return (
        <View style={{
            marginTop: 20
        }}>
            <Text style={{
                color: 'gray',
            }}>Good morning,</Text>
            <Text style={{
                fontSize: 24,
                fontWeight: 'bold',
                marginTop: 5
            }}>Ashley Scott</Text>
            <TouchableOpacity style={{
                flexDirection: 'row',
                alignItems: 'center',
                borderRadius: 30,
                borderWidth: 1,
                borderColor: 'gray',
                padding: 10,
                width: '100%',
                marginTop: 20
            }} >
                <AntDesign name="search1" size={18} color="black" style={{
                    marginRight: 10
                }} />
                <TextInput placeholder="What you want to listen to" style={{

                }} />
            </TouchableOpacity>
        </View>
    )
}