import React, {Component} from 'react';
import styled from 'styled-components/native';
import LineChart from '../components/LineChart';
import {View, Text} from 'react-native';

class TradeTab extends Component {

  render() {
    return (
      <Container>
        <Chart />
      </Container>
    );
  }
};

const Container = styled.View``;
const Chart = styled(LineChart)`
  width: 100%;
  height: 300px;
  border: 1px solid red;
`;

export default TradeTab;

