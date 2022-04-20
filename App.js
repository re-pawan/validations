import { View, SafeAreaView, Text } from 'react-native'
import React from 'react'
import Screen1 from './src/screens/Screen1/Screen1'
import Screen2 from './src/screens/Screen2/Screen2'
import Screen3 from './src/screens/Screen3/Screen3'

const App = () => {
  return (
    <SafeAreaView>
      <View>
        {/* <Screen1/> */}
        {/* <Screen2/> */}
        <Screen3/>
      </View>
      </SafeAreaView>
  )
};

export default App