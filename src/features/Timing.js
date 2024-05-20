import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import {RoundedButton} from "../components/RoundedButton";
import {fontSize,spacing} from "../utils/size"

export const Timing = ({onChangeTime}) => {
  return (
    <>
    <View style={styles.timing}>
      <View>
      <RoundedButton title="10" onPress={()=>onChangeTime(10)}/>
      </View>
      <View>
      <RoundedButton title="15" onPress={()=>onChangeTime(15)} />
      </View>
       <View>
      <RoundedButton title="20"  onPress={()=>onChangeTime(20)}/>
      </View>
    </View>
    </>
  );
};

const styles=StyleSheet.create({
  timing:{
    flexDirection:"row",
   justifyContent:"space-between",
   padding:spacing.lg
  }
})
