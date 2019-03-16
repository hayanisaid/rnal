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
