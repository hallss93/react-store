import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {useDispatch} from 'react-redux';
import Header from '../../components/Header';
import {getAllProducts} from '../../store/actions/productsActions';
import CartListView from './CartListView';

const HomeScreen = ({navigation, route}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
  }, [route]);
  return (
    <View>
      <Header title="Produtos" />
      <CartListView navigation={navigation} />
    </View>
  );
};

export default HomeScreen;
