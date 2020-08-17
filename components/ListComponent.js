import React from 'react';
import { Text,  View, TouchableOpacity, StyleSheet, Button } from 'react-native';


export default function ListComponent({item}) {
    return (
        <TouchableOpacity style={styles.listComponent}>
            <View style={styles.listView}>
                <Text style={styles.listText}>
                    {item.todoText}
                </Text>
                <Button title="Delete!" color="red">Delete!</Button>
            </View>
        </TouchableOpacity>
    );
  }

  const styles = StyleSheet.create({
    listComponent: {
        padding: 15,
        backgroundColor: '#f8f8f8',
        borderBottomWidth: '1',
        borderColor: '#eee'
    },
    listView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
  })