import styled from 'styled-components/native';
import {GRAY, RED, WHITE} from './../../utils/styles/colors';

export const Container = styled.ScrollView`
  height: 100%;
  padding: 10px;
`;
export const ProductImageView = styled.View`
  justify-content: center;
  align-items: center;
`;
export const ProductImage = styled.Image`
  border-radius: 4px;
  width: 50%;
`;
export const Title = styled.Text`
  font-size: 26px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 10px;
`;

export const ContainerCenter = styled(ProductImageView)``;
export const Price = styled(Title)`
  font-size: 36px;
`;
export const DescriptionTitle = styled.Text`
  font-weight: bold;
  font-size: 18px;
`;
export const Description = styled.Text`
  font-size: 18px;
  color: ${GRAY};
`;

export const ContainerButtons = styled(ProductImageView)`
  margin-top: 40px;
`;
export const ButtonTouch = styled.TouchableNativeFeedback``;
export const ButtonView = styled.View`
  background-color: ${RED};
  min-height: 36px;
  min-width: 180px;
  padding: 6px;
  border-radius: 4px;
`;
export const ButtonText = styled.Text`
  text-align: center;
  color: ${WHITE};
  text-transform: uppercase;
  font-size: 20px;
`;
export const Adicionar = styled.Text`
  margin-top: 15px;
  color: ${RED};
  text-transform: uppercase;
  font-size: 15px;
`;
