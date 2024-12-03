import { View, Text, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import Header from './Header'
import Title from './Title'
import Suggestion from './Suggestion'
import Chart from './Chart'
import Trending from './Trending'
import Artist from './Artist'


export default function Index({ navigation, toggleModal }) {

    return (
        <View style={{
            padding: 20,
        }}>
            {/* header */}
            <Header toggleModal={toggleModal} />
            <ScrollView contentContainerStyle={{ paddingBottom: 80 }} showsVerticalScrollIndicator={false} >
                {/* title */}
                <Title />

                {/* suggestion */}
                <Suggestion/>

                {/* chart */}

                <Chart navigation={navigation} />

                {/* trending */}

                <Trending />

                {/* artists */}

                <Artist navigation={navigation} />
            </ScrollView>
        </View>
    )
}