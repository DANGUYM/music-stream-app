import React from 'react';
import { View, Image, Pressable, ImageBackground } from 'react-native';

export default function LaunchScreen({ navigation }) {
  return (
    <ImageBackground
      source={require('./../../../assets/img/Launch Screen - Premium/Image 112.png')}
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
    >
      <View style={{ alignItems: 'center' }}>
        <Image
          source={require('./../../../assets/img/Launch Screen - Premium/Image 113.png')}
          style={{
            width: 100,
            height: 100,
            marginBottom: 300,
          }}
        />
        <Image
          source={require('./../../../assets/img/Launch Screen - Premium/Welcome toPremium.png')}
          style={{
            marginBottom: 100,
          }}
        />
        <Pressable onPress={() => navigation.navigate('MainTabs')}>
          <Image source={require('./../../../assets/img/Launch Screen - Premium/Button 14.png')} />
        </Pressable>
      </View>
    </ImageBackground>
  );
}