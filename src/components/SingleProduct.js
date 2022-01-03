import React from 'react';
import {View, ScrollView, Text, Image, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from '../styles/styles';

const singleProduct = ({route, navigation}) => {
  const {product} = route.params;

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() => alert('pressed')}
          style={{marginRight: 10}}>
          <Ionicons name="cart-outline" size={25} />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return(
    <ScrollView>
      <Image source={product.img} style={{width: '100%', height: 250}} />
      <View style={{padding: 15}}>
        <Text><Ionicons name="logo-usd" size={15} />{product.price}</Text>
        <Text>{product.name}</Text>
      </View>
      <TouchableOpacity>
        <Text style={styles.cart}>Add to Cart</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

export default singleProduct;