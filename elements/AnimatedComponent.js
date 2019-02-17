import React, { Component } from 'react'
import { Text, View ,Animated} from 'react-native'
import PropTypes from "prop-types";

export default class AnimatedComponent extends Component {
    state={
        
    }

    static propTypes={
        direction:PropTypes.string,
        duration:PropTypes.number,
        style:PropTypes.any,
        children:PropTypes.any
    }
  render() {
      const directions={
          fade:[0,1],
         down:[0,1],
         up:[0,3],
         left:[0,3],
         right:[0,4]
  }
    return (
      <View>
        <Text> textInComponent </Text>
        <Text>hello</Text>
      </View>
    )
  }
}
