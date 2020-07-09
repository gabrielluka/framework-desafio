import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 0px 16px 0px 16px;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

export const TextBody = styled.Text`
  margin-top: 16px;
  font-size: 15px;
`;

export const TitleStatus = styled.Text`
  font-size: 22px;
  font-weight: bold;
`;

export const Row = styled.View`
  margin: 10px;
  flex-direction: row;
  justify-content: center;
`;

export const ToggleButton = styled.Switch`
  margin-left: 16px;
  margin-right: 16px;
`;
