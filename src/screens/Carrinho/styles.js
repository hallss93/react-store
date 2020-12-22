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
export const ContainerList = styled.View`
  padding: 8px;
`;
export const ContainerItem = styled.View`
  justify-content: flex-start;
  flex-direction: row;
`;
export const ContainerBody = styled.View`
  padding: 0px 10px;
`;

export const ProductImage = styled.Image`
  width: 90px;
`;
export const ProductTitle = styled.Text`
  font-size: 15px;
  font-weight: bold;
`;
export const ProductSubView = styled.View`
  justify-content: center;
  flex-direction: row;
  align-items: center;
`;
export const ProductSubText = styled.Text`
  justify-content: center;
  align-items: center;
  font-size: 15px;
`;

export const Price = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;
