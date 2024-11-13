import { View, Text, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import Header from './Header'
import Playlist from '../ArtistDetailComponent/Playlist'
import Albums from './Albums'
import About from './About'
import Fans from './Fans'

export default function ArtistDetails({ navigation }) {
    useEffect(() => {
        navigation.setOptions({
            headerTransparent: true,
            headerTitle: '',
            headerBackTitleVisible: false,
        })
    }, [])

    return (
        <View style={{
            padding: 20,
            marginTop: 20,
            flex: 1,
        }} >
            <ScrollView showsVerticalScrollIndicator={false}>
                {/* header */}
                <Header />
                {/* List songs */}
                <Playlist />
                {/* Albums */}
                <Albums />
                {/* About */}
                <About />
                {/* fan also like */}
                <Fans />
            </ScrollView>
        </View>
    )
}