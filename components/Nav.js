import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';


export default function Nav() {
    return (
      <View style={styles.nav}>
        <Text style={styles.text}>Nav!!</Text>
      </View>
    );
  }

  const styles = StyleSheet.create({
    nav: {
        height: 60,
        padding: 15,
        backgroundColor: 'teal'
    },
    text: {
        color: 'white',
        fontSize: 23,
        textAlign: 'center'
    }
})