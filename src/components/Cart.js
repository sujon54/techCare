import React, {useEffect} from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView
} from 'react-native';
import {Card, Button} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';

import foods from '../data/foods';

const cart = ({navigation}) => {
    useEffect(() => {
        setTimeout(() => navigation.navigate('Home'), 20000);
    }, []);
    
    return(
        <SafeAreaView style={{flex: 1}}>
            <ScrollView style={{paddingHorizontal: 15}}>
                {foods.map(food => (
                    <Card style={{marginVertical: 5}} key={food.id}>
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
            </ScrollView>
            <Button
                color={'#fff'}
                uppercase={false}
                labelStyle={{fontSize: 14}}
                style={{margin: 10, backgroundColor: '#000'}}
                onPress={() => navigation.navigate('Home')}
            >
                Back to Home
            </Button>
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