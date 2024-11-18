import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import Header from './Header';
import Playlist from '../ChartDetailComponent/Playlist';
import { useRoute } from '@react-navigation/native';


export default function ChartDetails({ navigation }) {

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
            {/* header */}
            <Header item={item} />
            {/* List songs*/}
            <Playlist item={item.songs} />
        </View>
    )
}