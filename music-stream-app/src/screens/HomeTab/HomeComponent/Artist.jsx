import { View, Text, Pressable, FlatList, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getDatabase, onValue, ref } from 'firebase/database';

export default function Artist({ navigation }) {

    const [artists, setArtists] = useState([
    ]);

    const readData = () => {
        const db = getDatabase();
        const dbRef = ref(db, 'artist');

        onValue(dbRef, (snapshot) => {
            const data = snapshot.val().filter(item => item !== undefined);
            setArtists(data);
        });
    };


    useEffect(() => {
        readData();
    }, [])
    return (
        <View style={{
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
                }}>Popular artists</Text>
                <Pressable>
                    <Text style={{
                        color: 'gray'
                    }}>See all</Text>
                </Pressable>
            </View>
            <FlatList
                data={artists}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, index }) => (
                    <View style={{
                        marginRight: 10,
                        width: 150,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('ArtistDetailComponent', { item: item })}
                            style={{
                                alignItems: 'center',
                            }}
                        >
                            <Image source={{ uri: item.image }}
                                style={{
                                    width: 150,
                                    height: 150,
                                    borderRadius: 100,
                                }}
                            />
                            <Text style={{
                                color: 'gray',
                                fontWeight: 'bold',
                                marginTop: 10
                            }}>{item.name}</Text>
                        </TouchableOpacity>
                        <Pressable style={{
                            backgroundColor: '#000000',
                            padding: 10,
                            borderRadius: 30,
                            marginTop: 10,
                            width: 100,

                        }}>
                            <Text style={{
                                color: '#ffffff',
                                textAlign: 'center',
                            }}>Follow</Text>
                        </Pressable>
                    </View>
                )}
            />
        </View>
    )
}