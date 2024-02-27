import styled from 'styled-components/native';
import { Inter_600SemiBold } from '@expo-google-fonts/inter';
import { Inter_500Medium } from '@expo-google-fonts/inter';
import { LinearGradient } from 'expo-linear-gradient';
import { PrevArrow } from '../../src/assets';

export const Container = styled.View`
  background-color: #fff;
  align-items: flex-start;
  padding-left: 34px;
  height: 100%;
`;

export const TitleContainer = styled.Text`
  font-family: 'Inter_600SemiBold';
  font-size: 16px;
  font-style: normal;
  color: #109946; 

  .secondary
  {
    color: #4D4D4D
  }

  .paragraph
  {
    font-family: 'Inter_500Medium';
    font-size: 14px;
    color: #4D4D4D;
  }
`;

export const UserButton = styled.View`
  font-family: 'Inter_500Medium';
  font-size: 14px;
  font-style: normal;
  color: #4D4D4D;

  width: 245px;
  height: 34px;
  padding: 7px 16px;
  border-radius: 60px;
`;

export const NextButton = styled(LinearGradient)`
    width: 124px;
    height: 40px;
    flex-shrink: 0;
    border-radius: 60px;

    display: flex;
    justify-content: center;`;

// Estilize o conteúdo do botão dentro do LinearGradient
export const NextButtonText = styled.Text`
    color: white;
    text-align: center;
`;
