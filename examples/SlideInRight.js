/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity,
  Image
} from "react-native";
import styled from "styled-components/native";

/**------------------- Styled component  -----------------*/
import { Container, Button, ButtonText, Card, WhiteText } from "./style";

type Props = {};
type State = {
  ready: boolean
};

import { SlideInRight } from "./../index";
export default class App extends Component<Props, State> {
  state = {
    ready: false
  };
  render() {
    let { ready } = this.state;
    return (
      <Container>
        <Button onPress={() => this.setState({ ready: true })}>
          <ButtonText>Start</ButtonText>
        </Button>

        <SlideInRight duration={100} startWhen={ready}>
          <Card>
            <WhiteText>SlideInRight animation</WhiteText>
          </Card>
        </SlideInRight>
      </Container>
    );
  }
}
