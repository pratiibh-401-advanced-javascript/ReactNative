import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Gyroscope } from 'expo-sensors';


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Welcome to the Scooby Doo experience</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
