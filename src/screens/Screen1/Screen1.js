import { StyleSheet, TextInput, ScrollView, ImageBackground, Image, SafeAreaView, TouchableOpacity, Dimensions, Text, View } from 'react-native'
import React, { useState } from 'react'
const { height, width } = Dimensions.get('window');
const Screen1 = () => {
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
      let flag = true;
        if (email === '' || email === undefined || email === null) {
            SetErrorEmail('Please enter Email');
            flag = false;
        }
        if (password === '' || password === undefined|| password === null) {
            SetErrorPassword('Please enter Password');
            flag = false;
        }
        return flag;
    };

    const onSubmit = () => {
        if (validate()) {
            alert('Successfully Logined!')
            // props.navigation.navigate('Home')  
        } else {
            alert('Something went wrong');
        }
    };


    return (
        <ScrollView>
            <View style={styles.container}>
                <ImageBackground
                    source={require('../../assets/image/bck_img.jpeg')}
                    style={{ height: height * 1, width: width * 1, resizeMode: "cover" }}>
                    <View style={styles.logo}>
                        <View style={styles.lunigsa}>
                            <Image source={require('../../assets/image/logo25.jpeg')}
                                style={{ height: height * 0.1, width: width * 0.95, }}
                            />
                        </View>
                    </View>
                    <View style={{ height: height * 0.49, width: width * 1, justifyContent: 'center' }}>
                        <View style={styles.footer}>
                            <View style={styles.input}>
                                <TextInput
                                    style={{ fontSize: 21, }}
                                    placeholder='Email or Phone(with country code)'
                                    keyboardType="default"
                                    maxLength={51}
                                    autoCapitalize={'none'}
                                    onChangeText={(text) => {
                                        SetEmail(text), emailValidate(text)
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
                                        alignItems: 'center'
                                    }}>
                                    <Text style={{ color: 'red', fontSize: 16 }}>{errorEmail}</Text>
                                </View>
                            ) : null}
                            <View style={styles.space}>
                                <View style={styles.input}>
                                    <TextInput
                                        style={{ fontSize: 21 }}
                                        placeholder='Password'
                                        keyboardType="default"
                                        secureTextEntry={true}
                                        maxLength={21}
                                        onChangeText={(text) => {
                                            SetPassword(text), passwordValidte(text)
                                        }}
                                    />
                                </View>
                            </View>
                            {errorPassword !== null ? (
                                <View
                                    style={{
                                        height: '4%',
                                        width: '80%',
                                        // backgroundColor: 'grey',
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}>
                                    <Text style={{ color: 'red', fontSize: 16 }}>{errorPassword}</Text>
                                </View>
                            ) : null}
                            <View style={styles.space} >
                                <View style={styles.forgot_btn}>
                                    <TouchableOpacity>
                                        <Text style={{ fontSize: 17, fontWeight: "700", color: '#00C027', }}>Forgot Password?</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={styles.login_btn}>
                                <TouchableOpacity onPress={onSubmit}>
                                    <Text style={{ fontSize: 25, fontWeight: "700", color: 'white', }}>Login</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.content}>
                                <View style>
                                    <Text style={{ fontSize: 17, }}>Don't have an account?</Text>
                                </View>
                                <View>
                                    <TouchableOpacity>
                                        <Text style={{ fontSize: 17, fontWeight: "700", color: '#00C027', padding: 7 }}>Sign up</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                           
                        </View>
                    </View>
                </ImageBackground>
            </View>
        </ScrollView>
    )
}

export default Screen1;
const styles = StyleSheet.create({
    container: {
        height: "100%",
        width: "100%",
    },
    logo: {
        // backgroundColor: 'red',
        height: height * 0.51,
        width: width * 1,
    },
    lunigsa: {
        //    backgroundColor:'yellow',
        height: height * 0.25,
        width: width * 0.95,
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        
    },
    footer: {
        backgroundColor: '#F7F7F7',
        height: height * 0.47,
        width: width * 0.96,
        justifyContent: 'center',
        alignSelf: 'center',
        borderBottomLeftRadius: 35,
        borderBottomRightRadius: 35,
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35
    },
    space: {
        // backgroundColor: 'red',
        height: height * 0.1,
        width: width * 0.9,
        justifyContent: 'center',
        alignSelf: 'center'
    },
    input: {
        backgroundColor: '#FFFFFF',
        height: height * 0.08,
        width: width * 0.9,
        justifyContent: 'center',
        padding: 11,
        alignSelf: 'center',
        borderRadius: 25,
    },
    forgot_btn: {
        // backgroundColor:'white',
        justifyContent: 'center',
        alignSelf: "flex-end"
    },
    login_btn: {
        backgroundColor: '#00C027',
        height: height * 0.07,
        width: width * 0.9,
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        borderRadius: 35
    },
    content: {
        // backgroundColor:'yellow',
        flexDirection: 'row',
        height: height * 0.07,
        width: width * 0.9,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
});


