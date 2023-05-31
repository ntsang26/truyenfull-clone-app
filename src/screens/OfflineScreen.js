import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const OfflineScreen = () => {
  return (
    <View style={styles.container}>
      <Text>OfflineScreen</Text>
    </View>
  )
}

export default OfflineScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "center"
  }
})