// import * as React from 'react';
// import { useState } from 'react';
// import { View, Text, Image, TouchableOpacity, Modal, StyleSheet, Animated, Switch, useColorScheme, StatusBar } from 'react-native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createStackNavigator } from '@react-navigation/stack';
// import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
// import Ionicons from 'react-native-vector-icons/Ionicons';

// import HomeStack from './src/screens/HomeTab/HomeStack';
// import SearchStack from './src/screens/SearchTab/SearchStack';
// import FeedStack from './src/screens/FeedTab/FeedStack';
// import LibraryStack from './src/screens/LibraryTab/LibraryStack';
// import LaunchScreen from './src/screens/LaunchScreen/LaunchScreen';

// import { MusicProvider } from './src/screens/HomeTab/Music/Music/MusicContext';


// import { initializeApp } from 'firebase/app';

// // Optionally import the services that you want to use
// import "firebase/auth";
// import "firebase/database";
// import "firebase/firestore";
// import "firebase/functions";
// import "firebase/storage";
// import { getDatabase, onValue, ref } from 'firebase/database';

// const Tab = createBottomTabNavigator();
// const Stack = createStackNavigator();

// function MainTabs({ toggleModal }) {
//   return (
//     <Tab.Navigator
//       screenOptions={({ route }) => ({
//         tabBarIcon: ({ focused, color, size }) => {
//           let iconName;

//           if (route.name === 'Home') {
//             iconName = focused ? 'home' : 'home-outline';
//           } else if (route.name === 'Search') {
//             iconName = focused ? 'search' : 'search-outline';
//           } else if (route.name === 'Feed') {
//             iconName = focused ? 'albums' : 'albums-outline';
//           } else if (route.name === 'Library') {
//             iconName = focused ? 'library' : 'library-outline';
//           }

//           return <Ionicons name={iconName} size={size} color={color} />;
//         },
//         tabBarActiveTintColor: '#58C8DE',
//         tabBarInactiveTintColor: 'gray',
//         headerShown: false,
//       })}
//     >
//       <Tab.Screen name="Home">
//         {props => <HomeStack {...props} toggleModal={toggleModal} />}
//       </Tab.Screen>
//       <Tab.Screen name="Search" component={SearchStack} />
//       <Tab.Screen name="Feed" component={FeedStack} />
//       <Tab.Screen name="Library" component={LibraryStack} />
//     </Tab.Navigator>
//   );
// }

// function App() {
//   const systemColorScheme = useColorScheme();
//   const [modalVisible, setModalVisible] = useState(false);
//   const [slideAnim] = useState(new Animated.Value(-300));
//   const [darkMode, setDarkMode] = useState(systemColorScheme === 'dark');
//   const [settingsVisible, setSettingsVisible] = useState(false);

//   const [data, setData] = useState(null);

//   React.useEffect(() => {
//     const firebaseConfig = {
//       apiKey: "AIzaSyDz9TVP4QBwbhJ2b_9wejhiDC4U5WgL1ZE",
//       authDomain: "my-project-efcdb.firebaseapp.com",
//       databaseURL: "https://my-project-efcdb-default-rtdb.asia-southeast1.firebasedatabase.app",
//       projectId: "my-project-efcdb",
//       storageBucket: "my-project-efcdb.firebasestorage.app",
//       messagingSenderId: "204850382133",
//       appId: "1:204850382133:web:1b551a5a7ebea37641b87c",
//       measurementId: "G-ZQG4D32969"
//     };

//     // Initialize Firebase
//     const app = initializeApp(firebaseConfig);
//     if (app) {
//       console.log('Firebase initialized');
//     }
//   }, [])


//   const toggleModal = () => {
//     if (modalVisible) {
//       Animated.timing(slideAnim, {
//         toValue: -300,
//         duration: 300,
//         useNativeDriver: true,
//       }).start(() => setModalVisible(false));
//     } else {
//       setModalVisible(true);
//       Animated.timing(slideAnim, {
//         toValue: 0,
//         duration: 300,
//         useNativeDriver: true,
//       }).start();
//     }
//   };

