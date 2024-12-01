import { View, Text, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import Header from './Header'
import Playlist from '../ArtistDetailComponent/Playlist'
import Albums from './Albums'
import About from './About'
import Fans from './Fans'
import { useRoute } from '@react-navigation/native'

export default function ArtistDetails({ navigation }) {

    const route = useRoute();
    const { item } = route.params;

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
                <Header item={item} />
                {/* List songs */}
                <Playlist item={item.songs} />
                {/* Albums */}
                <Albums item={item} />
                {/* About */}
                <About item={item} />
                {/* fan also like */}
                <Fans item={item} />
            </ScrollView>
        </View>
    )
}