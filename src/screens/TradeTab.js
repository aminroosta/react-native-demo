import React, {Component} from 'react';
import styled from 'styled-components/native';
import { Alert } from 'react-native';
import TradeChartView from '../components/TradeChartView';
import * as Animatable from 'react-native-animatable';

const notImplemented = () => Alert.alert( 'WIP', 'Not Implemented Yet!', [{text: 'OK' }], { cancelable: true } );

class TradeTab extends Component {
  render() {
    return (
      <Container>
        <ChartView />
        <Parameters />
        <Bottom />
      </Container>
    );
  }
};

const Container = styled.View`
  flex: 1;
  background: white;
`;
const Bottom = styled.View`
  flex: 1;
  background-color: white;
`;
const ChartView = styled(TradeChartView)`
  height: ${200}px;
  width: 100%;
`;

const Parameters = (() => {
  const Container = styled(Animatable.View)`
    flex-direction: row;
    width: 100%;
    height: 100px;
    padding: 4px;
  `;
  const Touchable = styled.TouchableWithoutFeedback``;
  const Wrapper = styled.View.attrs({elevation: 4})`
    flex: 1;
    background-color: white;
    border-radius: 5px;
    justify-content: flex-start;
    alignItems: center;
    margin: 4px;
  `;
  const TopText = styled.Text`
    color: #A4A4A4;
    font-size: 8px;
    margin-top: 8px;
  `;
  const MidText = styled.Text`
    color: black;
    font-size: 12px;
    top: 20px;
  `;
  const Box = ({onPress, text, title}) => (
    <Touchable onPress={onPress}>
      <Wrapper>
        <TopText>{title}</TopText>
        <MidText>{text}</MidText>
      </Wrapper>
    </Touchable>
  );

  return () => (
    <Container>
      <Box text={'Raise/Fall'} title={'Trade Type'} onPress={notImplemented} />
      <Box text={'Now'} title={'Start Time'} onPress={notImplemented} />
      <Box text={'3 Minutes'} title={'< Duration >'} onPress={notImplemented} />
    </Container>
  );
})();


export default TradeTab;

