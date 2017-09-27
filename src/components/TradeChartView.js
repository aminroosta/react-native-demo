import React, {Component} from 'react';
import styled from 'styled-components/native';
import { Alert } from 'react-native';
import LineChart from './LineChart';
import * as Animatable from 'react-native-animatable';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const notImplemented = () => Alert.alert( 'Work In Progress!', 'Not Implemented Yet.', [{text: 'OK' }], { cancelable: true } );

export default class TradeChartView extends Component {
  render() {
    return (
      <Container style={this.props.style}>
        <Chart />
        <Settings />
        <Title onPress={notImplemented} text={'AUD/JPY'} />
      </Container>
    );
  }
};

const Container = styled(Animatable.View).attrs({transition: ['height'], easing: 'ease-in', duration: 1000})`
`;
const Chart = styled(LineChart)`
  margin-top: 20px;
  flex: 1;
`;

const Title = (() => {
  const Touchable = styled.TouchableWithoutFeedback``;
  const Wrapper = styled.View.attrs({elevation: 5})`
    width: 110px;
    height: 30px;
    border-radius: 5px;
    background-color: white;
    justify-content: center;
    align-items: center;
  `;
  const Text = styled.Text`
    font-size: 14px;
    color: black;
  `;
  const Container = styled.View.attrs({pointerEvents: 'box-none'})`
    position: absolute;
    top: 5px;
    width: 100%;
    flex-direction: row;
    justify-content: center;
  `;

  return ({onPress, text}) => (
    <Container>
      <Touchable onPress={onPress}>
        <Wrapper>
          <Text>{text}</Text>
        </Wrapper>
      </Touchable>
    </Container>
  );
})();

const Settings = (() => {
  const GearIcon = styled(Octicons).attrs({name: 'gear', color: 'black'})`
    font-size: 16px;
    left: 1px;
  `;
  const ExpandIcon = styled(MaterialCommunityIcons).attrs({name: 'arrow-expand', color: 'black'})`
    font-size: 16px;
  `;
  const CollapseIcon = styled(MaterialCommunityIcons).attrs({name: 'arrow-collapse', color: 'black'})`
    font-size: 16px;
  `;
  const Circle = styled.View.attrs({elevation: 10})`
    width: 26px;
    height: 26px;
    border-radius: 13px;
    background-color: white;
    justify-content: center;
    align-items: center;
  `;
  const Touchable = styled.TouchableWithoutFeedback``;
  const Container = styled.View.attrs({pointerEvents: 'box-none'})`
    position: absolute;
    width: 100%;
    height: 80px;
    background-color: transparent;
    align-items: flex-end;
    justify-content: space-around;
    padding-right: 10px;
    padding-bottom: 10px;
  `;
  return () => (
    <Container>
      <Touchable onPress={notImplemented}>
        <Circle>
          <GearIcon/>
        </Circle>
      </Touchable>
      <Touchable onPress={notImplemented}>
        <Circle>
          <ExpandIcon/>
        </Circle>
      </Touchable>
    </Container>
  );
})();
