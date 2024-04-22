import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';

function ContactScreen() {
  const [inputText, setInputText] = useState('');

  const handleButtonClick = () => {
    console.log("Input value: ", inputText);
    alert(`Input Value: ${inputText}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.subheading}>Hubungi Kami</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email..."
        onChangeText={setInputText}
        value={inputText}
      />
      <Button title='Submit' onPress={handleButtonClick} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  subheading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    width: '100%',
  },
});

export default ContactScreen;
