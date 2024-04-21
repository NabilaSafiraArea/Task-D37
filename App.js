// Importing necessary components from React Native
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, Image, TextInput, Button, StatusBar, TouchableOpacity } from 'react-native';

export default function App() {
  const [inputText, setInputText] = useState("");

  // Function to handle button click
  const handleButtonClick = () => {
    console.log("Input value: ", inputText);
    alert(`Input Value: ${inputText}`);
  };

  return (
    <ScrollView style={styles.scrollView}>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source= {{URL: "https://i.pinimg.com/474x/1d/74/3b/1d743bb41490128be1b2a0edc8a3e000.jpg"}} />
        <Text style={styles.heading}>Selamat Datang di Perusahaan Kami!</Text>
        <Text style={styles.text}>Kenyamanan Anda adalah prioritas utama</Text>
        
        <View style={styles.features}>
          <Text style={styles.subheading}>Layanan</Text>
          <View style={styles.services}>
            <Text style={styles.serviceItem}>Kosultasi</Text>
            <Text style={styles.serviceItem}>Pengembangan</Text>
            <Text style={styles.serviceItem}>Dukungan</Text>
          </View>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.subheading}>Hubungi Kami</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your email..."
            onChangeText={setInputText}
            value={inputText}
          />
          <Button title='Submit' onPress={handleButtonClick} />
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>Contact us: +62 3456 7896</Text>
          <Text style={styles.footerText}>Email: sejahtera@bersama.co.id</Text>
        </View>
      </View>
    </ScrollView>
  );
}

// Defining the styles for the app
const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
  },
  subheading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  inputContainer: {
    width: '90%',
  },
  input: {
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    width: '100%',
  },
  features: {
    width: '90%',
    alignItems: 'center',
  },
  services: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
  },
  serviceItem: {
    fontSize: 16,
    fontWeight: '500',
  },
  footer: {
    marginTop: 20,
    borderTopWidth: 1,
    borderColor: 'lightgray',
    paddingTop: 10,
  },
  footerText: {
    fontSize: 16,
  },
});
