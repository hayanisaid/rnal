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

type Props = {};
type State = {
  ready: boolean
};

// import Fade from "./components/Fade";
// import SlideUp from "./components/SlideUp";
// import SlideDown from "./components/SlideDown";
// import SlideInRight from "./components/SlideInRight";
// import Rotate from "./components/Rotate";
// import Zoom from "./components/Zoom";
import {
  Fade,
  SlideDown,
  SlideInRight,
  SlideUp,
  Zoom,
  Rotate,
  SlideInLeft
} from "./index";
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

        {/* <Fade style={styles.item} duration={300} startWhen={ready}>
          <Text>Hello world center center center scsdgsdklgkdslgsdkl;;'</Text>
        </Fade> */}
        {/* <SlideUp
          style={{ backgroundColor: "orange", flex: 1 }}
          startWhen={ready}
        >
          <Text>Slide Up component</Text>
        </SlideUp> */}
        <Fade duration={100} startWhen={ready}>
          <Image
            source={require("./images/flowrs.jpg")}
            height={200}
            width={450}
            style={{ width: 350, height: 200 }}
            resizeMode="cover"
          />
        </Fade>
        {/* <SlideDown startWhen={ready}>
          <Card>
            <WhiteText>SlideDown animation</WhiteText>
          </Card>
        </SlideDown> */}
      </Container>
    );
  }
}

const WhiteText = styled.Text`
  color: #f4f4f4;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
`;
const Button = styled.TouchableOpacity`
  background: #560764;
  padding: 5px;
  width: 100px;
  height: 40px;
  margin-bottom: 40px;
  align-items: center;
  border-radius: 10px;
`;
const Card = styled.View`
  width: 150px;
  height: 150px;
  border-radius: 13px;
  justify-content: center;
  align-items: center;
  background: #572121;
  padding: 10px;
`;
const ButtonText = styled.Text`
  color: #f4f4f4;
  font-size: 16px;
  font-weight: bold;
`;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: #fff;
`;
