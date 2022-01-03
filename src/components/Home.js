import React from 'react';
import {View, ScrollView, Image, SafeAreaView, TouchableOpacity, Text, ImageBackground} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Title} from 'react-native-paper';

import foods from '../data/foods';
import styles from '../styles/styles';
import categoris from '../data/categories';

class Home extends React.Component {
  state = {}
  constructor(props) {
    super(props);
    
    this.props.navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Checkout')}
          style={{marginRight: 10}}>
          <Ionicons name="cart-outline" size={25} />
        </TouchableOpacity>
      ),
    });
  }

  render(){
    return(
      <SafeAreaView>
        <ScrollView>
          <View style={{marginTop: 20}}>
            <Title style={styles.title}>Categories</Title>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.itemSec}>
              {categoris.map(category => (
                <ImageBackground key={category.id} source={category.img} style={styles.catSec}>
                  <Text style={styles.category}>{category.name}</Text>
                </ImageBackground>
              ))}
            </ScrollView>
          </View>
          <View style={{marginTop: 20}}>
            <Title style={styles.title}>Featured</Title>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.itemSec}>
              {foods.map(food => (
                <TouchableOpacity key={food.id} onPress={() => this.props.navigation.navigate('SingleProduct', {product: food})}>
                  <Image source={food.img} style={styles.productImg} />
                  <Text style={styles.price}><Ionicons name="logo-usd" size={15} />{food.price}</Text>
                  <Text>{food.name}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
          <View style={{marginTop: 20}}>
            <Title style={styles.title}>Best Sell</Title>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.itemSec}>
              {foods.map(food => (
                <TouchableOpacity key={food.id} onPress={() => this.props.navigation.navigate('SingleProduct', {product: food})}>
                  <Image source={food.img} style={styles.productImg} />
                  <Text style={styles.price}><Ionicons name="logo-usd" size={15} />{food.price}</Text>
                  <Text>{food.name}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
          <View style={{marginTop: 20}}>
            <Title style={styles.title}>New Arrivals</Title>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.itemSec}>
              {foods.map(food => (
                <TouchableOpacity key={food.id} onPress={() => this.props.navigation.navigate('SingleProduct', {product: food})}>
                  <Image source={food.img} style={styles.productImg} />
                  <Text style={styles.price}><Ionicons name="logo-usd" size={15} />{food.price}</Text>
                  <Text>{food.name}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default Home;