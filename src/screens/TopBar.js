import React, {Component} from 'react';
import { Alert } from 'react-native';
import styled from 'styled-components/native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

const notImplemented = () => Alert.alert( 'WIP', 'Not Implemented Yet!', [{text: 'OK' }], { cancelable: true } );

export default class TopBar extends Component {
  render() {
    return (
      <Container>
        <Caption balance={1000} accountType={'Virtual Account'} />
        <AddIcon onPress={notImplemented}/>
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

const AddIcon = (() => {
  const Icon = styled(EvilIcons).attrs({name: 'plus', color: 'black'})`
    font-size: 30px;
    padding: 15px 10px;
  `;
  const Touchable = styled.TouchableWithoutFeedback`
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
