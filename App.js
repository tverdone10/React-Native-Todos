import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Nav from './components/Nav'
import ListComponent from './components/ListComponent'
import {uuid} from 'uuidv4'

export default function App() {
  const [todos, setTodos] = useState ([
    {id: uuid(), todoText: "Do Laundry"},
    {id: uuid(), todoText: "Grab cat food"},
    {id: uuid(), todoText: "Pick up dinner"},
    {id: uuid(), todoText: "Meet up with Estefania at 4pm"}
  ])

  return (
    <View style={styles.container}>
      <Nav/>
      <FlatList  data={todos}
        renderItem={({item}) => <ListComponent item={item} /> }/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: 'black'
  }

});
