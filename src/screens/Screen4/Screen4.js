import { StyleSheet, FlatList, SafeAreaView, Image, Dimensions, TouchableOpacity, Text, View } from 'react-native';
import React from 'react';
const { height, width } = Dimensions.get('window');
const Screen4 = () => {
    const info = [
        {
            id: "0011",
            date: "5th April 2022,07:24:09",
            ip: "119.64.118.92",
            email: "akash.sharma@gmail.com",
            source: "App",
            activity: "Login 2FA Success",
        },
        {
            id: "0012",
            date: "5th April 2022,07:24:09",
            ip: "119.64.118.92",
            email: "akash.sharma@gmail.com",
            source: "App",
            activity: "Login 2FA Success",
        },
        {
            id: "0013",
            date: "5th April 2022,07:24:09",
            ip: "119.64.118.92",
            email: "akash.sharma@gmail.com",
            source: "App",
            activity: "Login 2FA Success",
        },
        {
            id: "0015",
            date: "5th April 2022,07:24:09",
            ip: "119.64.118.92",
            email: "akash.sharma@gmail.com",
            source: "App",
            activity: "Login 2FA Success",
        },
    ];

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.content}>
                    <View style={styles.arrow}>
                        <TouchableOpacity>
                            <Image source={require('../../assets/image/Arrow4.png')}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.history}>
                        <Text style={{ fontSize: 29, fontWeight: '600', color: 'white' }}>Login History</Text>
                    </View>
                </View>

                <View style={styles.wrap}>
                    <FlatList
                        data={info}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => (
                              <View style={{margin:4,backgroundColor:'#0c365a'}}>
                                <View style={styles.merge}>
                                    <View style={styles.topic}>
                                        <Text style={styles.topic_style}>DATE:</Text>
                                        <Text style={styles.topic_style}>IP:</Text>
                                        <Text style={styles.topic_style}>EMAIL/PHONE:</Text>
                                        <Text style={styles.topic_style}>SOURCE:</Text>
                                        <Text style={styles.topic_style}>ACTIVITY:</Text>
                                    </View>
                                    <View style={styles.description}>
                                        <Text style={{ fontSize: 17, color: '#537695' }}>{item.date}</Text>
                                        <Text style={{ fontSize: 17, color: '#537695' }}>{item.ip}</Text>
                                        <Text style={{ fontSize: 17, color: '#537695' }}>{item.email}</Text>
                                        <Text style={{ fontSize: 17, color: '#537695' }}>{item.source}</Text>
                                        <Text style={{ fontSize: 17, fontWeight: '500', color: '#23C8F3' }}>{item.activity}</Text>
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

export default Screen4

const styles = StyleSheet.create({
    container: {
        height: height * 1,
        width: width * 1,
        backgroundColor: '#05192B'
    },
    content: {
        // backgroundColor:'red',
        flexDirection: 'row',
        height: "10%",
        width: '100%',

    },
    arrow: {
        // backgroundColor:'green',
        width: '17%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    history: {
        // backgroundColor:'grey',
        width: '55%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    wrap: {
        backgroundColor: '#072642',
        height: height * 0.82,
        width: width * 1,
    },
    merge: {
        // backgroundColor:'red',
        flexDirection: 'row',
        height: height * 0.23,
        width: width * 0.9,
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'center',
    
    },
    topic: {
        // backgroundColor:'green',
        height: height * 0.17,
        width: width * 0.35,
        justifyContent: 'space-between'
    },
    description: {
        // backgroundColor:'green',
        height: height * 0.17,
        width: width * 0.55,
        justifyContent: 'space-between'
    },
    topic_style: {
        fontSize: 16,
        color: 'white'
    }
});