import { TextInput, FlatList, Image, SafeAreaView, TouchableOpacity, Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
const { height, width } = Dimensions.get('window');
const Screen3 = () => {
    const DATA = [
        {
            id: '1',
            image: require('../../assets/image/plumbing.jpeg'),
            title: 'Plumbing',
        },
        {
            id: '2',
            image: require('../../assets/image/painting.jpeg'),
            title: 'Painting',
        },
        {
            id: '3',
            image: require('../../assets/image/hammer.jpeg'),
            title: 'Hammer',
        },
        {
            id: '4',
            image: require('../../assets/image/electrial.jpeg'),
            title: 'Electrical',
        },
        {
            id: '5',
            image: require('../../assets/image/plumbing.jpeg'),
            title: 'Plumbing',
        },
        {
            id: '6',
            image: require('../../assets/image/painting.jpeg'),
            title: 'Painting',
        },
    ]
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.list}>
                        <View style={{ height: height * 0.085, }}>
                            <TouchableOpacity>
                                <Image style={{ height: height * 0.05, width: width * 0.11 }}
                                    source={require('../../assets/image/list.png')}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={{ height: height * 0.07, }}>
                            <TouchableOpacity>
                                <Image style={{ height: height * 0.05, width: width * 0.11 }}
                                    source={require('../../assets/image/arrow-reply.png')} />
                            </TouchableOpacity>
                        </View>

                    </View>
                    <View style={styles.heading}>
                        <TouchableOpacity>
                            <Image source={require('../../assets/image/header.jpeg')}
                                style={{ height: height * 0.13, width: width * 0.67 }}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.cart_bubble}>
                        <View style={{ height: height * 0.08, }}>
                            <TouchableOpacity>
                                <Image style={{ height: height * 0.05, width: width * 0.11 }}
                                    source={require('../../assets/image/cart.png')}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={{ height: height * 0.07, }}>
                            <TouchableOpacity>
                                <Image style={{ height: height * 0.05, width: width * 0.11 }}
                                    source={require('../../assets/image/bubbles.webp')} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View style={styles.content}>
                    <View style={styles.metral}>
                        <Text style={{ fontSize: 30 }}>Material</Text>
                    </View>
                    <View style={styles.search}>
                        <TouchableOpacity>
                            <Image style={{ height: height * 0.05, width: width * 0.11 }}
                                source={require('../../assets/image/search_icon.png')} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ alignItems: 'center', height: height / 1.5 }}>
                    <FlatList
                        numColumns={2}
                        data={DATA}
                        renderItem={({ item }) => (
                            <View style={styles.pic}>
                                <View style={styles.img_container}>
                                    <View style={{ width: width / 2 ,}}>
                                        <Image source={item.image} style={styles.img} />
                                    </View>
                                    <View style={{alignItems:'center'}}>
                                        <Text style={{ fontSize: 19 }}>{item.title} </Text>
                                    </View>
                                </View>
                            </View>
                        )}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
};

export default Screen3;

const styles = StyleSheet.create({
    container: {
        height: height * 1,
        width: width * 1,
        // backgroundColor: 'lightgrey'
    },
    header: {
        // backgroundColor: 'yellow',
        flexDirection: 'row',
        height: height * 0.17,
        width: width * 1,
        alignSelf: 'center',
        borderBottomWidth: 2,
        borderBottomColor: 'lightgrey'
    },
    list: {
        // backgroundColor: 'red',
        height: height * 0.17,
        width: width * 0.16,
        justifyContent: 'center',
        alignItems: 'center'
    },
    heading: {
        // backgroundColor: 'grey',
        width: width * 0.7,
        height: height * 0.14,
        justifyContent: 'center',
        alignItems: 'center',

    },
    cart_bubble: {
        // backgroundColor: 'green',
        height: height * 0.17,
        width: width * 0.14,
        justifyContent: 'center',
        alignItems: 'center'
    },
    content: {
        // backgroundColor: 'red',
        flexDirection: 'row',
        height: height * 0.1,
        width: width * 0.96,
        alignSelf: 'center'
    },
    metral: {
        // backgroundColor: 'yellow',
        height: height * 0.1,
        width: width * 0.35,
        justifyContent: 'center',
        // alignItems:'center'
    },
    search: {
        // backgroundColor: 'grey',
        height: height * 0.09,
        width: width * 0.58,
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: "flex-end",

    },
    pic: {
        backgroundColor: '#FFFFFF',
        // borderWidth: 1,
        height:height*0.25,
        width: width / 2.1,
        borderBottomLeftRadius: 35,
        borderBottomRightRadius: 35,
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35
    },
    img: {
        height: height * 0.2,
        width: width * 0.45,
    },
    img_container: {
        // backgroundColor:'red',
        width: '100%',
        justifyContent: 'center',
        alignContent: 'center',
       
    }
});