//   const toggleDarkMode = () => {
//     setDarkMode(!darkMode);
//   };

//   return (
//     <MusicProvider>
//     <NavigationContainer theme={darkMode ? DarkTheme : DefaultTheme}>
//       <Stack.Navigator screenOptions={{ headerShown: false }}>
//         <Stack.Screen name="Launch" component={LaunchScreen} />
//         <Stack.Screen name="MainTabs">
//           {props => <MainTabs {...props} toggleModal={toggleModal} />}
//         </Stack.Screen>
//       </Stack.Navigator>

//       <Modal transparent={true} visible={modalVisible} onRequestClose={toggleModal}>
//         <View style={styles.modalContainer}>
//           <Animated.View style={[styles.modalContent, { backgroundColor: darkMode ? '#333' : '#fff', transform: [{ translateX: slideAnim }] }]}>
//             <Text style={[styles.modalTitle, { color: darkMode ? '#fff' : '#000' }]}>Preferences</Text>
//             <View style={styles.optionsContainer}>
//               <TouchableOpacity onPress={() => setSettingsVisible(!settingsVisible)}>
//                 <Text style={[styles.optionText, { color: darkMode ? '#fff' : '#000' }]}>Settings</Text>
//               </TouchableOpacity>
//               {settingsVisible && (
//                 <View style={styles.dropdownContent}>
//                   <View style={styles.optionRow}>
//                     <Text style={[styles.optionText, { color: darkMode ? '#fff' : '#000' }]}>Dark mode</Text>
//                     <Switch value={darkMode} onValueChange={toggleDarkMode} />
//                   </View>
//                   <View style={styles.optionRow}>
//                     <Text style={[styles.optionText, { color: darkMode ? '#fff' : '#000' }]}>Auto update</Text>
//                     <Switch />
//                   </View>
//                 </View>
//               )}
//               <TouchableOpacity onPress={toggleModal}>
//                 <Text style={[styles.optionText, { color: darkMode ? '#fff' : '#000' }]}>Change avatar</Text>
//               </TouchableOpacity>
//               <TouchableOpacity onPress={toggleModal}>
//                 <Text style={[styles.optionText, { color: darkMode ? '#fff' : '#000' }]}>Upgrade</Text>
//               </TouchableOpacity>
//               <TouchableOpacity onPress={toggleModal}>
//                 <Text style={[styles.optionText, { color: darkMode ? '#fff' : '#000' }]}>Log out</Text>
//               </TouchableOpacity>
//             </View>
//             <TouchableOpacity onPress={toggleModal} style={styles.closeButton}>
//               <Text style={[styles.closeText, { color: darkMode ? '#333' : 'red' }]}>Close</Text>
//             </TouchableOpacity>
//           </Animated.View>
//         </View>
//       </Modal>

//       <StatusBar backgroundColor={darkMode ? '#121212' : '#fff'} barStyle={darkMode ? 'light-content' : 'dark-content'} />
//     </NavigationContainer>
//     </MusicProvider>
//   );
// }

// const styles = StyleSheet.create({
//   avatar: {
//     width: 40,
//     height: 40,
//     borderRadius: 20,
//     marginRight: 10,
//     marginBottom: 5,
//   },
//   modalContainer: {
//     flex: 1,
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     justifyContent: 'flex-start',
//   },
//   modalContent: {
//     padding: 20,
//     width: '70%',
//     height: '100%',
//   },
//   modalTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 15,
//   },
//   optionsContainer: {},
//   optionText: {
//     fontSize: 18,
//     paddingVertical: 10,
//     marginLeft: 10,
//     fontWeight: 'bold',
//   },
//   dropdownContent: {
//     paddingLeft: 20,
//   },
//   optionRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   closeButton: {
//     marginTop: 'auto',
//     paddingVertical: 10,
//     alignItems: 'center',
//     backgroundColor: '#f9f9f9',
//   },
//   closeText: {
//     fontSize: 18,
//   },
// });

