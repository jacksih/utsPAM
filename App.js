import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import React from 'react';
import CarList from './Items/layar/carsList/listCar';
import Ambilgambar from './Items/layar/uploadImage/uploadImage';

export default function App() {
  return (
    <View style={styles.container}>
      <Ambilgambar/>
      <CarList />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D3D3D3',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
