import React from 'react';
import { Text, StyleSheet, View, FlatList } from 'react-native';
import { colors } from '../utils/colors';
import { fontSize, spacing } from '../utils/size';

export const FocusHistory = ({ history }) => {


if(!history || history.length) return <Text style={styles.notFocused}>We havent focused on anything yet</Text>;
  
  const renderItem = ({ item }) => <Text style={styles.text}>-{item}</Text>;
  return (
    <>
      <View style={styles.view}>
        <Text style={styles.text}>Things we focused on:</Text>
        <FlatList data={history} renderItem={renderItem}  />
        
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  text: {
    color: colors.white,
    fontSize: fontSize.md,
    fontWeight: 'bold',
  },
  notFocused:{
    color:colors.white,
    alignItems:"center",
    padding:spacing.lg
  },
  view: {
    alignItems: 'center',
  },
});
