import {StyleSheet, Image, TouchableOpacity, Text} from 'react-native';
import React from 'react';
import OnBoardingScreen from './src/Screens/onBoarding';
import Dashboard from './src/Screens/Dasboard';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/dist/AntDesign';

const App = () => {
  const Stack = createNativeStackNavigator();
  const myIcon = <Icon name="caretdown" size={15} color="#000" />;
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="OnBoardingScreen">
        <Stack.Screen
          name="OnBoardingScreen"
          component={OnBoardingScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{
            headerBackVisible: false,
            headerShadowVisible: false,
            headerTitle: ' ',
            headerLeft: () => (
              <Image
                source={require('./accets/Images/Covid.png')}
                style={{width: 40, height: 40}}
              />
            ),
            headerRight: () => (
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  backgroundColor: 'rgba(203,193,219,0.2)',
                  paddingHorizontal: 5,
                  paddingVertical: 5,
                  borderRadius: 20,
                }}>
                <Image
                  source={{uri: 'https://disease.sh/assets/img/flags/am.png'}}
                  style={{width: 30, height: 30, borderRadius: 30}}
                />
                {myIcon}
              </TouchableOpacity>
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
