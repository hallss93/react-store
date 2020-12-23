import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Header from '../../components/Header';
import {
  setCarrinho,
  setMinus,
  deleteProduct,
  cleanCarrinho,
} from '../../store/actions/carrinhoActions';
import {
  Container,
  ContainerList,
  ContainerItem,
  ProductImage,
  NotFoundText,
  ProductSubView,
  ContainerButtonsView,
  ContainerBody,
  ControlersView,
  ProductSubText,
  IconView,
  ContainerFlexRight,
  TouchView,
  ProductTitle,
  Price,
} from './styles';
import Delete from './../../assets/icons/delete.svg';
import Minus from './../../assets/icons/minus.svg';
import Plus from './../../assets/icons/plus.svg';
import {
  Adicionar,
  ButtonText,
  ButtonTouch,
  ButtonView,
  ContainerButtons,
} from '../Product/styles';
const CarrinhoScreen = ({navigation, route}) => {
  const dispatch = useDispatch();
  const carrinho = useSelector((state) => state.carrinho.carrinho);
  const minus = (product) => {
    dispatch(setMinus(product));
  };

  const plus = (product) => {
    dispatch(setCarrinho(product));
  };

  const handleDeleteProduct = (product) => {
    dispatch(deleteProduct(product));
  };

  const finalizar = () => {
    alert('finalizar...');
  };

  const limparCarrinho = (product) => {
    dispatch(cleanCarrinho());
  };

  limparCarrinho;
  return (
    <View>
      <Header title="" navigation={navigation} goBack={true} />
      {carrinho.length > 0 ? (
        <ContainerList>
          {carrinho.map((product, index) => {
            return (
              <ContainerItem key={index}>
                <ProductImage
                  source={{uri: product.image}}
                  style={{aspectRatio: 1}}
                />
                <ContainerBody>
                  <ProductTitle>{product.title}</ProductTitle>
                  <ContainerFlexRight>
                    <TouchView onPress={() => handleDeleteProduct(product)}>
                      <Delete />
                    </TouchView>
                  </ContainerFlexRight>
                  <ProductSubText>Categoria: {product.category}</ProductSubText>
                  <ProductSubView>
                    <ProductSubText>
                      Quantidade: {product.quantity}
                    </ProductSubText>
                    <ContainerButtonsView>
                      <ControlersView>
                        <TouchView onPress={() => minus(product)}>
                          <IconView>
                            <Minus />
                          </IconView>
                        </TouchView>
                        <TouchView onPress={() => plus(product)}>
                          <IconView>
                            <Plus />
                          </IconView>
                        </TouchView>
                      </ControlersView>
                      <Price>R$ {Number(product.price).toFixed(2)}</Price>
                    </ContainerButtonsView>
                  </ProductSubView>
                </ContainerBody>
              </ContainerItem>
            );
          })}

          <ContainerButtons>
            <ButtonTouch onPress={() => finalizar()}>
              <ButtonView>
                <ButtonText>Finalizar</ButtonText>
              </ButtonView>
            </ButtonTouch>
            <ButtonTouch onPress={() => limparCarrinho()}>
              <Adicionar>Limpar Carrinho</Adicionar>
            </ButtonTouch>
          </ContainerButtons>
        </ContainerList>
      ) : (
        <View>
          <NotFoundText>Nenhum item no carrinho</NotFoundText>
        </View>
      )}
    </View>
  );
};

export default CarrinhoScreen;
