import {
  View,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import {LineChart} from 'react-native-chart-kit';
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

import {styles} from './styles';
import {useSelector} from 'react-redux';

const Dashboard = ({route}) => {
  const [isTracker, setIsTracker] = useState(true);
  const [dataFilter, setDataFilter] = useState('country');
  const [data, setdata] = useState();
  const [chartData, setChartData] = useState();
  const [isloading, setIsloading] = useState(true);
  const [ischarloading, setIschartloading] = useState(true);

  const country = useSelector(state => state.country.country);
  useEffect(() => {
    const getWorldWideHistoryData = async () => {
      try {
        const response = await fetch(
          `https://disease.sh/v3/covid-19/historical/all?lastdays=10`,
        );
        const json = await response.json();
        console.log('data for world wide json=', Object.keys(json.cases));
        setChartData(json.cases);
      } catch (error) {
        console.error(error);
      } finally {
        setIschartloading(false);
      }
    };
    const getCountryHistoryData = async () => {
      try {
        const response = await fetch(
          `https://disease.sh/v3/covid-19/historical/${country.value}?lastdays=10`,
        );
        const json = await response.json();
        console.log(
          'data for world wide json=',
          Object.keys(json.timeline.cases),
        );

        setChartData(json.timeline.cases);
      } catch (error) {
        console.error(error);
      } finally {
        setIschartloading(false);
      }
    };
    const getWorldWideData = async () => {
      try {
        const response = await fetch(`https://disease.sh/v3/covid-19/all`);
        const json = await response.json();

        setdata(json);

        console.log('my data now of 1 country', JSON.stringify(data));
      } catch (error) {
        console.error(error);
      } finally {
        setIsloading(false);
      }
    };

    const getcountryData = async () => {
      try {
        const response = await fetch(
          `https://disease.sh/v3/covid-19/countries/${country.value}`,
        );
        const json = await response.json();

        setdata(json);

        console.log('my data now of 1 country', JSON.stringify(data));
      } catch (error) {
        console.error(error);
      } finally {
        setIsloading(false);
      }
    };
    if (dataFilter === 'country') {
      getcountryData();
      getCountryHistoryData();
    } else if (dataFilter === 'Worldwide') {
      getWorldWideData();
      getWorldWideHistoryData();
    }
  }, [country, dataFilter]);
  const myIcon = (
    <Icon
      name="long-arrow-right"
      size={20}
      color="#fff"
      style={{paddingHorizontal: 8}}
    />
  );

  const Symptoms = () => {
    return (
      <View style={[styles.bigBoxes, {justifyContent: 'space-evenly'}]}>
        <View
          style={{
            backgroundColor: '#fff',
            padding: 20,
            shadowColor: '#000',
            fontSize: 15,
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 5,
            elevation: 5,
            borderRadius: 20,
            // justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={require('../../../accets/Images/headache.png')}
            style={{width: 60, height: 60}}
          />
          <Text>Headache</Text>
        </View>
        <View
          style={{
            backgroundColor: '#fff',
            padding: 20,
            shadowColor: '#000',
            fontSize: 15,
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 5,
            elevation: 5,
            borderRadius: 20,
            // justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={require('../../../accets/Images/caugh.png')}
            style={{width: 60, height: 60}}
          />
          <Text>Cough</Text>
        </View>
        <View
          style={{
            backgroundColor: '#fff',
            padding: 20,
            shadowColor: '#000',
            fontSize: 15,
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 5,
            elevation: 5,
            borderRadius: 20,
            // justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={require('../../../accets/Images/fever.png')}
            style={{width: 60, height: 60}}
          />
          <Text>Fever</Text>
        </View>
      </View>
    );
  };
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      {/* <View style={styles.header}>
        <Image
          source={require('../../../accets/Images/Covid.png')}
          style={styles.covid}
        />
      </View> */}
      {isloading ? (
        <ActivityIndicator />
      ) : ischarloading ? (
        <ActivityIndicator />
      ) : (
        <ScrollView
          style={{
            backgroundColor: '#fff',
            flex: 1,
            width: Dimensions.get('window').width,
          }}>
          <View
            style={[
              styles.headerBox,
              !isTracker
                ? {height: Dimensions.get('window').height / 5.8}
                : {height: '15%'},
            ]}>
            <Image
              source={require('../../../accets/Images/Design.png')}
              style={styles.doctorImage}
            />
            <View style={{marginLeft: '5%'}}>
              <Text
                style={{
                  width: '40%',
                  color: '#142237',
                  fontWeight: '500',
                  fontSize: 15,
                  marginRight: '5%',
                  marginBottom: '2%',
                }}>
                Know safety tips and precautions from top Doctors.
              </Text>
              <TouchableOpacity
                style={{
                  backgroundColor: '#9156EC',
                  width: '10%',
                  justifyContent: 'center',
                  borderRadius: 20,
                }}>
                {myIcon}
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.buttonBox}>
            <TouchableOpacity onPress={() => setIsTracker(true)}>
              <Text
                style={isTracker ? styles.activeButton : styles.deactiveButton}>
                Tracker
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setIsTracker(false)}>
              <Text
                style={
                  !isTracker ? styles.activeButton : styles.deactiveButton
                }>
                Symptoms
              </Text>
            </TouchableOpacity>
          </View>
          {!isTracker ? (
            <Symptoms />
          ) : (
            <>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                  alignItems: 'center',
                  marginTop: '2%',
                }}>
                <TouchableOpacity onPress={() => setDataFilter('country')}>
                  <Text
                    style={[
                      dataFilter === 'country'
                        ? styles.textactive
                        : styles.textdeactive,
                      {fontSize: 15},
                    ]}>
                    Country
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setDataFilter('Worldwide')}>
                  <Text
                    style={[
                      dataFilter === 'Worldwide'
                        ? styles.textactive
                        : styles.textdeactive,
                      {fontSize: 15},
                    ]}>
                    Worldwide
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.bigBoxes}>
                <View style={[styles.boxes, styles.dangrousBox]}>
                  <Text style={[styles.boxHeading, styles.boxHeadingDanger]}>
                    Confirm
                  </Text>
                  <Text style={[styles.numbers, styles.boxHeadingDanger]}>
                    {data.cases}
                  </Text>
                </View>
                <View style={[styles.boxes, styles.blueBox]}>
                  <Text style={[styles.boxHeading, styles.boxHeadingBlue]}>
                    Active
                  </Text>
                  <Text style={[styles.numbers, styles.boxHeadingBlue]}>
                    {data.active}
                  </Text>
                </View>
                <View style={[styles.boxes, styles.greenBox]}>
                  <Text style={[styles.boxHeading, styles.boxHeadinggreen]}>
                    Recovered
                  </Text>
                  <Text style={[styles.numbers, styles.boxHeadinggreen]}>
                    {data.recovered}
                  </Text>
                </View>
                <View style={[styles.boxes, styles.grayBox]}>
                  <Text style={[styles.boxHeading, styles.boxHeadinggray]}>
                    Deaths
                  </Text>
                  <Text style={[styles.numbers, styles.boxHeadinggray]}>
                    {data.deaths}
                  </Text>
                </View>
              </View>

              <LineChart
                data={{
                  // labels: Object.keys(chartData),
                  datasets: [
                    {
                      data: Object.values(chartData),
                    },
                  ],
                }}
                width={Dimensions.get('window').width} // from react-native
                height={320}
                yAxisInterval={1} // optional, defaults to 1
                chartConfig={{
                  backgroundColor: '#fff',
                  backgroundGradientFrom: '#fff',
                  backgroundGradientTo: '#fff',
                  decimalPlaces: 0, // optional, defaults to 2dp
                  color: (opacity = 0) => `rgba(255, 0, 0, ${opacity})`,
                  labelColor: (opacity = 0) => `rgba(0, 0, 0, ${opacity})`,
                  style: {
                    // borderRadius: 16,
                  },
                  propsForDots: {
                    r: '6',
                    strokeWidth: '1',
                    stroke: 'red',
                  },
                }}
                bezier
                style={{
                  // marginVertical: 8,
                  // borderRadius: 16,
                  alignSelf: 'flex-end',
                  justifyContent: 'flex-end',
                  alignItems: 'flex-end',
                  marginBottom: 0,
                  paddingBottom: 0,
                }}
              />
            </>
          )}
        </ScrollView>
      )}
    </View>
  );
};

export default Dashboard;
