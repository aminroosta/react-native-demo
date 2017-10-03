import React, {Component} from 'react';
import styled from 'styled-components/native';
import { Alert } from 'react-native';
import LineChart from './LineChart';
import * as Animatable from 'react-native-animatable';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { connect } from '../stores';

const notImplemented = () => Alert.alert( 'Work In Progress!', 'Not Implemented Yet.', [{text: 'OK' }], { cancelable: true } );

export default class TradeChartView extends Component {
  state = { height: 0 };
  onLayout = event => {
    this.setState({height: event.nativeEvent.layout.height});
  };
  render() {
    const {style} = this.props;
    const {height} = this.state;
    return (
      <Container style={style}>
        <ChartView />
        <Settings />
        <Title onPress={notImplemented} text={'AUD/JPY'} />
      </Container>
    );
  }
};

const Container = styled.View`
  flex: 1;
`;

const ChartView = (() => {
  let Wrapper = styled(Animatable.View).attrs({
    transition: ['translateY'],
    easing: 'ease',
    duration: 300,
    useNativeDriver: true
  })`
    flex: 1;
    transform: translateY(${p => p.translate}px);
  `;
  Wrapper = connect(
    ({trade}) => ({
      translate: trade.chartMode === 'normal' ? 0 : 80,
    })
  )(Wrapper);

  const Chart = styled(LineChart)`
    margin-top: 20px;
    flex: 1;
  `;
  return () => (
    <Wrapper>
      <Chart />  
    </Wrapper>
  );
})();

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
    font-size: 20px;
  `;
  const CollapseIcon = styled(MaterialCommunityIcons).attrs({name: 'arrow-collapse', color: 'black'})`
    font-size: 20px;
  `;
  const Circle = styled.View.attrs({elevation: 10})`
    width: 36px;
    height: 36px;
    border-radius: 18px;
    background-color: white;
    justify-content: center;
    align-items: center;
  `;
  const Touchable = styled.TouchableWithoutFeedback``;
  const Container = styled.View.attrs({pointerEvents: 'box-none'})`
    position: absolute;
    width: 100%;
    height: 100px;
    background-color: transparent;
    align-items: flex-end;
    justify-content: space-around;
    padding-right: 10px;
    padding-bottom: 10px;
  `;
  const Settings = ({chartMode, toggleMode}) => (
    <Container>
      <Touchable onPress={notImplemented}>
        <Circle>
          <GearIcon/>
        </Circle>
      </Touchable>
      <Touchable onPressIn={toggleMode}>
        <Circle>
          { chartMode === 'normal' ? <ExpandIcon/> : <CollapseIcon /> }
        </Circle>
      </Touchable>
    </Container>
  );
  return connect(
    ({trade}) => ({
      chartMode: trade.chartMode,
      toggleMode: () => trade.toggleChartMode(),
    })
  )(Settings);
})();
