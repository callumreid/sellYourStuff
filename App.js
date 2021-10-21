import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight,
  Button,
  Alert} from 'react-native';

export default function App() {
  const handlePress = () => console.log('clickity clackity hipdiddy smackity');

  return (
    <SafeAreaView style={styles.container}>
      <Button title='clickMe'
      onPress={() => Alert.alert('do u like cows?', 'mooooo')}
      color='orange' />
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
