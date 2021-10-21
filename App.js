import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';

export default function App() {
  const handlePress = () => console.log('clickity clackity hipdiddy smackity');

  return (
    <SafeAreaView style={styles.container}>
      <Text
      onPress={handlePress}
      >I'm a little teeny weeny itty bitty cowww who wants to be in an itty bitty pasture who loves to mooooooo
      </Text>
      <Image source={{
        width: 200,
        height: 300,
        uri: 'https://picsum.photos/200/300'}} />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },
});
