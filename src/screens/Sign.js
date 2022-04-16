import { StyleSheet, ScrollView, SafeAreaView, Dimensions, Image, TextInput, TouchableOpacity, Text, View } from 'react-native'
import React,{useState} from 'react'
const { height, width } = Dimensions.get('window');
const Sign = (props) => {

    const [email,SetEmail] = useState('');
    const [errorEmail,SetErrorEmail] = useState(null);

    const [password,SetPassword] = useState('');
    const [errorPassword,SetErrorPassword] = useState(null);

    const emailValidate = (email) => {
     var Regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
     if (email === '' || email === undefined || email === ""){
         SetErrorEmail('Please enter Email');
     }
     else if (!Regex.test(email)){
         SetErrorEmail('Please enter valid Email');
     }
     else{
         SetErrorEmail(null);
     }
    };
    const validate = () => {
      const flag = true;
      if (email === ''){
          SetEmail('Please enter Email')
      }
      return flag;
    };
    return (
        <View style={styles.container}>
            <SafeAreaView>
                <ScrollView>
                    <View style={styles.header}>
                        <Text
                            style={{ fontSize: 21, fontWeight: 'bold', color: 'blue' }}>Create a new account</Text>
                    </View>
                    <View style={styles.content}>
                        <View style={styles.name}>
                            <Text style={{ fontSize: 21 }}>First Name</Text>
                            <View style={styles.textinput}>
                                <TextInput
                                    style={{ fontSize: 17, color: 'blue' }}
                                    placeholder='Enter First Name'
                                    placeholderTextColor='gray'
                                    keyboardType="default"
                                    maxLength={21}
                                />
                            </View>
                        </View>
                        <View style={styles.name}>
                            <Text style={{ fontSize: 21 }}>Last Name</Text>
                            <View style={styles.textinput}>
                                <TextInput
                                    style={{ fontSize: 17, color: 'blue' }}
                                    placeholder='Enter First Name'
                                    placeholderTextColor='gray'
                                    keyboardType="default"
                                    maxLength={21}
                                />
                            </View>
                        </View>
                    </View>
                    <View style={{ height: height * 0.15, justifyContent: 'center' }}>
                        <View style={styles.topic}>
                            <Text style={{ fontSize: 21 }}>Email</Text>
                        </View>
                        <View style={styles.txtinput}>
                            <TextInput
                                style={{ fontSize: 17, color: 'blue' }}
                                placeholder='Enter your Email or Mobile No.'
                                placeholderTextColor='gray'
                                keyboardType="email-address"
                                maxLength={51}
                                onChangeText={text => {
                                    SetEmail(text), emailValidate(text);
                                }}
                            />
                        </View>
                        {errorEmail !== null ? (
                        <View
                            style={{
                                height: '17%',
                                width: '80%',
                                // backgroundColor: 'grey',
                                justifyContent: 'center',
                                alignItems:'center'
                            }}>
                            <Text style={{ color: 'red', fontSize: 16 }}>{errorEmail}</Text>
                        </View>
                    ) : null}
                    </View>
                    <View style={{ height: height * 0.15, justifyContent: 'center' }}>
                        <View style={styles.topic}>
                            <Text style={{ fontSize: 21 }}>Password</Text>
                        </View>
                        <View style={styles.txtinput}>
                            <TextInput
                                style={{ fontSize: 17, color: 'blue' }}
                                placeholder='Enter your Password'
                                placeholderTextColor='gray'
                                keyboardType="email-address"
                                maxLength={51}
                            />
                        </View>
                    </View>
                    <View style={{ height: height * 0.15, justifyContent: 'center' }}>
                        <View style={styles.topic}>
                            <Text style={{ fontSize: 21 }}>Birthday</Text>
                        </View>
                        <View style={styles.txtinput}>
                            <TextInput
                                style={{ fontSize: 17, color: 'blue' }}
                                placeholder='Enter your Birthday'
                                keyboardType="numbers-and-punctuation"
                                placeholderTextColor='gray'
                                maxLength={21}

                            />
                        </View>
                    </View>
                    <View style={{ height: height * 0.15, justifyContent: 'center' }}>
                        <View style={styles.topic}>
                            <Text style={{ fontSize: 21 }}>Gender</Text>
                        </View>
                        <View style={styles.txtinput}>
                            <TextInput
                                style={{ fontSize: 17, color: 'blue' }}
                                placeholder='Enter your Gender'
                                keyboardType="numbers-and-punctuation"
                                placeholderTextColor='gray'
                                maxLength={21}
                            />
                        </View>
                    </View>
                    <View style={styles.terms}>
                        <Text style={{ fontSize: 17 }}>By agreeing terms and policy, Please sign up </Text>
                    </View>
                    <View style={styles.buton}>
                        <TouchableOpacity>
                            <Text style={{ fontSize: 21, fontWeight: 800, color: 'white' }}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </SafeAreaView >
        </View>
    )
}

export default Sign

const styles = StyleSheet.create({
    container: {
        height: "100%",
        width: "100%",
        // backgroundColor: 'yellow'
    },
    header: {
        // backgroundColor: 'red',
        height: height * 0.07,
        width: width * 0.9,
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center'
    },
    content: {
        // backgroundColor: 'gray',  
        flexDirection: 'row',
        height: height * 0.1,
        width: width * 0.94,
        justifyContent: "space-around",
        alignSelf: 'center',
    },
    name: {
        // backgroundColor: 'green',
        height: height * 0.1,
        width: width * 0.45
    },

    textinput: {
        borderWidth: 1,
        borderRadius: 6,
        height: height * 0.06,
        padding: 5
    },
    topic: {
        // backgroundColor:'#ffffcc',
        height: height * 0.04,
        width: width * 0.92,
        justifyContent: 'center',
        alignSelf: 'center'
    },
    txtinput: {
        // backgroundColor:'red',
        height: height * 0.07,
        width: width * 0.92,
        justifyContent: 'center',
        alignSelf: 'center',
        borderWidth: 1,
        borderRadius: 6,
        padding: 5
    },
    terms: {
        height: height * 0.05,
        width: width * 0.92,
        justifyContent: 'center',
        alignSelf: 'center',
        // backgroundColor: 'red',
    },
    buton: {
        backgroundColor: 'green',
        height: height * 0.05,
        width: width * 0.4,
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        borderRadius: 7
    }
});