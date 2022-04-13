import React from 'react';
import { StyleSheet, Text, View, Pressable, Image } from 'react-native';

export default function App() {
  function onPressLearnMore(){

  }

  return (
    <View style={styles.container}>
      <Image 
        source={require('./images/motorista.png')}
        style={{ width: 100, height: 100, marginTop: -250, marginBottom: 50 }}
      />
      <Text style={styles.title}>Clone Uber</Text>
      <Text style={styles.text}>Bem vindo ao clone uber!</Text>
      <Pressable style={styles.button} onPress={onPressLearnMore}>
        <Text style={styles.text}>Começar</Text>
    </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    top: 0,
    left: 0,

    width: '100vw',
    height: '100vh',

    flex: 1,
    backgroundColor: 'rgb(0, 0, 255)',
    alignItems: 'center',
    justifyContent: 'center',
  },

  button: {
    position: 'absolute',
    left: 'auto',
    bottom: '10vh',
    
    backgroundColor: '#000',

    width: '95vw',
    height: '60px',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    position: 'absolute',
    left: 'auto',
    top: '10vh',

    color: '#fff',

    fontSize: 30,
    fontWeight: "500"
  },

  text: {
    color: '#fff',

    fontSize: 20,
  }
});
