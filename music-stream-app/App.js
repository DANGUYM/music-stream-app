
import * as React from 'react';
import { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Modal, StyleSheet, Animated, Switch, useColorScheme } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from './src/screens/HomeScreen';
import SearchScreen from './src/screens/SearchScreen';
import FeedScreen from './src/screens/FeedScreen';
import LibraryScreen from './src/screens/LibraryScreen';

const Tab = createBottomTabNavigator();

function App() {
  const systemColorScheme = useColorScheme(); // Hook to get system color scheme
  const [modalVisible, setModalVisible] = useState(false);
  const [slideAnim] = useState(new Animated.Value(-300)); // Initial position off-screen to the left
  const [darkMode, setDarkMode] = useState(systemColorScheme === 'dark'); // Initialize dark mode based on system settings
  const [settingsVisible, setSettingsVisible] = useState(false); // Toggle dropdown

  const toggleModal = () => {
    if (modalVisible) {
      Animated.timing(slideAnim, {
        toValue: -300, // Slide out to left
        duration: 300,
        useNativeDriver: true,
      }).start(() => setModalVisible(false));
    } else {
      setModalVisible(true);
      Animated.timing(slideAnim, {
        toValue: 0, // Slide in to the screen
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <NavigationContainer theme={darkMode ? DarkTheme : DefaultTheme}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Search') {
              iconName = focused ? 'search' : 'search-outline';
            } else if (route.name === 'Feed') {
              iconName = focused ? 'albums' : 'albums-outline';
            } else if (route.name === 'Library') {
              iconName = focused ? 'library' : 'library-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#58C8DE',
          tabBarInactiveTintColor: 'gray',
          headerRight: () => {
            if (route.name === 'Home') {
              return (
                <TouchableOpacity onPress={toggleModal}>
                  <Image
                    source={require('./src/logo/logo2.png')}
                    style={styles.avatar}
                  />
                </TouchableOpacity>
              );
            }
            return null;
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="Feed" component={FeedScreen} />
        <Tab.Screen name="Library" component={LibraryScreen} />
      </Tab.Navigator>

      {/* Modal for options */}
      <Modal
        transparent={true}
        visible={modalVisible}
        onRequestClose={toggleModal}
      >
        <View style={styles.modalContainer}>
          <Animated.View style={[styles.modalContent, { backgroundColor: darkMode ? '#333' : '#fff', transform: [{ translateX: slideAnim }] }]}>
            <Text style={[styles.modalTitle, { color: darkMode ? '#fff' : '#000' }]}>Preferences</Text>
            <View style={styles.optionsContainer}>
              <TouchableOpacity onPress={() => setSettingsVisible(!settingsVisible)}>
                <Text style={[styles.optionText, { color: darkMode ? '#fff' : '#000' }]}>Settings</Text>
              </TouchableOpacity>
              {settingsVisible && (
                <View style={styles.dropdownContent}>

                  <View style={styles.optionRow}>
                    <Text style={[styles.optionText, { color: darkMode ? '#fff' : '#000' }]}>Dark mode</Text>
                    <Switch value={darkMode} onValueChange={toggleDarkMode} />
                  </View>

                  <View style={styles.optionRow}>
                    <Text style={[styles.optionText, { color: darkMode ? '#fff' : '#000' }]}>Auto update</Text>
                    <Switch/>
                  </View>

                </View>
              )}
              <TouchableOpacity onPress={() => { /* Handle */ toggleModal(); }}>
                <Text style={[styles.optionText, { color: darkMode ? '#fff' : '#000' }]}>Change avatar</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => { /* Handle */ toggleModal(); }}>
                <Text style={[styles.optionText, { color: darkMode ? '#fff' : '#000' }]}>Upgrade</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => { /* Handle */ toggleModal(); }}>
                <Text style={[styles.optionText, { color: darkMode ? '#fff' : '#000' }]}>Log out</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={toggleModal} style={styles.closeButton}>
              <Text style={[styles.closeText, { color: darkMode ? '#333' : 'red' }]}>Close</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </Modal>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
    marginBottom: 5,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-start',
  },
  modalContent: {
    padding: 20,
    width: '70%',
    height: '100%',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  optionsContainer: {},
  optionText: {
    fontSize: 18,
    paddingVertical: 10,
    marginLeft: 10,
    fontWeight: 'bold',

  },
  dropdownContent: {
    paddingLeft: 20,
  },
  optionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  closeButton: {
    marginTop: 'auto',
    paddingVertical: 10,
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
  },
  closeText: {
    fontSize: 18,
  },
});

export default App;
