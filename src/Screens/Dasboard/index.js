import {
  View,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';
import {styles} from './styles';

const Dashboard = () => {
  const [isTracker, setIsTracker] = useState(true);
  const [dataFilter, setDataFilter] = useState('country');
  const myIcon = (
    <Icon
      name="long-arrow-right"
      size={20}
      color="#fff"
      style={{paddingHorizontal: 8}}
    />
  );

  return (
    <View style={{flex: 1}}>
      {/* <View style={styles.header}>
        <Image
          source={require('../../../accets/Images/Covid.png')}
          style={styles.covid}
        />
      </View> */}
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
              style={!isTracker ? styles.activeButton : styles.deactiveButton}>
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
                dataFilter === 'City' ? styles.textactive : styles.textdeactive,
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
              2,37,395
            </Text>
          </View>
          <View style={[styles.boxes, styles.blueBox]}>
            <Text style={[styles.boxHeading, styles.boxHeadingBlue]}>
              Active
            </Text>
            <Text style={[styles.numbers, styles.boxHeadingBlue]}>
              2,37,395
            </Text>
          </View>
          <View style={[styles.boxes, styles.greenBox]}>
            <Text style={[styles.boxHeading, styles.boxHeadinggreen]}>
              Recovered
            </Text>
            <Text style={[styles.numbers, styles.boxHeadinggreen]}>
              2,37,395
            </Text>
          </View>
          <View style={[styles.boxes, styles.grayBox]}>
            <Text style={[styles.boxHeading, styles.boxHeadinggray]}>
              Deceased
            </Text>
            <Text style={[styles.numbers, styles.boxHeadinggray]}>
              2,37,395
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
      </ScrollView>
    </View>
  );
};

export default Dashboard;
