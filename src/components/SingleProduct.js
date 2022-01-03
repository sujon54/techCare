import React from 'react';
import {View, ScrollView, Text, Image, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useDispatch} from 'react-redux';

import styles from '../styles/styles';
import {ADD_TO_CART} from '../store/actions/ActionTypes';

const singleProduct = ({route, navigation}) => {
  const {product} = route.params;
  const dispatch = useDispatch();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() => navigation.navigate("Checkout")}
          style={{marginRight: 10}}>
          <Ionicons name="cart-outline" size={25} />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  const addToCart = (product) => {
      dispatch({type: ADD_TO_CART, data: product});
  }

  return(
    <ScrollView>
      <Image source={product.img} style={{width: '100%', height: 250}} />
      <View style={{padding: 15}}>
        <Text><Ionicons name="logo-usd" size={15} />{product.price}</Text>
        <Text>{product.name}</Text>
      </View>
      <TouchableOpacity onPress={() => addToCart(product)}>
        <Text style={styles.cart}>Add to Cart</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

export default singleProduct;