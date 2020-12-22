import React, {useEffect} from 'react';
import {View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Header from '../../components/Header';
import {cleanProduct, getProduct} from '../../store/actions/productsActions';
import {setCarrinho} from '../../store/actions/carrinhoActions';
import {
  Container,
  ContainerList,
  ContainerItem,
  ProductImage,
  ProductSubView,
  ContainerBody,
  ProductSubText,
  ProductTitle,
  Price,
} from './styles';
import Delete from './../../assets/icons/delete.svg';
import Minus from './../../assets/icons/minus.svg';
import Plus from './../../assets/icons/plus.svg';
const CarrinhoScreen = ({navigation, route}) => {
  const dispatch = useDispatch();
  const carrinho = useSelector((state) => state.carrinho.carrinho);
  const totalItensCarrinho = useSelector(
    (state) => state.carrinho.totalItensCarrinho,
  );

  const comprar = () => {
    dispatch(setCarrinho(product));
    console.log(carrinho);
  };
  return (
    <View>
      <Header title="" navigation={navigation} goBack={true} />
      <ContainerList>
        {carrinho.map((product) => {
          return (
            <ContainerItem>
              <ProductImage
                source={{uri: product.image}}
                style={{aspectRatio: 1}}
              />
              <ContainerBody>
                <ProductTitle>{product.title}</ProductTitle>
                <Delete />
                <ProductSubText>Categoria: {product.category}</ProductSubText>
                <ProductSubView>
                  <ProductSubText>
                    Quantidade: {product.quantity}
                  </ProductSubText>
                  <Minus />
                  <Plus />
                </ProductSubView>
                <Price>R$ {product.price}</Price>
              </ContainerBody>
            </ContainerItem>
          );
        })}
      </ContainerList>
    </View>
  );
};

export default CarrinhoScreen;
