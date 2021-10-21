import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function App() {
  let x = 1;
  return (
    <SafeAreaView style={styles.container}>
      <Text
      numberOfLines={1}
      onPress={() => console.log('clickity clackity')}
      >I'm a little itty bitty cowww who wants to be in an itty bitty pasture who loves to mooooooo</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
  },
});
