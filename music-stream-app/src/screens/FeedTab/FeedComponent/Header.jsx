import { View, Text } from 'react-native'
import React from 'react'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function Header() {
    return (
        <View style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
        }}>
            <Text style={{
                fontSize: 20,
            }}>Feed</Text>
            <MaterialIcons name="connected-tv" size={24} color="gray" />
        </View>
    )
}