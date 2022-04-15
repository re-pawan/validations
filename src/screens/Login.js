import { StyleSheet, TextInput, ScrollView, SafeAreaView, Dimensions, Image, TouchableOpacity, Text, View } from 'react-native'
import React, { useState } from 'react'
const { height, width } = Dimensions.get('window');



const Login = (props) => {
    const [email, SetEmail] = useState('');
    const [errorEmail, SetErrorEmail] = useState(null);

    const [password, SetPassword] = useState('');
    const [errorPassword, SetErrorPassword] = useState(null);

    const emailValidate = (email) => {
        var Regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (email === '' || email === undefined || email === null) {
            SetErrorEmail('Please enter Email');
        }
        else if (!Regex.test(email)) {
            SetErrorEmail("Please enter valid Email");
        }
        else {
            SetErrorEmail(null);
        }
    };

    const passwordValidte = (password) => {
        var Regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (password === '' || password === undefined || password === null) {
            SetErrorPassword('Please enter Password');
        }
        else if (!Regex.test(password)) {
            SetErrorPassword('Please enter valid Password');
        }
        else {
            SetErrorPassword(null);
        }
    };
    const validate = () => {
        const flag = true;
        if (email === '') {
            SetEmail('Please enter Email');
        }
        if (password === '') {
            SetErrorPassword('Please enter Password');
        }
        return flag;
    };

    const onSubmit = () => {
        if (validate()) {
        } else {
            alert('Something went wrong');
        }
    };

    return (
        <View style={styles.container}>
            <SafeAreaView>
                <ScrollView>
                    <View style={styles.arrow}>
                        <TouchableOpacity>
                            <Image
                                source={require('../assets/image/arrow.png')}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.logo}>
                        <Image
                            style={{ height: height * 0.25, width: width * 0.9, resizeMode: 'center' }}
                            source={require('../assets/image/Facebook-logo.png')}
                        />
                    </View>
                    <View style={styles.email_pass}>
                        <Text style={{ fontSize: 17 }}>Email</Text>
                    </View>
                    <View style={styles.textinput}>
                        <TextInput
                            style={{ fontSize: 17, color: 'grey', padding: 7 }}
                            placeholder='Enter your Email'
                            placeholderTextColor='blue'
                            keyboardType='email-address'
                            maxLength={51}
                            onChangeText={text => {
                                SetEmail(text), emailValidate(text);
                            }}
                        />
                    </View>
                    {errorEmail !== null ? (
                        <View
                            style={{
                                height: '4%',
                                width: '80%',
                                // backgroundColor: 'grey',
                                justifyContent: 'center',
                                alignItems:'center'
                            }}>
                            <Text style={{ color: 'red', fontSize: 16 }}>{errorEmail}</Text>
                        </View>
                    ) : null}
                    <View style={styles.email_pass}>
                        <Text style={{ fontSize: 17 }}>Password</Text>
                    </View>
                    <View style={styles.textinput}>
                        <TextInput
                            style={{ fontSize: 17, color: 'grey', padding: 7 }}
                            placeholder='Enter your Password'
                            placeholderTextColor='blue'
                            keyboardType='default'
                            secureTextEntry={true}
                            maxLength={21}
                            onChangeText={text => {
                                SetPassword(text), passwordValidte(text);
                            }}
                        />
                    </View>
                    {errorPassword !== null ? (
                        <View
                            style={{
                                height: '4%',
                                width: '80%',
                                // backgroundColor: 'grey',
                                justifyContent: 'center',
                                alignItems:'center'
                            }}>
                            <Text style={{ color: 'red', fontSize: 16 }}>{errorPassword}</Text>
                        </View>
                    ) : null}
                    <View style={styles.buton}>
                        <TouchableOpacity onLongPress={() => onSubmit()}>
                            <View style={styles.btn_design}>
                                <Text  style={{ fontSize: 17, fontWeight: 'bold', color: 'white' }}>LOGIN</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity>
                            <View style={styles.forgot}>
                                <Text style={{ fontSize: 17, color: 'blue' }}>Forgot Password ?</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.footer}>
                        <View style={styles.account}>
                            <TouchableOpacity>
                                <Text style={{ fontSize: 17, color: 'blue' }}>Already have an account ? </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.sign}>
                            <TouchableOpacity onPress={() => props.navigation.navigate('Sign')}>
                                <Text style={{ fontSize: 17, color: 'blue' }}>Sign Up</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView >
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        height: "100%",
        width: "100%",
        // backgroundColor: 'yellow'
    },
    arrow: {
        //    backgroundColor:'black',
        height: height * 0.1,
        width: width * 0.90,
        justifyContent: 'center',
        alignSelf: 'center'

    },
    logo: {
        //   backgroundColor:'red',
        alignItems: 'center',
        alignSelf: 'center'
    },
    email_pass: {
        //   backgroundColor:'red',
        height: height * 0.06,
        width: width * 0.9,
        justifyContent: 'center',
        alignSelf: 'center'
    },
    textinput: {
        //    backgroundColor:'green',
        height: height * 0.07,
        width: width * 0.9,
        justifyContent: 'center',
        alignSelf: 'center',
        borderWidth: 1,
        borderRadius: 7
    },
    buton: {
        //   backgroundColor:'grey',
        height: height * 0.09,
        width: width * 0.9,
        justifyContent: 'center',
        alignSelf: 'center',
    },
    btn_design: {
        backgroundColor: '#3366ff',
        height: height * 0.07,
        width: width * 0.37,
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        borderRadius: 7
    },
    forgot: {
        // backgroundColor:'grey',
        height: height * 0.05,
        width: width * 0.9,
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center'
    },
    footer: {
        // backgroundColor:'red',
        flexDirection: 'row',
        width: width * 0.9,
        alignSelf: 'center'
    },
    account: {
        height: height * 0.2,
        width: width * 0.7,
        justifyContent: 'center',
        alignItems: 'center'
    },
    sign: {
        // backgroundColor:'green',
        height: height * 0.2,
        width: width * 0.2,
        justifyContent: "space-around",
        alignItems: 'center'
    }
});