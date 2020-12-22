import React from 'react';
import {Text, View} from 'react-native';
import Header from '../../components/Header';
import CartListView from './CartListView';

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Header title="Produtos"></Header>
      <CartListView />
    </View>
  );
};

export default HomeScreen;
