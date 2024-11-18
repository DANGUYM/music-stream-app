import { View, Text, Touchable, Pressable, Image, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TouchableOpacity } from 'react-native';
import { getDatabase, onValue, ref } from 'firebase/database';


export default function Chart({ navigation }) {

    const [chart, setChart] = useState([]);

    const readData = () => {
        const db = getDatabase();
        const dbRef = ref(db, 'charts');

        onValue(dbRef, (snapshot) => {
            const data = snapshot.val().filter(item => item !== undefined);
            setChart(data);
        });
    };


    useEffect(() => {
        readData();
        console.log(chart);
    }, [])

    return (
        <View
            style={{
                marginTop: 20,
            }} >
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
            }} >
                <Text style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    marginBottom: 10
                }}>Chart</Text>
                <Pressable>
                    <Text style={{
                        color: 'gray'
                    }}>See all</Text>
                </Pressable>
            </View>
            <FlatList
                data={chart}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, index }) => (
                    <TouchableOpacity
                        onPress={() => navigation.navigate('ChartDetailComponent', { item: item })}
                        style={{
                            marginRight: 10,
                            width: 150,
                            justifyContent: 'center',
                        }}>
                        <Image
                            source={{ uri: item.image }}
                            style={{ width: 130, height: 130 }}
                        />
                        <Text style={{
                        }}> {item.description} </Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}