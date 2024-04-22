import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet } from 'react-native';

function PortfolioScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Profil Saya</Text>
      <Image
        style={styles.image}
        source={{ uri: "https://i.pravatar.cc/150?img=3" }}
      />
      <Text style={styles.text}>Nama: John Doe</Text>
      <Text style={styles.text}>Pengalaman Kerja: Software Developer di XYZ Corp selama 5 tahun</Text>
      <Text style={styles.text}>Pendidikan: S1 Teknik Informatika di Universitas ABC</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: 'center',
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default PortfolioScreen;
