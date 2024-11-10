import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Feather from '@expo/vector-icons/Feather';

export default function Header({toggleModal}) {
    return (
        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
        }}>
            <View>
                <Image source={require('../../../img/Home - Audio Listing/Image 36.png')}
                    style={{
                        width: 40,
                        height: 40
                    }}
                />
            </View>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
            }}>
                <Feather name="bell" size={24} color="gray" style={{
                    marginRight: 20
                }} />
        <TouchableOpacity onPress={toggleModal}>
          <Image
            source={require('../../../img/Home - Audio Listing/Avatar 3.png')}
            style={{ width: 40, height: 40 }}
          />
        </TouchableOpacity>
            </View>
        </View>
    )
}