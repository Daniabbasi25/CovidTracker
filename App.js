import {
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
  Modal,
  Pressable,
  View,
  Dimensions,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import OnBoardingScreen from './src/Screens/onBoarding';
import Dashboard from './src/Screens/Dasboard';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/dist/AntDesign';

import {useDispatch, useSelector} from 'react-redux';
import {addCountry} from './redux/CountrySlice';

const {width, height} = Dimensions.get('window');
const App = () => {
  const [countries, setmyCountries] = useState([{}]);
  const [modalVisible, setModalVisible] = useState(false);
  const [isloading, setIsloading] = useState(true);

  const dispatch = useDispatch();
  const selectedC = useSelector(state => state.country.country);
  useEffect(() => {
    const getcountries = async () => {
      try {
        const response = await fetch(
          'https://disease.sh/v3/covid-19/countries',
        );
        const json = await response.json();

        const c = json.map(country => ({
          name: country.country,
          value: country.countryInfo.iso2,
          flag: country.countryInfo.flag,
        }));

        console.log('my data now', JSON.stringify(response));
        setmyCountries(c);
        console.log('ccccccccccc=', countries);
      } catch (error) {
        console.error(error);
      } finally {
        setIsloading(false);
      }
    };
    getcountries();
  }, []);
  const Stack = createNativeStackNavigator();
  const myIcon = (
    <Icon
      name={modalVisible ? 'caretup' : 'caretdown'}
      size={15}
      color="#000"
    />
  );
  const handlecountry = () => {
    console.log('cliecked');
    setModalVisible(true);
  };
  return (
    <NavigationContainer>
      {isloading ? (
        <ActivityIndicator />
      ) : (
        <View style={{flex: 1}}>
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
                    style={{width: 50, height: 50}}
                  />
                ),
                headerRight: () => (
                  <TouchableOpacity
                    onPress={() => handlecountry()}
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
                      source={{
                        uri: selectedC.flag,
                      }}
                      style={{width: 30, height: 30, borderRadius: 30}}
                    />
                    {myIcon}
                  </TouchableOpacity>
                ),
              }}
            />
          </Stack.Navigator>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
              setModalVisible(!modalVisible);
            }}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <FlatList
                  data={countries}
                  renderItem={item => (
                    <TouchableOpacity
                      onPress={() => {
                        dispatch(addCountry(item.item));
                        setModalVisible(false);
                      }}>
                      <View style={styles.countrtyItem}>
                        <Image
                          source={{
                            uri: item.item.flag,
                          }}
                          style={{width: 30, height: 30, borderRadius: 30}}
                        />
                        <Text style={styles.modalText}>{item.item.name}</Text>
                      </View>
                    </TouchableOpacity>
                  )}
                  style={{
                    height: height / 1.4,
                    width: width / 1.2,
                  }}
                />

                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setModalVisible(!modalVisible)}>
                  <Text style={styles.textStyle}>Cancel</Text>
                </Pressable>
              </View>
            </View>
          </Modal>
        </View>
      )}
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
    marginTop: 15,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },

  countrtyItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: width / 1.2,
    // height: '30%',
    backgroundColor: 'rgba(203,193,219,0.2)',
    borderWidth: 1,
    borderColor: 'rgba(203,193,219,0.2)',
    paddingHorizontal: 30,
    paddingVertical: 5,
    marginBottom: 20,
  },
  modalText: {
    // backgroundColor: 'red',
    width: '70%',
    color: '#000',
    fontSize: 15,
  },
});
