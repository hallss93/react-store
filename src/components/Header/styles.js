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
