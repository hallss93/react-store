import styled from 'styled-components/native';
import {BLACK, ROSE, WHITE} from '../../../utils/styles/colors';

export const Container = styled.ScrollView``;

export const CardContainer = styled.View`
  margin-bottom: 100px;
  flex-direction: row;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Card = styled.View`
  width: auto;
  background-color: ${WHITE};
  min-width: 45%;
  max-width: 45%;
  flex: 1;
  border-color: ${ROSE};
  margin-right: 5px;
  margin-left: 5px;
  border-width: 1px;
  border-radius: 4px;
  margin-top: 10px;
  padding: 10px;
`;
export const ValueText = styled.Text`
  color: ${BLACK};
  font-size: 17px;
  font-weight: bold;
`;
export const ProductText = styled.Text`
  color: ${BLACK};
  font-size: 15px;
  margin-top: 10px;
`;

export const ProductImageView = styled.View`
  width: 100%;
`;
export const ProductImage = styled.Image`
  width: 100%;
  padding-top: 10px;
`;
