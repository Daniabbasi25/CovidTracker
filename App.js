import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import OnBoardingScreen from './src/Screens/onBoarding';
import Dashboard from './src/Screens/Dasboard';
const App = () => {
  return (
    <View style={{flex: 1}}>
      {/* <OnBoardingScreen /> */}
      <Dashboard />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
