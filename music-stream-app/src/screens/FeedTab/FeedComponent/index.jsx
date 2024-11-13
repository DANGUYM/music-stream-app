import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import Header from './Header'
import ListFeed from './ListFeed'

export default function Index({ navigation }) {
    return (
        <View style={{
            padding: 20,
            flex: 1,
        }} >
            {/* header */}
            <Header />
            {/* list feeds */}
            <ListFeed />
        </View>
    )
}