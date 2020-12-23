import React, {useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';

import {
  Container,
  CardContainer,
  Card,
  ValueText,
  ProductText,
  ProductImage,
  ProductImageView,
  CardTouch,
} from './styles';

const CartListView = ({navigation}) => {
  const products = useSelector((state) => state.products.products);
  return (
    <Container>
      <CardContainer>
        {products.map((product, index) => {
          return (
            <CardTouch
              key={index}
              onPress={() => {
                navigation.navigate('Product', {id: product.id});
              }}>
              <Card style={styles.card}>
                <ProductImageView>
                  <ProductImage
                    source={{uri: product.image}}
                    style={{aspectRatio: 1}}></ProductImage>
                </ProductImageView>

                <ProductText>{product.title}</ProductText>
                <ValueText>R$ {Number(product.price).toFixed(2)}</ValueText>
              </Card>
            </CardTouch>
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
