import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  mainImage: {
    width: width,
    height: height / 1.5,
  },
  animatedBox: {
    width: width,
    backgroundColor: '#fff',
    height: height / 2,
    position: 'absolute',
    top: height / 1.6,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  heading: {
    color: '#000',
    fontSize: 30,
    fontWeight: '400',
    marginTop: '5%',
    marginLeft: '10%',
    width: width / 2.4,
  },
  subHeading: {
    textAlign: 'center',
    fontSize: 15,
    marginTop: '5%',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginHorizontal: '10%',
    marginTop: '10%',
  },
  arrowButton: {
    marginLeft: '10%',
    backgroundColor: '#9156EC',
    alignSelf: 'center',
    padding: '5%',
    color: '#fff',
    borderRadius: 50,
  },
});
