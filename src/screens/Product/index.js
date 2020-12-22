import React, {useEffect} from 'react';
import {View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Header from '../../components/Header';
import {cleanProduct, getProduct} from '../../store/actions/productsActions';
import {setCarrinho} from '../../store/actions/carrinhoActions';
import {
  Container,
  ProductImageView,
  ProductImage,
  Title,
  ContainerCenter,
  Price,
  Description,
  DescriptionTitle,
  ContainerButtons,
  ButtonTouch,
  ButtonText,
  ButtonView,
  Adicionar,
} from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';

const ProductScreen = ({navigation, route}) => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.product);
  const carrinho = useSelector((state) => state.carrinho.carrinho);
  const totalItensCarrinho = useSelector(
    (state) => state.carrinho.totalItensCarrinho,
  );

  useEffect(() => {
    dispatch(cleanProduct());
    dispatch(getProduct(route.params.id));
  }, [route]);

  const comprar = () => {
    dispatch(setCarrinho(product));
    navigation.navigate('Carrinho');
  };
  return (
    <View>
      <Header title="" navigation={navigation} goBack={true} />
      {product && (
        <Container>
          <SafeAreaView>
            <ProductImageView>
              <ProductImage
                source={{uri: product.image}}
                style={{aspectRatio: 1}}></ProductImage>
            </ProductImageView>
            <ContainerCenter>
              <Title>{product.title}</Title>
              <Price>R$ {product.price}</Price>
            </ContainerCenter>
            <DescriptionTitle>Descrição</DescriptionTitle>
            <Description>{product.description}</Description>

            <ContainerButtons>
              <ButtonTouch onPress={() => comprar()}>
                <ButtonView>
                  <ButtonText>Comprar</ButtonText>
                </ButtonView>
              </ButtonTouch>
              <ButtonTouch onPress={() => comprar()}>
                <Adicionar>Adicionar ao Carrinho</Adicionar>
              </ButtonTouch>
            </ContainerButtons>
          </SafeAreaView>
        </Container>
      )}
    </View>
  );
};

export default ProductScreen;
