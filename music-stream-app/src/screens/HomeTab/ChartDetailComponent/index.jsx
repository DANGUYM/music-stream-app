import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import Header from './Header';
import Playlist from '../ChartDetailComponent/Playlist';


export default function ChartDetails({ navigation }) {


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
            <Header />
            {/* List songs*/}
            <Playlist />
        </View>
    )
}