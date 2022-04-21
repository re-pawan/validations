import { StyleSheet, FlatList, SafeAreaView, Image, Dimensions, TouchableOpacity, Text, View } from 'react-native';
import React from 'react';
const { height, width } = Dimensions.get('window');
const Screen5 = () => {
    const info = [
        {
            id: "0011",
            amount:"20BNB",
            date: "29th April 2022,07:24:09",
            status: "Deposit Success",
            network: "BSC / ERC-20",
            wallet: "Spot",
            Address: "Self",
            transaction:"52525254598213631"
        },
        {
            id: "0012",
            amount:"20BNB",
            date: "29th April 2022,07:24:09",
            status: "Deposit Success",
            network: "BSC / ERC-20",
            wallet: "Spot",
            Address: "Self",
            transaction:"52525254598213631"
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
                        <Text style={{ fontSize: 24, fontWeight: '500', color: 'white' }}>Withdraw/Deposit History</Text>
                    </View>
                </View>

                <View style={styles.header}>
                    <View>
                        <TouchableOpacity>
                        <Text style={{color:'white',fontSize:21}}>Fiat</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                    <TouchableOpacity>
                        <Text style={{color:'#36b7e2',fontSize:21}}>Crypto</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{alignItems:"flex-end",height:height*0.08,justifyContent:'center'}}>
                    <Image style={{height:height*0.041,width:width*0.1,}} source={require('../../assets/image/torch.png')} />
                </View>

                <View style={styles.wrap}>
                    <FlatList
                        data={info}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => (
                              <View style={{margin:4,backgroundColor:'#0c365a'}}>
                                <View style={styles.merge}>
                                    <View style={styles.topic}>
                                        <Text style={styles.topic_style}>Amount:</Text>
                                        <Text style={styles.topic_style}>Date:</Text>
                                        <Text style={styles.topic_style}>Status:</Text>
                                        <Text style={styles.topic_style}>Network:</Text>
                                        <Text style={styles.topic_style}>Wallet:</Text>
                                        <Text style={styles.topic_style}>Address:</Text>
                                        <Text style={styles.topic_style}>Transaction ID:</Text>
                                    </View>
                                    <View style={styles.description}>
                                        <Text style={{ fontSize: 16, color: 'white' }}>{item.amount}</Text>
                                        <Text style={{ fontSize: 16, color: 'white' }}>{item.date}</Text>
                                        <Text style={{ fontSize: 16, color: '#36b7e2e' }}>{item.status}</Text>
                                        <Text style={{ fontSize: 16, color: 'white' }}>{item.network}</Text>
                                        <Text style={{ fontSize: 16,  color: 'white' }}>{item.wallet}</Text>
                                        <Text style={{ fontSize: 16, color: 'white' }}>{item.Address}</Text>
                                        <Text style={{ fontSize: 16,  color: 'white' }}>{item.transaction}</Text>
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

export default Screen5;

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
        width: width*0.2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    history: {
        // backgroundColor:'grey',
        width: '90%',
        justifyContent: 'center',
    
    },
    header:{
    //    backgroundColor:'gray',
       flexDirection:'row',
       justifyContent:'space-around',
       height:height*0.045,
       width:width*1,
       borderBottomWidth:2,
       borderBottomColor:'grey'
    },
    wrap: {
        backgroundColor: '#072642',
        height: height * 0.55,
        width: width * 1,
    },
    merge: {
        // backgroundColor:'red',
        flexDirection: 'row',
        height: height * 0.27,
        width: width * 0.9,
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'center',
    
    },
    topic: {
        height: height * 0.23,
        justifyContent: 'space-between'
    },
    description: {
        height: height * 0.23,
        justifyContent: 'space-between'
    },
    topic_style: {
        fontSize: 16,
        color: 'white'
    }
});