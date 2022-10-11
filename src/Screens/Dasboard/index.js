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
          `https://disease.sh/v3/covid-19/historical/all?lastdays=5`,
        );
        const json = await response.json();
        console.log('data for world wide json=', Object.keys(json.cases));
        const chartDatafun = buildChartData(json, 'cases');
        setChartData(json.cases);
        console.log(
          'my data now of world wide history country',
          JSON.stringify(chartDatafun),
        );
      } catch (error) {
        console.error(error);
      } finally {
        setIschartloading(false);
      }
    };
    const getCountryHistoryData = async () => {
      try {
        const response = await fetch(
          `https://disease.sh/v3/covid-19/historical/${country.value}?lastdays=5`,
        );
        const json = await response.json();
        console.log(
          'data for world wide json=',
          Object.keys(json.timeline.cases),
        );
        const chartDatafun = buildChartData(json, 'cases');
        setChartData(json.timeline.cases);
        console.log(
          'my data now of world wide history country',
          JSON.stringify(chartDatafun),
        );
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

  const buildChartData = (data, casesTypes = 'cases') => {
    const chartData = [];
    let lastdatePoint;
    for (let date in data.cases) {
      if (lastdatePoint) {
        const newDataPoint = {
          x: date,
          y: data.cases[data] - lastdatePoint,
        };
        chartData.push(newDataPoint);
      }
      lastdatePoint = data[casesTypes][data];
    }
    return chartData;
  };

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
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
        <ScrollView>
          <View style={styles.headerBox}>
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
            <TouchableOpacity onPress={() => setDataFilter('State/Province')}>
              <Text
                style={[
                  dataFilter === 'State/Province'
                    ? styles.textactive
                    : styles.textdeactive,
                  {fontSize: 15},
                ]}>
                State/Province
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setDataFilter('City')}>
              <Text
                style={[
                  dataFilter === 'City'
                    ? styles.textactive
                    : styles.textdeactive,
                  {fontSize: 15},
                ]}>
                City
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
          {/* <View>
          <LineChart
            data={{
              labels: ['January', 'February', 'March', 'April', 'May', 'June'],
              datasets: [
                {
                  data: [
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                  ],
                },
              ],
            }}
            width={Dimensions.get('window').width} // from react-native
            height={220}
            yAxisLabel="$"
            yAxisSuffix="k"
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={{
              backgroundColor: '#e26a00',
              backgroundGradientFrom: '#fb8c00',
              backgroundGradientTo: '#ffa726',
              decimalPlaces: 2, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 16,
              },
              propsForDots: {
                r: '6',
                strokeWidth: '2',
                stroke: '#ffa726',
              },
            }}
            bezier
            style={
              {
                // marginVertical: 8,
                // borderRadius: 16,
              }
            }
          />
        </View> */}
          <View>
            <LineChart
              data={{
                labels: Object.keys(chartData),
                datasets: [
                  {
                    data: Object.values(chartData),
                  },
                ],
              }}
              width={Dimensions.get('window').width} // from react-native
              height={320}
              yAxisSuffix="k"
              yAxisInterval={1} // optional, defaults to 1
              chartConfig={{
                backgroundColor: '#fff',
                backgroundGradientFrom: '#fff',
                backgroundGradientTo: '#fff',
                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 0) => `rgba(255, 0, 0, ${opacity})`,
                labelColor: (opacity = 0) => `rgba(0, 0, 0, ${opacity})`,
                style: {
                  borderRadius: 16,
                },
                propsForDots: {
                  r: '6',
                  strokeWidth: '2',
                  stroke: 'red',
                },
              }}
              bezier
              style={{
                marginVertical: 8,
                borderRadius: 16,
              }}
            />
          </View>
        </ScrollView>
      )}
    </View>
  );
};

export default Dashboard;
