import React, {Component} from 'react';
import styled from 'styled-components/native';
import { Alert } from 'react-native';
import TradeChartView from '../components/TradeChartView';
import * as Animatable from 'react-native-animatable';
import { connect } from '../stores';

const notImplemented = () => Alert.alert( 'WIP', 'Not Implemented Yet!', [{text: 'OK' }], { cancelable: true } );

class TradeTab extends Component {
  render() {
    return (
      <Container>
        <TradeChartView />
        <Parameters />
        <Payout />
        <PurchaseRow />
      </Container>
    );
  }
};

const Container = styled.View`
  flex: 1;
  background: white;
`;

const Parameters = (() => {
  const Container = styled(Animatable.View).attrs({
    transition: ['translateY'],
    easing: 'ease',
    duration: 300,
    useNativeDriver: true
  })`
    flex-direction: row;
    width: 100%;
    height: 100px;
    padding: 4px;
    transform: translateY(${p => p.chartMode === 'big' ? 80 : 0}px);
  `;
  const Touchable = styled.TouchableWithoutFeedback``;
  const Wrapper = styled.View.attrs({elevation: 3})`
    flex: 1;
    background-color: white;
    border-radius: 5px;
    justify-content: flex-start;
    alignItems: center;
    margin: 4px;
  `;
  const Title = styled.Text`
    color: #A4A4A4;
    font-size: 8px;
    margin-top: 8px;
  `;
  const Value = styled.Text`
    color: black;
    font-size: 12px;
    top: 20px;
  `;
  const Box = ({onPress, value, title}) => (
    <Touchable onPress={onPress}>
      <Wrapper>
        <Title>{title}</Title>
        <Value>{value}</Value>
      </Wrapper>
    </Touchable>
  );

  const Parameters = ({tradeType, startTime, duration, chartMode}) => (
    <Container chartMode={chartMode}>
      <Box value={tradeType} title={'Trade Type'} onPress={notImplemented} />
      <Box value={startTime} title={'Start Time'} onPress={notImplemented} />
      <Box value={duration} title={'< Duration >'} onPress={notImplemented} />
    </Container>
  );
  return connect(
    ({trade}) => ({
      tradeType: trade.tradeType,
      startTime: trade.startTime,
      chartMode: trade.chartMode,
      duration: `${trade.duration} ${trade.durationUnit}`
    }),
  )(Parameters);
})();

const Payout = (() => {
  const Touchable = styled.TouchableWithoutFeedback` `;
  const Container = styled(Animatable.View).attrs({
    transition: ['translateY', 'opacity'],
    easing: 'ease',
    duration: 300,
    useNativeDriver: true,
  })`
    padding: 4px 8px;
    width: 100%;
    height: 80px;
    transform: translateY(${p => p.chartMode === 'big' ? 80 : 0}px);
    opacity: ${p => p.chartMode === 'big' ? 0 : 1};
  `;
  const Text = styled(Animatable.Text).attrs({transition: 'color', duration: 300})`
    font-size: 12px;
    color: ${p => p.active ? '#4A76E2' : '#DEDEDE'};
    padding: 15px 5px;
  `;
  const Button = ({active, onPress, children}) => (
    <Touchable onPress={onPress}>
      <Text active={active}>
        {children}
      </Text>
    </Touchable>
  );
  const Input = styled.TextInput.attrs({
    keyboardType: 'numeric',
    blurOnSubmit: true,
    underlineColorAndroid: 'black',
  })`
    flex: 1;
    font-size: 20px;
    font-weight: bold;
    margin: 0 10px;
  `;
  const Wrapper = styled.View.attrs({elevation: 3})`
    flex: 1;
    justify-content: flex-start;
    border-radius: 5px;
    align-items: center;
    flex-direction: row;
    padding-left: 10px;
    background-color: white;
  `;
  const Payout = ({payoutType, setPayout, setStake, amount, onAmountChange, chartMode}) => (
    <Container chartMode={chartMode}>
      <Wrapper>
        <Button active={payoutType === 'payout'} onPress={setPayout}>Payout</Button>
        <Button active={payoutType === 'stake'} onPress={setStake}>Stake</Button>
        <Input value={amount} onChangeText={onAmountChange} />
      </Wrapper>
    </Container>
  );
  return connect(
    ({trade}) => ({
      payoutType: trade.payoutType,
      setPayout: () => trade.payoutType = 'payout',
      setStake: () => trade.payoutType = 'stake',
      amount: trade.amount+'',
      chartMode: trade.chartMode,
      onAmountChange: text => trade.amount = +text
    })
  )(Payout);
})();

const PurchaseRow = (() => {
  const Touchable = styled.TouchableWithoutFeedback``;
  const Container = styled(Animatable.View)`
    height: 100px;
    flex-direction: row;
    padding: 10px 3px;
  `;
  const Text = styled.Text`
    font-size: 12px;
    color: white;
  `;
  const Texts = styled.View`
    flex: 1;
    justify-content: center;
    padding-left: 10px;
  `;
  const Wrapper = styled.View`
    flex: 1;
    justify-content: space-between;
    background-color: #4A4A4A;
    border-radius: 5px;
    margin: 0 5px;
  `;
  const Foot = styled.View`
    height: 30px;
    width: 100%;
    background-color: #9B9B9B;
    justify-content: center;
    align-items: center;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
  `;
  const Button = ({stake, payout, children, title}) => (
    <Wrapper>
      <Texts>
        <Text>Stake: ${stake}</Text>
        <Text>Payout: ${payout}</Text>
      </Texts>
      <Foot>
        <Text>{title}</Text>
      </Foot>
    </Wrapper>
  );
  const ButtonLeft = connect(
    ({trade}) => ({
      stake: (trade.amount * 0.45).toFixed(2),
      payout: trade.amount + '',
      title: 'Purchase Lower' 
    })
  )(Button);
  const ButtonRight = connect(
    ({trade}) => ({
      stake: (trade.amount * 0.45).toFixed(2),
      payout: trade.amount + '',
      title: 'Purchase Higher' 
    })
  )(Button);

  return () => (
    <Container>
      <ButtonLeft />
      <ButtonRight />
    </Container>
  );
})();

export default TradeTab;

