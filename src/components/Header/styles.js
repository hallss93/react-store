import styled from 'styled-components/native';
import {RED, WHITE} from './../../utils/styles/colors';

export const SpaceView = styled.View``;
export const HeaderView = styled.View`
  padding-left: 10px;
  padding-right: 10px;
  height: 60px;
  background-color: ${RED};
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;
export const Title = styled.Text`
  color: ${WHITE};
  font-size: 22px;
`;
export const ButtonBack = styled.TouchableWithoutFeedback``;
export const CartView = styled.View`
  display: flex;
  flex-direction: row;
  padding-right: 15px;
`;
export const QuantidadeView = styled.View`
  background-color: ${WHITE};
  padding: 4px;
  border-radius: 50px;
  height: 18px;
  width: 18px;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: -5px;
  right: 5px;
`;
export const QuantidadeText = styled.Text`
  font-size: 16px;
`;
