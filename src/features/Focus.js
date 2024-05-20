// In Focus.js
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { RoundedButton } from '../components/RoundedButton'; // Ensure the path is correct
import { colors } from '../utils/colors';
import  {spacing,fontSize} from "../utils/size"

export const Focus = ({setCurrentSubject}) => {
  const [subject, setSubject] = useState(null);
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          label="What would you like to focus on?"
          onChangeText={setSubject}
          style={styles.textinput}
        />
        <View style={styles.button}>
          <RoundedButton title="+" size={50} onPress={()=>setCurrentSubject(subject)}/>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    
  },
  textinput: {
    flex:1,
    marginRight: spacing.sm,
  },
  button: {
    justifyContent: 'center',
  },
  inputContainer: {
    padding: spacing.lg,
    flexDirection: 'row',
  },
});
