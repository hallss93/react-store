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
  width: 75%;
  padding: 0px 10px;
`;

export const ProductImage = styled.Image`
  width: 25%;
`;
export const ProductTitle = styled.Text`
  font-size: 15px;
  font-weight: bold;
`;
export const ProductSubView = styled.View`
  justify-content: flex-start;
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
export const ContainerFlexRight = styled.View`
  align-items: flex-end;
  justify-content: flex-end;
`;
export const ContainerButtonsView = styled.View`
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  width: 60%;
`;

export const ControlersView = styled(ContainerButtonsView)`
  width: 55px;
  min-height: 20px;
`;

export const TouchView = styled.TouchableNativeFeedback``;
export const IconView = styled.View`
  height: 20px;
  justify-content: center;
  align-items: center;
`;

export const NotFoundText = styled.Text`
  font-size: 16px;
  margin-top: 10px;
  text-align: center;
`;
