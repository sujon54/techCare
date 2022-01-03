import React, {useEffect, useState} from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  ToastAndroid
} from 'react-native';
import {Card, Button, Divider} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';

import { REMOVE_TO_CART } from '../store/actions/ActionTypes';

const cart = ({navigation}) => {
    const dispatch = useDispatch();
    const store = useSelector(state => state.user);
    const [state, setState] = useState({
        cartTotal: 0
    });

    useEffect(() => {
        calTotal();
        setTimeout(() => navigation.navigate('Home'), 20000);
    }, []);

    const calTotal = () => {
        if(store.cartData.length){
            let price = 0;
            store.cartData.forEach(item => {
              price += item.price;
            });
            setState({...state, cartTotal: price});
        } else{
            setState({...state, cartTotal: 0});
        }
    }

    const confirmOrder = () => {
        dispatch({type: REMOVE_TO_CART})
        ToastAndroid.show(
            'Thanks. Your Order Complete.',
            ToastAndroid.SHORT,
            ToastAndroid.BOTTOM
        );
        navigation.navigate('Home');
    }
    
    return(
        <SafeAreaView style={{flex: 1}}>
            {store.cartData.length ?
                <ScrollView style={{paddingHorizontal: 15}}>
                    {store.cartData.map((food, index) => (
                        <Card style={{marginVertical: 5}} key={index}>
                            <View style={{flexDirection: 'row'}}>
                                <Image
                                    source={food.img}
                                    style={styles.img}
                                />
                                <View style={styles.namePriceSec}>
                                    <View style={styles.nameAndPriceRow}>
                                        <Text>{food.name}</Text>
                                        <TouchableOpacity>
                                            <Icon name="close-outline" size={20} />
                                        </TouchableOpacity>
                                    </View>
                                    <Text>{food.brand}</Text>
                                    <Text style={styles.price}><Icon name='logo-usd'/>{food.price}</Text>
                                    <View style={styles.productSec}>
                                        <TouchableOpacity onPress={() => alert('remove')}>
                                            <Icon name="remove-outline" size={20} />
                                        </TouchableOpacity>
                                        <Text style={{marginHorizontal: 15, fontSize: 18}}>{food.qty}</Text>
                                        <TouchableOpacity onPress={() => alert('add')}>
                                            <Icon name="add-outline" size={20} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </Card>
                    ))}
                    <View style={{marginTop: 20}}>
                        <Text>Sector 13, Uttara</Text>
                        <Text>House: 43</Text>
                        <Text>Road: 2</Text>
                    </View>
                    <Divider style={{marginVertical: 10}}/>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Text>Subtotal</Text>
                        <Text><Icon name="logo-usd" size={15} />{state.cartTotal}</Text>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Text>Shipping</Text>
                        <Text><Icon name="logo-usd" size={15} />10</Text>
                    </View>
                    <Divider style={{marginVertical: 10}}/>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Text>Total</Text>
                        <Text><Icon name="logo-usd" size={15} />{state.cartTotal + 10}</Text>
                    </View>
                </ScrollView>
                : <View style={{flex: 1, justifyContent: 'center'}}>
                    <Text style={{textAlign: 'center'}}>Your cart is empty.</Text>
                </View>
            }
            {store.cartData.length ?
                <View style={{flex: 1, flexDirection: 'column-reverse'}}>
                    <Button
                        color={'#fff'}
                        uppercase={false}
                        labelStyle={{fontSize: 14}}
                        style={{margin: 10, backgroundColor: '#000'}}
                        onPress={() => confirmOrder()}
                    >
                        Confirm Order
                    </Button>
                </View>
                : null
            }
        </SafeAreaView>
    )
}

export default cart;

const styles = StyleSheet.create({
  namePriceSec: {
    width: '70%',
    paddingHorizontal: 10,
    justifyContent: 'space-around',
  },
  nameAndPriceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  price: {
    paddingVertical: 2.5,
  },
  img: {
    width: '30%',
    height: 120,
  },
  checkoutSec: {
    borderTopWidth: 1,
    paddingTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
  },
  checkoutBtn: {
    borderRadius: 20,
    paddingVertical: 6,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  productSec: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    backgroundColor: '#ccc',
    borderRadius: 5,
    padding: 2.5,
    marginBottom: 5
  },
});