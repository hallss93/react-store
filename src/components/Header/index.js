import React, {useState} from 'react';
import {WHITE} from '../../utils/styles/colors';
import {HeaderView, Title, SpaceView, ButtonBack} from './styles';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import Cart from './../../assets/icons/cart-outline.svg';
const Header = ({navigation, title,goBack}) => {
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
      <Cart width={20}/>
    </HeaderView>
  );
};
export default Header;
