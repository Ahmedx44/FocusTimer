import {
  Text,
  SafeAreaView,
  StyleSheet,
  Platform,
  StatusBar,
  View,
} from 'react-native';
import { colors } from './src/utils/colors';
import { Focus } from './src/features/Focus';
import React, { useState } from 'react';
import { spacing, fontSize } from './src/utils/size';
import { Timer } from './src/features/Timer';
import { FocusHistory } from './src/features/FocusHistory';

function App() {
  const [currentSubject, setCurrentSubject] = useState();
  const [history, setHistory] = useState([]);

  return (
    <SafeAreaView style={styles.container}>
      {!currentSubject ? (
        <>
          <Focus setCurrentSubject={setCurrentSubject} style={styles.focus} />
          <FocusHistory history={history} style={styles.history} />
        </>
      ) : (
        <Timer
          focusSubject={currentSubject}
          onTimerEnd={(subject) => {
            setHistory([...history,subject])
          }}
          clearSubject={() => {
            setCurrentSubject(null);
          }}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: colors.dark,
  },
  focus: {
    flex: 1,
  },
  history: {
    flex: 1,
    
  },
});

export default App;
