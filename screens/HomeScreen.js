import React from 'react';
import { StyleSheet, View, Text, Button, Image } from 'react-native';

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Selamat Datang di Perusahaan Kami!</Text>
      <Image
        style={styles.logo}
        source={{ uri: "https://i.pinimg.com/474x/1d/74/3b/1d743bb41490128be1b2a0edc8a3e000.jpg" }}
      />
      <Text style={styles.text}>Kenyamanan Anda adalah prioritas utama</Text>
      <Button
        title="Go to Contact Page"
        onPress={() => navigation.navigate('Contact')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
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
});

export default HomeScreen;
