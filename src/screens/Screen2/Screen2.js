import { StyleSheet, TextInput, SafeAreaView,ScrollView,ImageBackground, Dimensions, ScroageBackground, Image, TouchableOpacity, Text, View } from 'react-native'
import React, { useState } from 'react';

const { height, width } = Dimensions.get('window');
const Screen2 = () => {

  const [email, SetEmail] = useState('');
  const [errorEmail, SetErrorEmail] = useState(null);

  const [password, SetPassword] = useState('');
  const [errorPassword, SetErrorPassword] = useState(null);

  const emailValidate = (email) => {
    var Regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email === '' || email === undefined || email === null) {
      SetErrorEmail('*Please enter Email');
    }
    else if (!Regex.test(email)) {
      SetErrorEmail('*Please enter valid Email');
    }
    else {
      SetErrorEmail(null);
    }
  };
  const passwordValidte = (password) => {
    var Regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (password === '' || password === undefined || password === null) {
      SetErrorPassword('*Please enter valid Password');
    }
    else if (!Regex.test(password)) {
      SetErrorPassword('*Please enter valid Password');
    }
    else {
      SetErrorPassword(null)
    }
  };
  const validate = () => {
    let flag = true;
    if (email === '' || email === undefined || email === null) {
      SetErrorEmail('*Please enter Email');
      flag = false;
    }
    if (password === '' || password === undefined || password === null) {
      SetErrorPassword('*Please enter Password');
      flag = false;
    }
    return flag;
  };
  const onSubmit = () => {
    if (validate()) {
      alert('Successfully logined');
    }
    else {
      alert('Something went wrong');
    }
  };
  return (

    <ScrollView>
      <View style={styles.container}>
        <ImageBackground source={require('../../assets/image/bck_img.jpeg')}
          style={{ height: height * 1, width: width * 1, resize: 'cover' }}>
          <View style={styles.lunigsa}>
            <Image source={require('../../assets/image/logo25.jpeg')}
              style={{ height: height * 0.15, width: width * 0.94, }}
            />
          </View>
          <View style={styles.content}>
            <View style={{
              height: height * 0.08,
              justifyContent: 'center'
            }}>
              <View style={styles.input}>
                <TextInput
                  style={{ fontSize: 19 }}
                  placeholder='First Name'
                  keyboardType='default'
                  maxLength={21}
                />
              </View>
            </View>
            <View style={{
              height: height * 0.08,
              justifyContent: 'center'
            }}>
              <View style={styles.input}>
                <TextInput
                  style={{ fontSize: 19 }}
                  placeholder='Surname'
                  keyboardType='default'
                  maxLength={21}
                />
              </View>
            </View>
            <View style={{
              height: height * 0.08,
              justifyContent: 'center'
            }}>
              <View style={styles.input}>
                <TextInput
                  style={{ fontSize: 21 }}
                  placeholder='Email'
                  keyboardType="email-address"
                  maxLength={21}
                  onChangeText={(text) => {
                    SetEmail(text), emailValidate(text)
                  }}
                />
              </View>
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
            <View style={{
              height: height * 0.08,
              justifyContent: 'center'
            }}>
              <View style={styles.wrap}>
                <View style={styles.num}>
                  <Text style={{ fontSize: 21 }}>+260</Text>
                </View>
                <View style={styles.icon}>
                  <TouchableOpacity>
                    <Image source={require('../../assets/image/dropicon.png')}
                      style={{ height: 13, width: 15 }}
                    />
                  </TouchableOpacity>
                </View>
                <View style={styles.phone}>
                  <TextInput
                    style={{ fontSize: 21 }}
                    placeholder='Phone number'
                    keyboardType='numeric'
                    maxLength={10}
                  />
                </View>
              </View>
            </View>
            <View style={{
              height: height * 0.08,
              justifyContent: 'center',
            }}>
              <View style={styles.input}>
                <View style={styles.merge}>
                  <View>
                    <TextInput
                      style={{ fontSize: 19, width: width * 0.650 }}
                      placeholder='Date of Birth'
                      keyboardType='numeric'
                      maxLength={15}
                    />
                  </View>
                  <View style={styles.calender}>
                    <TouchableOpacity>
                      <Image source={require('../../assets/image/calender.png')}
                        style={{ height: 25, width: 25, }}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
            <View style={{
              height: height * 0.08,
              justifyContent: 'center',
            }}>
              <View style={styles.input}>
                <View style={styles.merge}>
                  <View>
                    <TextInput
                      style={{ fontSize: 19, width: width * 0.650 }}
                      placeholder='Password'
                      keyboardType='default'
                      secureTextEntry={true}
                      maxLength={21}
                      onChangeText = {(text) => {
                        SetPassword(text), passwordValidte(text)
                      }}
                    />
                  </View>
                  {errorPassword !== null ? (
              <View
                style={{
                  height: '4%',
                  width: '80%',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}>
                <Text style={{ color: 'red', fontSize: 16 }}>{errorPassword}</Text>
              </View>
            ) : null}
                  <View style={styles.calender}>
                    <TouchableOpacity>
                      <Image source={require('../../assets/image/eye_icon.png')}
                        style={{ height: 25, width: 25, }}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>

            <View style={{
              height: height * 0.08,
              justifyContent: 'center',
            }}>
              <View style={styles.input}>
                <View style={styles.merge}>
                  <View>
                    <TextInput
                      style={{ fontSize: 19, width: width * 0.650 }}
                      placeholder='Conform Password'
                      keyboardType='default'
                      secureTextEntry={true}
                      maxLength={21}
                    />
                  </View>
                  <View style={styles.calender}>
                    <TouchableOpacity>
                      <Image source={require('../../assets/image/eye_icon.png')}
                        style={{ height: 25, width: 25, }}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
            <View style={{
              height: height * 0.1,
              justifyContent: 'center',
            }}>
              <View style={styles.btn}>
                <TouchableOpacity>
                  <Text style={{ fontSize: 21, color: 'white', fontWeight: '900' }}>Sign up</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{ height: height * 0.05, width: width * 0.85 }}>
              <Text style={{ fontSize: 16 }}>By clicking sign up you agree to the following </Text>
              <View style={{ flexDirection: 'row' }}>
                <View>
                  <Text style={{ fontSize: 15, color: '#1FCDCC', fontWeight: '600', marginHorizontal: 7 }}>Terms and conditions</Text>
                </View>
                <View>
                  <Text>and </Text>
                </View>
                <View>
                  <Text style={{ fontSize: 15, color: '#1FCDCC', fontWeight: '600', }}>Privacy and Policy</Text>
                </View>
              </View>

            </View>
          </View>
        </ImageBackground>
      </View>
    </ScrollView>

  )
};

