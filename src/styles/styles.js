import {StyleSheet, Dimensions} from 'react-native';

const width = Dimensions.get('window').width;

export default StyleSheet.create({
  catSec: {
    width: 120,
    height: 70,
    marginRight: 10,
    justifyContent: 'center'
  },
  productImg: {
    width: width/2.5,
    height: 180,
    marginRight: 15,
    borderRadius: 5
  },
  category: {
    textAlign: 'center',
    color: 'red',
    fontSize: 16
  },
  title: {
    marginLeft: 15,
    marginBottom: 5
  },
  itemSec: {
    marginHorizontal:15,
    overflow: 'visible'
  },
  price: {
    marginTop: 5
  },
  cart: {
    backgroundColor: '#000',
    textAlign: 'center',
    color: '#fff',
    paddingVertical: 7.5,
    borderRadius: 5,
    marginHorizontal: 15
}
});