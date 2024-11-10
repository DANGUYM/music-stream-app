import React from 'react';
import { View, Text, TouchableOpacity} from 'react-native';

function SearchStack({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Search Screen</Text>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>Click me</Text>
      </TouchableOpacity>
    </View>
  );
}

export default SearchStack;