import { StyleSheet, SafeAreaView,Dimensions, Image, TouchableOpacity, Text, View } from 'react-native'
import React from 'react'
const {height,width} = Dimensions.get('window');
const Sign = (props) => {
    return (
        <View style={styles.container}>
            <SafeAreaView>
                <View>
                    <TouchableOpacity onPress={() => props.navigation.navigate('Login')}>
                        <Image
                            source={require('../assets/image/arrow.png')}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.buton}>
                    <TouchableOpacity>
                        <Text>Go Back</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView >
        </View>
    )
}

export default Sign

const styles = StyleSheet.create({
  container:{
      height:height*1,
      width:width*1
  },
  buton:{
      backgroundColor:'green',
      height:height*0.09,
      width:width*0.5,
      justifyContent:'center',
      alignSelf:'center',
      alignItems:'center'
  }
});