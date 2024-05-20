import React, { useState } from 'react';
import { View, Text, StyleSheet, Vibration } from 'react-native';
import { CountDown } from '../components/CountDown';
import { spacing, fontSize } from '../utils/size';
import { colors } from '../utils/colors';
import { RoundedButton } from '../components/RoundedButton';
import { ProgressBar, MD3Colors } from 'react-native-paper';
import {useKeepAwake} from "expo-keep-awake";
import { Timing } from './Timing';

export const Timer = ({ focusSubject, clearSubject,onTimerEnd }) => {
  useKeepAwake();
  const ONE_SECOND_IN_MS = 1000;

  const PATTERN = [
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
  ];

  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(1);
  const [minute, setMinute] = useState(0.1);

  const onEndd = (reset) => {
    setMinute(0.1);
    Vibration.vibrate(PATTERN);
    setProgress(1);
    onTimerEnd(focusSubject)
  };

  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <CountDown
          minutes={minute}
          isPaused={!isStarted}
          onProgress={(progress) => {
            setProgress(progress);
          }}
          onEnd={onEndd}
        />
        <View style={styles.title}>
          <Text style={styles.text}>Fosuing on:</Text>
          <Text style={styles.subject}>{focusSubject}</Text>
        </View>
      </View>
      <View>
        <ProgressBar
          style={styles.progress}
          color={colors.white}
          progress={progress}
        />
      </View>
      <View>
        <Timing style={styles.timing} onChangeTime={setMinute} />
      </View>
      <View style={styles.buttonWrapper}>
        {!isStarted ? (
          <RoundedButton title="Start" onPress={() => setIsStarted(true)} />
        ) : (
          <RoundedButton title="Pause" onPress={() => setIsStarted(false)} />
        )}
      </View>
      <View style={styles.clear}>
        <RoundedButton title="clear" onPress={clearSubject} size={100} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  clear: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  progress: {
    height: spacing.sm,
    color: 'white',
  },

  title: {
    color: colors.white,
    marginTop: spacing.xxl,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  text: {
    color: 'white',
    fontSize: fontSize.lg,
    fontWeight: 'bold',
  },
  subject: {
    fontSize: fontSize.md,
    color: colors.white,
  },
  countdown: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonWrapper: {
    flex: 0.3,
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.xl,
    padding: 15,
    flexDirection: 'row',
    backgroundColor: colors.dark,
  },
});
