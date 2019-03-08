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
  TouchableHighlight
} from "react-native";

type Props = {};
type State = {
  ready: boolean
};

import Fade from "./components/Fade";
import SlideUp from "./components/SlideUp";
import SlideDown from "./components/SlideDown";
import SlideInRight from "./components/SlideInRight";
import Rotate from "./components/Rotate";
import Zoom from "./components/Zoom";
export default class App extends Component<Props, State> {
  state = {
    ready: false
  };
  render() {
    let { ready } = this.state;
    return (
      <View style={styles.container}>
        <View style={{ flex: 1 }}>
          <TouchableHighlight
            onPress={() => this.setState({ ready: true })}
            style={styles.btn}
          >
            <Text>Start</Text>
          </TouchableHighlight>
        </View>
        {/* <Fade style={styles.item} duration={300} startWhen={ready}>
          <Text>Hello world center center center scsdgsdklgkdslgsdkl;;'</Text>
        </Fade> */}
        {/* <SlideUp
          style={{ backgroundColor: "orange", flex: 1 }}
          startWhen={ready}
        >
          <Text>Slide Up component</Text>
        </SlideUp> */}
        <Zoom
          sets={{ from: 0, to: 2 }}
          direction="out"
          style={{ backgroundColor: "purple", padding: 10 }}
          duration={50}
          startWhen={ready}
        >
          <Text>Slide infinite animation</Text>
        </Zoom>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#ccc"
  },
  btn: {
    marginTop: 60,
    justifyContent: "center",
    alignItems: "center",
    width: 150,
    height: 60,
    backgroundColor: "blue",
    padding: 4
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  item: {
    width: 200,
    height: 150,
    padding: 3,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#c00"
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
