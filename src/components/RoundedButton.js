// In RoundedButton.js
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { colors } from '../utils/colors';
import {spacing,fontSize} from "../utils/size";

export const RoundedButton = ({
  title,
  style = {},
  textStyle = {},
  size = 100,
  ...restProps
}) => {
  return (
    <TouchableOpacity style={[styles(size).container, style]} {...restProps}>
      <Text style={[styles(size).text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = (size) =>
  StyleSheet.create({
    container: {
      width: size,
      height: size,
      borderRadius: size / 2,
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: colors.white,
      borderWidth: 2,
      padding:10,
     
    },
    text: {
      color: colors.white,
      fontSize:20,
    },
  });


