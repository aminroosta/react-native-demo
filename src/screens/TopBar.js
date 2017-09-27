import React, {Component} from 'react';
import { Alert, Dimensions } from 'react-native';
import styled from 'styled-components/native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {toggleDrawer} from '../screens/Drawer';

const notImplemented = () => Alert.alert( 'WIP', 'Not Implemented Yet!', [{text: 'OK' }], { cancelable: true } );

export default class TopBar extends Component {
  render() {
    return (
      <Container>
        <MenuIcon onPress={toggleDrawer}/>
        <Caption balance={1000} accountType={'Virtual Account'} />
        <AddIcon onPress={notImplemented}/>
        <BorderBottom />
      </Container>
    );
  }
};

const Container = styled.View`
  flex: 1;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: white;
`;
const BorderBottom = styled.View`
  height: 0.5px;
  width: ${Dimensions.get('window').width}px;
  position: absolute;
  bottom: 0;
  background-color: black;
`;

const Touchable = styled.TouchableWithoutFeedback``;
const AddIcon = (() => {
  const Icon = styled(EvilIcons).attrs({name: 'plus', color: 'black'})`
    font-size: 30px;
    padding: 15px 10px;
  `;
  return ({onPress}) => (
    <Touchable onPressIn={onPress}>
      <Icon />
    </Touchable>
  );
})();
const MenuIcon = (() => {
  const Icon = styled(MaterialCommunityIcons).attrs({name: 'menu', color: 'black'})`
    font-size: 30px;
    padding: 15px 10px;
  `;
  return ({onPress}) => (
    <Touchable onPressIn={onPress}>
      <Icon />
    </Touchable>
  );
})();

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
