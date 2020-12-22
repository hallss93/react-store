import React, {useState} from 'react';
import {WHITE} from '../../utils/styles/colors';
import {
  HeaderView,
  Title,
  SpaceView,
  ButtonBack,
  QuantidadeView,
  CartView,
  QuantidadeText,
} from './styles';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import Cart from './../../assets/icons/cart-outline.svg';
import {useSelector} from 'react-redux';
const Header = ({navigation, title, goBack}) => {
  const totalItensCarrinho = useSelector(
    (state) => state.carrinho.totalItensCarrinho,
  );
  return (
    <HeaderView>
      {goBack ? (
        <ButtonBack onPress={() => navigation.goBack()}>
          <FontAwesome5Icon
            name="chevron-left"
            color={WHITE}
            style={{fontSize: 20}}></FontAwesome5Icon>
        </ButtonBack>
      ) : (
        <SpaceView></SpaceView>
      )}
      <Title>{title}</Title>
      <CartView>
        <Cart width={20} />
        {totalItensCarrinho > 0 && (
          <QuantidadeView>
            <QuantidadeText>{totalItensCarrinho}</QuantidadeText>
          </QuantidadeView>
        )}
      </CartView>
    </HeaderView>
  );
};
export default Header;
