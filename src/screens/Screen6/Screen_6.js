import { StyleSheet, FlatList, SafeAreaView, Image, Dimensions, TouchableOpacity, Text, View } from 'react-native';
import React from 'react';
const { height, width } = Dimensions.get('window');

const Screen_6 = () => {
    const info = [
        {
            id: "0011",
            email: "absssc@gmail.com",
            date: "Thu.Oct 26, 2021",
    
        },
        {
            id: "0012",
            email: "abc@gmafgfdgil.com",
            date: "Thu.Oct 26, 2021",
    
        },
        {
            id: "0013",
            email: "absssssssc@gmail.com",
            date: "Thu.Oct 26, 2021",
    
        },
        {
            id: "0014",
            email: "abc@ssssgmail.com",
            date: "Thu.Oct 26, 2021",
    
        },
        {
            id: "0015",
            email: "abcas@gmail.com",
            date: "Thu.Oct 26, 2021",
    
        },
        {
            id: "0016",
            email: "abc@gmail.com",
            date: "Thu.Oct 26, 2021",
    
        },
        {
            id: "0017",
            email: "abdddc@gmail.com",
            date: "Thu.Oct 26, 2021",
    
        },
        {
            id: "0018",
            email: "abc@sssssgmail.com",
            date: "Thu.Oct 26, 2021",
    
        }
       ]
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
                        <Text style={{ fontSize: 21, fontWeight: '500', color: 'white' }}>Referred Details</Text>
                    </View>
                </View>

                <View style={styles.header}>
                    <View>
                        <TouchableOpacity>
                            <Text style={{ color: 'white', fontSize: 19 }}>Referral History</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity>
                            <Text style={{ color: '#36b7e2', fontSize: 19 }}>Referred Friends</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                

                <View style={styles.wrap}>
                    <FlatList
                        data={info}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => (
                            <View style={{ margin: 4, backgroundColor: '#0c365a',margin:6 }}>
                                <View style={styles.merge}>
                                    <View style={styles.topic}>
                                        <Text style={styles.topic_style}>Email:</Text>
                                        <Text style={styles.topic_style}>Date:</Text>     
                                    </View>
                                    <View style={styles.description}>
                                        <Text style={{ fontSize: 16, color: 'white',margin:6 }}>{item.email}</Text>
                                        <Text style={{ fontSize: 16, color: 'white',margin:6 }}>{item.date}</Text>
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

export default Screen_6;

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
        width: width * 0.2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    history: {
        // backgroundColor:'grey',
        width: '90%',
        justifyContent: 'center',

    },
    header: {
        //    backgroundColor:'gray',
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: height * 0.045,
        width: width * 1,
        borderBottomWidth: 2,
        borderBottomColor: 'grey'
    },
    wrap: {
        // backgroundColor: '#072642',
        height: height * 0.77,
        width: width * 0.92 ,
        alignSelf:'center',
    },
    topic_style:{
        fontSize:16,
        color:'white',
        margin:6
    },
    merge:{
    //  backgroundColor:'red',
     flexDirection:'row',
     height:height*0.08,
     width:width*0.9,
     
    },
    topic:{
        // backgroundColor:'green',
        height:height*0.08,
        width:width*0.3,
        justifyContent:"center",
        alignItems:'center'
    },
    description:{
        // backgroundColor:'gray',
        height:height*0.08,
        width:width*0.75,
        justifyContent:"center",
        alignItems:"center"
    }
   
});