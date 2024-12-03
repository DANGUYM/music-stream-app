import { View, Text, FlatList, Image, ImageBackground, Modal, StyleSheet, Dimensions, Button, TextInput } from 'react-native'
import React, { useRef, useState,useContext } from 'react'
import Fontisto from '@expo/vector-icons/Fontisto';
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import Entypo from '@expo/vector-icons/Entypo';
import { Animated } from 'react-native';
import { ThemeContext } from '../../../context/ThemeContext';


export default function ListFeed() {

    const { darkMode } = useContext(ThemeContext);
    const [feeds, setFeeds] = useState([
        {
            id: 1,
            nameArtist: 'Jessica Gonzalez',
            time: '3d',
            image: require('../../../../assets/img/Feed - Audio Listing/Avatar 4.png'),
            imageBackground: require('../../../../assets/img/Feed - Audio Listing/Image 93.png'),
            title: 'FLOWER',
            views: '125',
            duration: '05:15',
            like: '20',
            comment: '3',
            share: '1',
        },
        {
            id: 2,
            nameArtist: 'William King',
            time: '5d',
            image: require('../../../../assets/img/Feed - Audio Listing/Avatar 5.png'),
            imageBackground: require('../../../../assets/img/Feed - Audio Listing/Image 94.png'),
            title: 'Me',
            views: '245',
            duration: '05:15',
            like: '45',
            comment: '9',
            share: '2',
        },
    ])

    const [modalVisible, setModalVisible] = useState(false);
    const [slideAnim] = useState(new Animated.Value(1000));

    const toggleModal = () => {
        if (modalVisible) {
            Animated.timing(slideAnim, {
                toValue: 1000,
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
        <View style={{
            marginTop: 20,
            flex: 1,
        }}>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={feeds}
                renderItem={({ item }) => (
                    <View style={{
                        marginBottom: 40,
                    }}>
                        <View style={{
                            flexDirection: 'row',
                        }}>
                            <Image source={item.image} />
                            <View style={{
                                marginLeft: 10,
                            }}>
                                <Text style={{
                                    fontWeight: 'bold',
                                    color: darkMode ? '#fff' : '#000',
                                }}>{item.nameArtist} <Fontisto name="checkbox-active" size={10} color="blue" /></Text>
                                <Text style={{
                                    color: 'gray',
                                }}>Posted a track {item.time}</Text>
                            </View>
                        </View>
                        <ImageBackground source={item.imageBackground}
                            style={{
                                width: '100%',
                                height: 350,
                                marginTop: 15,
                                borderRadius: 10,
                                justifyContent: 'flex-end',
                            }}
                        >
                            <View style={{
                                padding: 20,
                                backgroundColor: 'rgba(0,0,0,0.3)',
                            }}>
                                <Text style={{
                                    color: 'white',
                                    fontSize: 20,
                                    fontWeight: 'bold',
                                }}>{item.title}</Text>
                                <View style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                }}>
                                    <Text style={{
                                        color: 'white',
                                    }}> {item.nameArtist} </Text>
                                    <Text style={{
                                        color: 'white',
                                        textAlign: 'center',
                                    }}><AntDesign name="caretright" size={15} color="white" /> {item.views} {item.duration} </Text>
                                </View>
                            </View>
                        </ImageBackground>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginTop: 10,
                        }}>
                            <View style={{
                                flexDirection: 'row',
                                gap: 10,
                                alignItems: 'center',
                            }}>
                                <AntDesign name="hearto" size={18} color="gray" />
                                <Text style={{
                                    color: "gray",
                                    fontSize: 16,
                                }}> {item.like} </Text>
                                <Ionicons name="chatbox-ellipses-outline" size={18} color="gray"
                                    onPress={toggleModal}
                                />


                                <Modal transparent={true} visible={modalVisible} onRequestClose={toggleModal}>
                                    <View style={{
                                        flex: 1,
                                        justifyContent: 'flex-end',
                                        alignItems: 'center',
                                        backgroundColor: 'rgba(0,0,0,0.5)',
                                    }}>
                                        <Animated.View style={{
                                            transform: [{ translateY: slideAnim }],
                                            backgroundColor: 'white',
                                            width: '100%',
                                            height: '70%',
                                            padding: 20,
                                            backgroundColor: darkMode ? '#121212' : '#fff'
                                        }}>
                                            <View style={{
                                                flexDirection: 'row',
                                                justifyContent: 'space-between',
                                            }}>
                                                <Text style={{
                                                    fontSize: 20,
                                                    fontWeight: 'bold',
                                                    color: darkMode ? '#fff' : '#000'
                                                }}>3 comments </Text>
                                                <AntDesign name="down" size={24} color="gray"
                                                    onPress={toggleModal}
                                                />
                                            </View>
                                            <View style={{
                                                marginVertical: 20,
                                                flexDirection: 'row',
                                                alignItems: 'center',
                                            }}>
                                                <Image source={require('../../../../assets/img/Feed - Comment on an Audio/Avatar 8.png')}
                                                    style={{
                                                        width: 50,
                                                        height: 50,
                                                        marginRight: 10,
                                                    }}
                                                />
                                                <View style={{
                                                    flexDirection: 'row',
                                                    justifyContent: 'space-between',
                                                    width: '80%',
                                                }}>
                                                    <View>
                                                        <View style={{ flexDirection: 'row' }}>
                                                            <Text style={{
                                                                fontWeight: 'bold',
                                                                color: darkMode ? '#fff' : '#000',
                                                            }}>Sally Rooney</Text>
                                                            <Text
                                                            style={{color: darkMode ? '#fff' : '#000'}}
                                                            > Do duis cul </Text>
                                                        </View>
                                                        <View style={{ flexDirection: 'row' }}>
                                                            <Text style={{
                                                                color: 'gray',
                                                            }}>17h </Text>
                                                            <Text style={{
                                                                color: 'blue',
                                                                marginHorizontal: 10,
                                                            }}>1 like</Text>
                                                            <Text style={{
                                                                color: 'gray',
                                                            }}> Reply</Text>
                                                        </View>


                                                    </View>
                                                    <AntDesign name="like2" size={20} color="blue" />
                                                </View>

                                            </View>
                                            <View>
                                                <View style={{
                                                    marginVertical: 20,
                                                    flexDirection: 'row',
                                                    alignItems: 'center',
                                                }}>
                                                    <Image source={require('../../../../assets/img/Feed - Comment on an Audio/Avatar 9.png')}
                                                        style={{
                                                            width: 50,
                                                            height: 50,
                                                            marginRight: 10,
                                                        }}
                                                    />
                                                    <View>
                                                        <View style={{
                                                            flexDirection: 'row',
                                                            justifyContent: 'space-between',
                                                            width: '90%',
                                                        }}>
                                                            <View>
                                                                <View style={{ flexDirection: 'row' }}>
                                                                    <Text style={{
                                                                        fontWeight: 'bold',
                                                                        color: darkMode ? '#fff' : '#000',
                                                                    }}>Jason</Text>
                                                                    <Text style={{
                                                                        color: darkMode ? '#fff' : '#000',
                                                                    }}
                                                                    > Minim magna exc</Text>
                                                                </View>
                                                                <View style={{ flexDirection: 'row' }}>
                                                                    <Text style={{
                                                                        color: 'gray',
                                                                    }}>48m </Text>
                                                                    <Text style={{
                                                                        color: 'gray',
                                                                        marginHorizontal: 10,
                                                                    }}>1 like</Text>
                                                                    <Text style={{
                                                                        color: 'gray',
                                                                    }}> Reply</Text>
                                                                </View>
                                                            </View>
                                                            <AntDesign name="like2" size={20} color="gray" />
                                                        </View>
                                                    </View>
                                                </View>
                                                <View style={{
                                                    flexDirection: 'row',
                                                    alignItems: 'center',
                                                    marginLeft: 60,
                                                }}>
                                                    <Image source={require('../../../../assets/img/Feed - Comment on an Audio/Avatar 9.png')}
                                                        style={{
                                                            width: 30,
                                                            height: 30,
                                                            marginRight: 10,
                                                        }}
                                                    />
                                                    <View>
                                                        <View style={{
                                                            flexDirection: 'row',
                                                            justifyContent: 'space-between',
                                                            width: '92%',
                                                        }}>
                                                            <View>
                                                                <View style={{ flexDirection: 'row' }}>
                                                                    <Text style={{
                                                                        fontWeight: 'bold',
                                                                        color: darkMode ? '#fff' : '#000',
                                                                    }}>Michael Key</Text>
                                                                    <Text style={{
                                                                        color: 'blue',
                                                                    }}>@ Jason Smitth</Text>
                                                                    <Text style={{
                                                                        color: darkMode ? '#fff' : '#000',
                                                                    }}
                                                                    
                                                                    > Deserunt</Text>

                                                                </View>
                                                                <Text style={{
                                                                    color: darkMode ? '#fff' : '#000',
                                                                }}
                                                                
                                                                > offcia consectetur adipi</Text>
                                                                <View style={{ flexDirection: 'row' }}>
                                                                    <Text style={{
                                                                        color: 'gray',
                                                                    }}>40m </Text>
                                                                    <Text style={{
                                                                        color: 'gray',
                                                                        marginHorizontal: 10,
                                                                    }}>2 like</Text>
                                                                    <Text style={{
                                                                        color: 'gray',
                                                                    }}> Reply</Text>
                                                                </View>
                                                            </View>
                                                            <AntDesign name="like2" size={20} color="gray" />
                                                        </View>
                                                    </View>
                                                </View>
                                            </View>

                                            <View>
                                                <View style={{
                                                    marginVertical: 20,
                                                    flexDirection: 'row',
                                                    alignItems: 'center',
                                                }}>
                                                    <Image source={require('../../../../assets/img/Feed - Comment on an Audio/Avatar 11.png')}
                                                        style={{
                                                            width: 50,
                                                            height: 50,
                                                            marginRight: 10,
                                                        }}
                                                    />
                                                    <View>
                                                        <View style={{
                                                            flexDirection: 'row',
                                                            justifyContent: 'space-between',
                                                            width: '90%',
                                                        }}>
                                                            <View>
                                                                <View style={{ flexDirection: 'row' }}>
                                                                    <Text style={{
                                                                        fontWeight: 'bold',
                                                                        color: darkMode ? '#fff' : '#000',
                                                                    }}>Liam Pham</Text>
                                                                    <Text style={{
                                                                        color: darkMode ? '#fff' : '#000',
                                                                    }}
                                                                    
                                                                    > Commodo</Text>
                                                                </View>
                                                                <View style={{ flexDirection: 'row' }}>
                                                                    <Text style={{
                                                                        color: 'gray',
                                                                    }}>48m </Text>
                                                                    <Text style={{
                                                                        color: 'gray',
                                                                        marginHorizontal: 10,
                                                                    }}>1 like</Text>
                                                                    <Text style={{
                                                                        color: 'gray',
                                                                    }}> Reply</Text>
                                                                </View>
                                                            </View>
                                                            <AntDesign name="like2" size={20} color="gray" />
                                                        </View>
                                                    </View>
                                                </View>
                                                <View style={{
                                                    flexDirection: 'row',
                                                    alignItems: 'center',
                                                    marginLeft: 60,
                                                }}>
                                                    <Image source={require('../../../../assets/img/Feed - Comment on an Audio/Avatar 9.png')}
                                                        style={{
                                                            width: 30,
                                                            height: 30,
                                                            marginRight: 10,
                                                        }}
                                                    />
                                                    <View>
                                                        <View style={{
                                                            flexDirection: 'row',
                                                            justifyContent: 'space-between',
                                                            width: '92%',
                                                        }}>
                                                            <View>
                                                                <View style={{ flexDirection: 'row' }}>
                                                                    <Text style={{
                                                                        fontWeight: 'bold',
                                                                        color: darkMode ? '#fff' : '#000',
                                                                    }}>Kiran Glaucus</Text>
                                                                    <Text style={{
                                                                        color: 'blue',
                                                                    }}
                                                                    
                                                                    > Esse consequat cillum</Text>

                                                                </View>
                                                                <View style={{ flexDirection: 'row' }}>
                                                                    <Text style={{
                                                                        color: 'gray',
                                                                    }}>40m </Text>
                                                                    <Text style={{
                                                                        color: 'gray',
                                                                        marginHorizontal: 10,
                                                                    }}>2 like</Text>
                                                                    <Text style={{
                                                                        color: 'gray',
                                                                    }}> Reply</Text>
                                                                </View>
                                                            </View>
                                                            <AntDesign name="like2" size={20} color="gray" />
                                                        </View>
                                                    </View>

                                                </View>
                                                <Text style={{
                                                    marginLeft: 60,
                                                    marginTop: 13,
                                                    color: 'blue',
                                                }}>View 10 more replies</Text>
                                            </View>

                                            <View style={{
                                                flexDirection: 'row',
                                                marginTop: 20,
                                            }}>
                                                <Image source={require('../../../../assets/img/Feed - Comment on an Audio/Avatar 13.png')} />
                                                <View style={{
                                                    flexDirection: 'row',
                                                    marginLeft: 10,
                                                    borderWidth: 1,
                                                    borderRadius: 30,
                                                    borderColor: 'gray',
                                                    width: '85%',
                                                }}>
                                                    <TextInput placeholder="Write a comment..."
                                                    placeholderTextColor={darkMode ? '#fff' : 'gray'}
                                                        style={{
                                                            padding: 10,
                                                            
                                                        }}
                                                    />
                                                </View>
                                            </View>
                                        </Animated.View>
                                    </View>
                                </Modal>
                                <Text style={{
                                    color: "gray",
                                    fontSize: 16,
                                }}> {item.comment} </Text>
                                <AntDesign name="reload1" size={18} color="gray" />
                                <Text style={{
                                    color: "gray",
                                    fontSize: 16,
                                }}> {item.share} </Text>
                            </View>

                            <Entypo name="dots-three-horizontal" size={24} color="gray" />
                        </View>
                    </View>
                )}
            />
        </View>
    )
}





