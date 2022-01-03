import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {enableScreens} from 'react-native-screens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from '../components/Home';
import SingleProduct from '../components/SingleProduct';
import Checkout from '../components/Cart';

enableScreens(true);
const Stack = createNativeStackNavigator();

const Container = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="SingleProduct" component={SingleProduct} />
        <Stack.Screen name="Checkout" component={Checkout} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Container;