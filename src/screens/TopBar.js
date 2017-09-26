import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Alert,
} from 'react-native';
import styled from 'styled-components/native';

export default class TopBar extends Component {
  render() {
    return (
      <Container>
        <MenuIcon > golabi </MenuIcon>
        <Caption balance={1000} accountType={'Virtual Account'} />
        <AddIcon > add </AddIcon>
      </Container>
    );
  }
};

const Container = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: white;
`;

const AddIcon = styled.Text``;
const MenuIcon = styled.Text`
`;

const Caption = (() => {
  const Balance = styled.Text`
    font-size: 20px;
    color: black;
    font-family: Roboto;
  `;
  const Subtitle = styled.Text`
    font-size: 12px;
    color: black;
    font-weight: 100;
  `;
  const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
  `;

  const formatter = n => n.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
  return ({balance, accountType}) => (
    <Container>
      <Balance>${formatter(balance)}</Balance>
      <Subtitle>{accountType}</Subtitle>
    </Container>
  );
})(); 
