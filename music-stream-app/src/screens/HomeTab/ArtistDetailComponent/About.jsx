import { View, Text, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TouchableOpacity } from 'react-native'

export default function About({ item }) {

    const content = item.about;
    const [showMore, setShowMore] = useState(false);

    useEffect(() => {
    }, []);

    return (
        <View style={{
            marginTop: 20,
        }} >
            <Text style={{
                fontSize: 20,
                fontWeight: 'bold',
                marginBottom: 10
            }}>About</Text>

            <View>
                <View>
                    <Image source={{ uri: item.image }} style={{
                        width: "100%",
                        height: 200,
                    }} />
                </View>
                <Text style={{
                    marginTop: 10,
                    color: 'gray',
                }}
                    numberOfLines={showMore ? 0 : 4}
                >
                    {content}
                </Text>

                <TouchableOpacity
                    onPress={() => setShowMore(!showMore)}
                >
                    <Text style={{
                        textAlign: 'center',
                        color: 'blue',
                        marginTop: 10,
                    }}
                    >
                        {showMore ? 'View less' : 'View more'}
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}