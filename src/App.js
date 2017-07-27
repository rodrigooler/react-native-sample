// @flow

import React from 'react';
import { AppRegistry } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #f5fcff;
`;

const Title = styled.Text`
  font-size: 20;
  text-align: center;
  padding: 10px;
`;

const Text = styled.Text`
  text-align: center;
  color: #333333;
  margin-bottom: 5;
`;

const ReactNativeSample = () =>
  <Container>
    <Title>Welcome to React Native!</Title>
    <Text>To get started, edit index.android.js</Text>
    <Text>
      Double tap R on your keyboard to reload,{'\n'}
      Shake or press menu button for dev menu
    </Text>
  </Container>;

AppRegistry.registerComponent('ReactNativeSample', () => ReactNativeSample);
