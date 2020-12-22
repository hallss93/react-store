import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {
  Container,
  CardContainer,
  Card,
  ValueText,
  ProductText,
  ProductImage,
  ProductImageView
} from './styles';

import {getAllProducts} from './../../../store/actions/productsActions';

const CartListView = ({navigation}) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);
  return (
    <Container>
      <CardContainer>
        {products.map((product, index) => {
          return (
            <Card key={index} style={styles.card}>
              <ProductImageView>
                {index % 2 ? (
                  <ProductImage
                    source={require(`./../../../assets/imgs/blusa.png`)}></ProductImage>
                ) : index % 3 ? (
                  <ProductImage
                    source={require(`./../../../assets/imgs/camisa.png`)}></ProductImage>
                ) : (
                  <ProductImage
                    source={require(`./../../../assets/imgs/calca.png`)}></ProductImage>
                )}
              </ProductImageView>

              <ProductText>{product.description}</ProductText>
              <ValueText>R$ {product.value}</ValueText>
            </Card>
          );
        })}
      </CardContainer>
    </Container>
  );
};
const styles = StyleSheet.create({
  card: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
});
export default CartListView;
