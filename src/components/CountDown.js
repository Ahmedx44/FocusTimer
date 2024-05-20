import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { colors } from '../utils/colors'
import { fontSize, spacing } from '../utils/size'

// Minutes to millis
const minutesToMillis = (min) => min * 60 * 1000


// Millis to minutes
const formateTime = (millis) => {
  const minutes = Math.floor(millis / 1000 / 60) % 60
  const seconds = Math.floor(millis / 1000) % 60
  return `${minutes < 10 ? 0 : ''}${minutes}:${
    seconds < 10 ? '0' : ''
  }${seconds}`
}

export const CountDown = ({ minutes, isPaused, onProgress, onEnd }) => {
  const [millis, setmillis] = React.useState(minutesToMillis(minutes))
  const reset=()=>setmillis(minutesToMillis(minutes))

  const interval = React.useRef(null)

  const countDown = () => {
    let timeLeft
    setmillis((time) => {
      if (time === 0) {
        clearInterval(interval.current)
        return time
      }
      timeLeft = time - 1000
      return timeLeft
    })
    if (timeLeft === 0) {
      clearInterval(interval.current)
      onEnd(reset)
    }
    if (timeLeft > 0) {
      onProgress(timeLeft / minutesToMillis(minutes))
    } else {
      onProgress(0)
    }
  }

  React.useEffect(() => {
    setmillis(minutesToMillis(minutes))
  }, [minutes])

  React.useEffect(() => {
    if (!isPaused) {
      interval.current = setInterval(countDown, 1000)
      return () => clearInterval(interval.current)
    }
  }, [isPaused])

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{formateTime(millis)}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {},
  text: {
    fontSize: fontSize.xxxl,
    fontWeight: 'bold',
    color: colors.dark,
    backgroundColor: colors.white,
    paddingVertical: spacing.lg,
    paddingHorizontal: spacing.xl,
    borderRadius: 100,
  },
})

