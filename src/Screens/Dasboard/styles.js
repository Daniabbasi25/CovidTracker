import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
export const styles = StyleSheet.create({
  header: {
    backgroundColor: 'green',
  },
  covid: {},
  headerBox: {
    backgroundColor: '#CFE3FC',
    width: width / 1.05,
    height: '15%',
    alignSelf: 'center',
    justifyContent: 'flex-start',
    marginTop: height / 28,
    borderRadius: 20,
    paddingLeft: '40%',
    flexDirection: 'row',
    alignItems: 'center',
    // flexWrap: 'wrap',
  },
  doctorImage: {
    // backgroundColor: 'red',
    // marginBottom: '5%',
    position: 'absolute',
  },
  buttonBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width / 1.05,
    backgroundColor: 'rgba(244, 158, 111, 0.4)',
    alignSelf: 'center',
    marginTop: 25,
    padding: 10,
    borderRadius: 30,
    alignItems: 'center',
  },
  activeButton: {
    backgroundColor: '#fff',
    color: '#000',
    padding: 10,
    width: width / 2.2,
    justifyContent: 'center',
    textAlign: 'center',
    borderRadius: 20,
    shadowColor: '#000',
    fontSize: 15,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 5,
  },
  deactiveButton: {
    padding: 10,
    width: width / 2.5,
    justifyContent: 'center',
    textAlign: 'center',
    borderRadius: 20,
    color: '#A74813',
    fontSize: 15,
  },
  boxes: {
    backgroundColor: 'red',
    width: width,
    height: height / 2,
    marginTop: '2%',
  },
  textactive: {
    color: '#000',
    fontWeight: '600',
  },
  textdeactive: {
    color: 'gray',
    fontWeight: '500',
  },
  bigBoxes: {
    height: height / 2.5,

    width: width,
    // backgroundColor: 'green',
    marginTop: '2%',
    paddingHorizontal: '5%',
    paddingVertical: '5%',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  boxes: {
    width: '45%',
    height: '40%',
    justifyContent: 'space-between',
    borderRadius: 15,
    padding: 13,
    margin: '2%',
  },
  dangrousBox: {
    backgroundColor: 'rgba(252, 20, 65, 0.1)',
    // width: width / 2,
  },
  blueBox: {
    backgroundColor: 'rgba(21, 127, 251, 0.1)',
    // width: width / 2,
  },
  greenBox: {
    backgroundColor: 'rgba(48, 166, 74, 0.1)',
    // width: width / 2,
  },
  grayBox: {
    backgroundColor: 'rgba(109, 117, 125, 0.1)',
    // width: width / 2,
  },
  numbers: {
    textAlign: 'right',
    fontSize: 25,
    fontWeight: '600',
  },
  boxHeading: {
    fontSize: 17,
    fontWeight: '500',
  },
  boxHeadingDanger: {
    color: '#FC1441',
  },
  boxHeadingBlue: {
    color: '#157FFB',
  },
  boxHeadinggreen: {
    color: '#30A64A',
  },
  boxHeadinggray: {
    color: '#6D757D',
  },
});