export default Screen2;

const styles = StyleSheet.create({
  container: {
    height: height * 1,
    width: width * 1
  },
  lunigsa: {
    // backgroundColor:'yellow',
    height: height * 0.25,
    width: width * 0.95,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center'
  },
  content: {
    backgroundColor: '#F7F7F7',
    // backgroundColor: 'yellow',
    height: height * 0.73,
    width: width * 0.94,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30
  },
  input: {
    backgroundColor: '#FFFFFF',
    // backgroundColor: 'lightgrey',
    height: height * 0.07,
    width: width * 0.85,
    justifyContent: 'center',
    alignSelf: 'center',
    padding: 12,
    borderRadius: 41
  },
  wrap: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    height: height * 0.07,
    width: width * 0.85,
    borderRadius: 41
  },
  num: {
    // backgroundColor:'yellow',
    height: height * 0.07,
    width: width * 0.25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    // backgroundColor:'green',
    height: height * 0.07,
    width: width * 0.1,
    justifyContent: 'center',
    borderRightWidth: 9,
    borderRightColor: '#F7F7F7'
  },
  phone: {
    //  backgroundColor:'red',
    height: height * 0.07,
    width: width * 0.5,
    justifyContent: 'center',
    padding: 10
  },
  merge: {
    flexDirection: 'row',
    width: width * 0.85
  },
  btn: {
    backgroundColor: '#00C027',
    height: height * 0.08,
    width: width * 0.85,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
    borderRadius: 41
  }
});