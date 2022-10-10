import {View, Text, Image, StatusBar, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './styles';
import Icon from 'react-native-vector-icons/dist/AntDesign';

const OnBoardingScreen = ({navigation}) => {
  const myIcon = <Icon name="arrowright" size={20} color="#fff" />;

  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor={'#CFE3FC'} barStyle="dark-content" />
      <View style={styles.imageView}>
        <Image
          source={require('../../../accets/Images/Illustration.png')}
          style={styles.mainImage}
        />
      </View>
      <View style={styles.animatedBox}>
        <Text style={styles.heading}>Be aware Stay healthy</Text>
        <Text style={styles.subHeading}>
          Welcome to COVID-19 information portal.
        </Text>
        <View style={styles.buttonContainer}>
          <Text
            style={{
              color: 'rgba(0, 0, 0, 0.6)',
              fontSize: 15,
              fontWeight: '600',
            }}>
            GET STARTED
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
            <Text style={styles.arrowButton}>{myIcon}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default OnBoardingScreen;