// export default App;

import * as React from 'react';
import { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Modal, StyleSheet, Animated, Switch, StatusBar } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeStack from './src/screens/HomeTab/HomeStack';
import SearchStack from './src/screens/SearchTab/SearchStack';
import FeedStack from './src/screens/FeedTab/FeedStack';
import LibraryStack from './src/screens/LibraryTab/LibraryStack';
import LaunchScreen from './src/screens/LaunchScreen/LaunchScreen';

import { MusicProvider } from './src/screens/HomeTab/Music/Music/MusicContext';
import { ThemeProvider, ThemeContext } from './src/context/ThemeContext';

import { initializeApp } from 'firebase/app';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MainTabs({ toggleModal }) {
  return (
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
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home">
        {props => <HomeStack {...props} toggleModal={toggleModal} />}
      </Tab.Screen>
      <Tab.Screen name="Search" component={SearchStack} />
      <Tab.Screen name="Feed" component={FeedStack} />
      <Tab.Screen name="Library" component={LibraryStack} />
    </Tab.Navigator>
  );
}

function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [slideAnim] = useState(new Animated.Value(-300));
  const [settingsVisible, setSettingsVisible] = useState(false);

  React.useEffect(() => {
    const firebaseConfig = {
      apiKey: "AIzaSyDz9TVP4QBwbhJ2b_9wejhiDC4U5WgL1ZE",
      authDomain: "my-project-efcdb.firebaseapp.com",
      databaseURL: "https://my-project-efcdb-default-rtdb.asia-southeast1.firebasedatabase.app",
      projectId: "my-project-efcdb",
      storageBucket: "my-project-efcdb.firebasestorage.app",
      messagingSenderId: "204850382133",
      appId: "1:204850382133:web:1b551a5a7ebea37641b87c",
      measurementId: "G-ZQG4D32969"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    if (app) {
      console.log('Firebase initialized');
    }
  }, [])

  const toggleModal = () => {
    if (modalVisible) {
      Animated.timing(slideAnim, {
        toValue: -300,
        duration: 300,
        useNativeDriver: true,
      }).start(() => setModalVisible(false));
    } else {
      setModalVisible(true);
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  };

  return (
    <ThemeProvider>
      <MusicProvider>
        <ThemeContext.Consumer>
          {({ darkMode, toggleDarkMode }) => (
            <NavigationContainer theme={darkMode ? DarkTheme : DefaultTheme}>
              <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Launch" component={LaunchScreen} />
                <Stack.Screen name="MainTabs">
                  {props => <MainTabs {...props} toggleModal={toggleModal} />}
                </Stack.Screen>
              </Stack.Navigator>

              <Modal transparent={true} visible={modalVisible} onRequestClose={toggleModal}>
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
                            <Switch />
                          </View>
                        </View>
                      )}
                      <TouchableOpacity onPress={toggleModal}>
                        <Text style={[styles.optionText, { color: darkMode ? '#fff' : '#000' }]}>Change avatar</Text>
                      </TouchableOpacity>
                      <TouchableOpacity onPress={toggleModal}>
                        <Text style={[styles.optionText, { color: darkMode ? '#fff' : '#000' }]}>Upgrade</Text>
                      </TouchableOpacity>
                      <TouchableOpacity onPress={toggleModal}>
                        <Text style={[styles.optionText, { color: darkMode ? '#fff' : '#000' }]}>Log out</Text>
                      </TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress={toggleModal} style={styles.closeButton}>
                      <Text style={[styles.closeText, { color: darkMode ? '#333' : 'red' }]}>Close</Text>
                    </TouchableOpacity>
                  </Animated.View>
                </View>
              </Modal>

              <StatusBar backgroundColor={darkMode ? '#121212' : '#fff'} barStyle={darkMode ? 'light-content' : 'dark-content'} />
            </NavigationContainer>
          )}
        </ThemeContext.Consumer>
      </MusicProvider>
    </ThemeProvider>
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