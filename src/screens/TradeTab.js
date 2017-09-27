import React, {Component} from 'react';
import styled from 'styled-components/native';
import TradeChartView from '../components/TradeChartView';

class TradeTab extends Component {
  render() {
    return (
      <Container>
        <ChartView />
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
  background-color: skyblue;
`;
const ChartView = styled(TradeChartView)`
  height: ${300}px;
  width: 100%;
`;

export default TradeTab;

